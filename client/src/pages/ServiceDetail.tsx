import { useParams } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import { Zap, Heart, Shield, Baby, Smile, Sparkles, CheckCircle, Star } from 'lucide-react';

const services = {
  laser: {
    title: 'Laser Dentistry',
    description: 'Advanced laser technology for painless dental procedures.',
    icon: <Zap />,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    longDescription: 'Our laser dentistry services utilize the most advanced laser technology available, providing patients with minimally invasive treatments that result in less pain, reduced bleeding, faster healing times, and improved overall outcomes.',
    benefits: [
      'Minimal to no pain during procedures',
      'Reduced bleeding and swelling',
      'Faster healing and recovery',
      'Precise treatment targeting',
      'Reduced need for anesthesia',
      'Lower risk of infection'
    ],
    procedures: [
      'Gum disease treatment',
      'Cavity preparation',
      'Teeth whitening',
      'Soft tissue surgery',
      'Crown lengthening',
      'Lesion removal'
    ]
  },
  rct: {
    title: 'Root Canal Treatment',
    description: 'Expert endodontic care to save your natural teeth.',
    icon: <Heart />,
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    longDescription: 'Root canal therapy is a highly effective treatment that can save your natural tooth when the inner pulp becomes infected or severely damaged. Our advanced techniques ensure comfortable treatment with excellent success rates.',
    benefits: [
      'Saves your natural tooth',
      'Eliminates tooth pain',
      'Prevents spread of infection',
      'Cost-effective solution',
      'High success rate',
      'Quick recovery'
    ],
    procedures: [
      'Pulp removal and cleaning',
      'Root canal shaping',
      'Disinfection treatment',
      'Filling and sealing',
      'Crown placement',
      'Follow-up care'
    ]
  },
  implants: {
    title: 'Dental Implants',
    description: 'Permanent solutions for missing teeth with natural look and function.',
    icon: <Shield />,
    image: 'https://images.unsplash.com/photo-1593022356769-11f762e25ed9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    longDescription: 'Dental implants are the gold standard for replacing missing teeth. Our titanium implants integrate with your jawbone to provide a stable foundation for crowns, bridges, or dentures that look and function like natural teeth.',
    benefits: [
      'Permanent tooth replacement',
      'Natural appearance and feel',
      'Preserves jawbone structure',
      'No damage to adjacent teeth',
      'Easy maintenance',
      'Long-lasting solution'
    ],
    procedures: [
      'Initial consultation',
      'Treatment planning',
      'Implant placement',
      'Healing period',
      'Crown/bridge placement',
      'Ongoing maintenance'
    ]
  },
  jawcare: {
    title: 'Oral Surgery & Jaw Care',
    description: 'Surgical treatments for wisdom teeth, cysts, jaw misalignment, and complex extractions.',
    icon: <Baby />,
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    longDescription: 'Our oral surgery and jaw care services address a range of conditions, from wisdom teeth removal to corrective jaw treatments. We prioritize precision, comfort, and faster recovery, ensuring the best outcomes for your oral health.',
    benefits: [
      'Safe and precise removal of problematic teeth',
      'Correction of jaw alignment',
      'Reduces pain and infection risks',
      'Improves chewing and bite function',
      'Prevents long-term dental complications'
    ],
    procedures: [
      'Oral examination and imaging (OPG/CT)',
      'Surgical procedure under local/general anesthesia',
      'Post-op medication and healing',
      'Follow-up care'
    ]
  },
  'smile-design': {
    title: 'Smile Design',
    description: 'Transform your smile with cosmetic dentistry solutions.',
    icon: <Smile />,
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    longDescription: 'Our comprehensive smile design services combine artistry with advanced dental techniques to create beautiful, natural-looking smiles that boost your confidence and improve your overall appearance.',
    benefits: [
      'Enhanced facial aesthetics',
      'Improved self-confidence',
      'Natural-looking results',
      'Customized treatment plans',
      'Long-lasting outcomes',
      'Comprehensive approach'
    ],
    procedures: [
      'Teeth whitening',
      'Porcelain veneers',
      'Dental bonding',
      'Gum contouring',
      'Orthodontic treatment',
      'Crown and bridge work'
    ]
  },
  preventive: {
    title: 'Preventive Care',
    description: 'Comprehensive preventive treatments to maintain optimal oral health.',
    icon: <Sparkles />,
    image: 'https://images.unsplash.com/photo-1606811842243-af7e16970c1f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    longDescription: 'Prevention is the cornerstone of good oral health. Our comprehensive preventive care program helps you maintain healthy teeth and gums while catching potential problems early when they\'re easier and less expensive to treat.',
    benefits: [
      'Early problem detection',
      'Cost-effective approach',
      'Maintains oral health',
      'Prevents major treatments',
      'Regular monitoring',
      'Education and guidance'
    ],
    procedures: [
      'Regular dental cleanings',
      'Comprehensive examinations',
      'Digital X-rays',
      'Oral cancer screening',
      'Fluoride treatments',
      'Dental sealants'
    ]
  }
};

export default function ServiceDetail() {
  const params = useParams();
  const serviceKey = params.service as keyof typeof services;
  const service = services[serviceKey];

  if (!service) {
    return (
      <div className="oxanium-font">
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-neutral-800 mb-4">Service Not Found</h1>
            <p className="text-neutral-600">The requested service could not be found.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="oxanium-font">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="text-primary text-3xl mr-4">
                  {service.icon}
                </div>
                <h1 className="text-4xl font-bold text-neutral-800">{service.title}</h1>
              </div>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                {service.longDescription}
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-neutral-600">Highly rated treatment</span>
              </div>
            </div>
            
            <div>
              <img 
                src={service.image} 
                alt={service.title} 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Procedures */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-800 mb-8">Treatment Benefits</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Procedures */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-800 mb-8">Treatment Procedures</h2>
              <div className="space-y-4">
                {service.procedures.map((procedure, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-neutral-700">{procedure}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Book Your {service.title} Appointment</h2>
          <p className="text-xl mb-12 opacity-90">Schedule your consultation with our expert team</p>
          
          <BookingForm />
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
