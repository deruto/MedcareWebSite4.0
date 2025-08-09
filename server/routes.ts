import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, insertContactSchema, insertSmileAnalysisSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Booking routes
  app.post("/api/bookings", async (req, res) => {
    try {
      const bookingData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(bookingData);
      res.json({ success: true, booking });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Failed to create booking" });
      }
    }
  });

  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getBookings();
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch bookings" });
    }
  });

  // Contact routes
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Failed to create contact" });
      }
    }
  });

  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch contacts" });
    }
  });

  // Smile Analysis routes
  app.post("/api/smile-analysis", async (req, res) => {
    try {
      const analysisData = insertSmileAnalysisSchema.parse(req.body);
      const analysis = await storage.createSmileAnalysis(analysisData);
      res.json({ success: true, analysis });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Failed to create smile analysis" });
      }
    }
  });

  app.get("/api/smile-analysis", async (req, res) => {
    try {
      const analyses = await storage.getSmileAnalysis();
      res.json(analyses);
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch smile analyses" });
    }
  });

  app.patch("/api/smile-analysis/:id/payment", async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const analysis = await storage.updateSmileAnalysisPayment(id, status);
      if (analysis) {
        res.json({ success: true, analysis });
      } else {
        res.status(404).json({ success: false, message: "Analysis not found" });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to update payment status" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
