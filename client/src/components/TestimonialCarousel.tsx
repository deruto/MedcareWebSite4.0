import { Star, User } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Gupta",
    role: "Verified Patient",
    content: "Best dental experience I've ever had! The laser treatment was completely painless and the results are amazing. Dr. Arya is truly skilled.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Verified Patient",
    content: "Highly recommend this clinic! The team is professional, caring, and the technology they use is impressive. My implant procedure was smooth.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Verified Patient",
    content: "Professional and caring staff! My daughter feels comfortable here. Dr. Neha is excellent with children. Great pediatric dental care.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60"
  }
];

export default function TestimonialCarousel() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4"><span style={{ fontFamily: 'Handel' }}>What Our Patients Say</span></h2>
          <p className="text-xl text-neutral-600">Real experiences from our valued patients</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-neutral-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-neutral-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-neutral-800">{testimonial.name}</div>
                  <div className="text-neutral-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
