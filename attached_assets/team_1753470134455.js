import Header from '../components/Header';
import Footer from '../components/Footer';

const teamMembers = [
  { name: 'Dr. Raj Arya', specialty: 'Orthodontics', experience: '15 years', photo: '/doctor1.jpg' },
  { name: 'Dr. Neha Sharma', specialty: 'Pediatric Dentistry', experience: '10 years', photo: '/doctor2.jpg' },
];

export default function Team() {
  return (
    <div>
      <Header />
      <main className="text-center py-10">
        <h1 className="text-4xl font-bold mb-5">Meet Our Team</h1>
        <div className="grid grid-cols-2 gap-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="border p-4 rounded">
              <img src={member.photo} alt={member.name} className="rounded-full mb-2" />
              <h2 className="font-bold">{member.name}</h2>
              <p>{member.specialty}</p>
              <p>{member.experience}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
