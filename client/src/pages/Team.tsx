import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Raj Arya',
    specialty: 'Orthodontics Specialist',
    experience: 'Short Description',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400'
  },
  
  {
    name: 'Dr. Astha Arya',
    specialty: 'Conservative and Endodontics',
    experience: 'Short Description',
    photo: 'https://images.unsplash.com/photo-1594824475871-a8681c5da86e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400'
  }
];

export default function Team() {
  return (
    <div>
      <Header />
      
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-neutral-800 mb-4">Meet Our Expert Team</h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our experienced dental professionals are committed to providing exceptional care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-64 object-cover" 
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-neutral-800 mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">{member.specialty}</p>
                  <p className="text-neutral-600 mb-4">{member.experience}</p>
                  <div className="flex justify-center space-x-4">
                    <Linkedin className="text-primary hover:text-primary-dark cursor-pointer w-5 h-5" />
                    <Mail className="text-primary hover:text-primary-dark cursor-pointer w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
