import { type User, type InsertUser, type Booking, type InsertBooking, type Contact, type InsertContact, type SmileAnalysis, type InsertSmileAnalysis } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBookings(): Promise<Booking[]>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  createSmileAnalysis(analysis: InsertSmileAnalysis): Promise<SmileAnalysis>;
  getSmileAnalysis(): Promise<SmileAnalysis[]>;
  updateSmileAnalysisPayment(id: string, status: string): Promise<SmileAnalysis | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private bookings: Map<string, Booking>;
  private contacts: Map<string, Contact>;
  private smileAnalysisMap: Map<string, SmileAnalysis>;

  constructor() {
    this.users = new Map();
    this.bookings = new Map();
    this.contacts = new Map();
    this.smileAnalysisMap = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = randomUUID();
    const booking: Booking = { 
      ...insertBooking, 
      id, 
      date: insertBooking.date || "",
      notes: insertBooking.notes || "",
      createdAt: new Date() 
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createSmileAnalysis(insertAnalysis: InsertSmileAnalysis): Promise<SmileAnalysis> {
    const id = randomUUID();
    const analysis: SmileAnalysis = { 
      ...insertAnalysis, 
      id, 
      imagePath: insertAnalysis.imagePath || "",
      paymentStatus: "pending",
      createdAt: new Date() 
    };
    this.smileAnalysisMap.set(id, analysis);
    return analysis;
  }

  async getSmileAnalysis(): Promise<SmileAnalysis[]> {
    return Array.from(this.smileAnalysisMap.values());
  }

  async updateSmileAnalysisPayment(id: string, status: string): Promise<SmileAnalysis | undefined> {
    const analysis = this.smileAnalysisMap.get(id);
    if (analysis) {
      analysis.paymentStatus = status;
      this.smileAnalysisMap.set(id, analysis);
    }
    return analysis;
  }
}

export const storage = new MemStorage();
