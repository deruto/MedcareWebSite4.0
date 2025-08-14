import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Zap, Heart, Shield, Baby, Smile, Sparkles } from 'lucide-react';

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

export default function Services() {
  return (
    <div>
      <Header />
      
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-neutral-800 mb-4">Our Specialized Services</h1>
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
      
      <Footer />
    </div>
  );
}
