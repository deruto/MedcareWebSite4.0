import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Raj Arya',
    specialty: 'Orthodontics Specialist',
    experience: '28+ years of experience general dentistry implants specialist',
    photo: 'https://i.postimg.cc/vmWNrrSr/Screenshot-2025-08-13-165516.jpg'
  },
  {
    name: 'Dr. Astha Arya',
    specialty: 'Conservative and Endodontics',
    experience: 'Endodontist with 20+ years expertise in laser and advanced dental procedures',
    photo: 'https://i.postimg.cc/QN1NPwKs/42067b39-ff6b-508e-b8ba-3b878e714f5e-1.jpg'
  },
  {
    name: 'Dr. Satyavrat Arya',
    specialty: 'Orthodontics Specialist',
    experience: '12+ years expertise in implants and TMJ care',
    photo: 'https://i.postimg.cc/XJc94bV5/Screenshot-2025-08-14-130144.jpg'
  },
  
  {
    name: 'Dr. Rajnish Sethi',
    specialty: 'Conservative and Endodontics',
    experience: '22+ years experience in joint and spine surgeries.',
    photo: 'https://i.postimg.cc/PrmJ745L/dr-rajnish-sethi-18747.jpg'
  }
];

export default function Team() {
  return (
    <div className="oxanium-font">
      <Header />
      
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-neutral-800 mb-4"><span style={{ fontFamily: 'Handel' }}>Meet Our Expert Team</span></h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our experienced dental professionals are committed to providing exceptional care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full aspect-square object-cover object-center" 
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
