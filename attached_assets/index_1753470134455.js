import Header from '../components/Header';
import Footer from '../components/Footer';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { useState } from 'react';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="text-center py-10">
        <h1 className="text-4xl font-bold mb-5">Painless Dentistry with Laser Precision</h1>
        <div className="mb-5">
          <button className="bg-red-600 text-white px-4 py-2 rounded mr-2">Book Appointment</button>
          <button className="bg-gray-300 text-black px-4 py-2 rounded">Request Virtual Consult</button>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-10">
          {['Laser', 'RCT', 'Implants', 'Pediatric', 'Smile Design', 'Preventive Care'].map((service) => (
            <div key={service} className="border p-4 rounded">
              <h2 className="font-bold">{service}</h2>
            </div>
          ))}
        </div>
        <TestimonialCarousel />
        <div className="mt-10">
          <img src="/nabh-badge.png" alt="NABH Badge" className="mx-auto mb-2" />
          <p className="text-lg">4.5★ Rating</p>
          <p className="text-lg">28+ Years of Experience</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
