import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ServiceCard from '@/components/ServiceCard';
import BookingForm from '@/components/BookingForm';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Calendar, Video, Star, Award, User, Zap, Heart, Shield, Smile, Baby, Sparkles } from 'lucide-react';

const services = [
{
    title: 'Root Canal Treatment',
    description: 'Expert endodontic care to save your natural teeth with advanced pain management techniques.',
    icon: <Heart />,
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250',
    slug: 'rct'
  },
  {
    title: 'Dental Implants',
    description: 'Permanent solutions for missing teeth with titanium implants for natural look and function.',
    icon: <Shield />,
    image: 'https://images.unsplash.com/photo-1593022356769-11f762e25ed9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'implants'
  },
  {
    title: 'Laser Dentistry',
    description: 'Advanced laser technology for painless procedures with faster healing and minimal discomfort.',
    icon: <Zap />,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250',
    slug: 'laser'
  },
  {
    title: 'Oral Surgery & Jaw Care',
    description: 'Surgical treatments for wisdom teeth, cysts, jaw misalignment, and complex extractions.',
    icon: <Baby />,
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250',
    slug: 'jawcare'
  },
  {
    title: 'Smile Design',
    description: 'Transform your smile with cosmetic dentistry including veneers, whitening, and orthodontics.',
    icon: <Smile />,
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250',
    slug: 'smile-design'
  },
  {
    title: 'Preventive Care',
    description: 'Regular checkups, cleanings, and preventive treatments to maintain optimal oral health.',
    icon: <Sparkles />,
    image: 'https://images.unsplash.com/photo-1606811842243-af7e16970c1f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'preventive'
  }
];

export default function Home() {
  return (
    <div className="oxanium-font">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-neutral-800 mb-6 leading-tight">
                <span style={{ fontFamily: 'Handel' }}>
                Painless Dentistry with 
                <span className="text-primary" style={{ fontFamily: 'Handel' }}> Laser Precision</span>
                </span>
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Experience advanced dental care with 28+ years of expertise, offering laser dentistry, dental implants, and comprehensive oral health solutions.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Appointment
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-12">
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="font-semibold text-neutral-700">4.5 Rating</span>
                </div>
                <div className="flex items-center text-neutral-700">
                  <User className="text-primary mr-2 w-4 h-4" />
                  <span className="font-semibold">28+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern dental clinic interior" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-pulse-slow">
                <div className="text-2xl font-bold text-primary">5000+</div>
                <div className="text-sm text-neutral-600">Happy Patients</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-pulse-slow">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-neutral-600">Painless Procedures</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-800 mb-4"><span style={{ fontFamily: 'Handel' }}>Our Specialized Services</span></h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Advanced dental treatments using cutting-edge technology for optimal patient comfort and results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
                slug={service.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Booking Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6"><span style={{ fontFamily: 'Handel' }}>Book Your Appointment Today</span></h2>
          <p className="text-xl mb-12 opacity-90">Experience painless dentistry with our expert team</p>
          
          <BookingForm />
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/919810034578" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 animate-pulse-slow"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm4.52 7.81c-.07-.63-.32-1.15-.75-1.55-.43-.4-.96-.61-1.54-.61-.58 0-1.11.21-1.54.61-.32.3-.54.72-.66 1.19-.18.72-.01 1.54.5 2.26l-1.92 5.27c-.07.18.02.38.2.45.06.02.12.03.18.03.13 0 .25-.08.31-.2l1.92-5.27c.72.33 1.54.33 2.26 0 .43-.2.79-.52 1.05-.94.18-.29.25-.63.25-.98 0-.35-.07-.69-.26-1.26z"/>
          </svg>
        </a>
      </div>

      <Footer />
    </div>
  );
}
