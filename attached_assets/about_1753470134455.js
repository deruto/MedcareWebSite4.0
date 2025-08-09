import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Header />
      <main className="text-center py-10">
        <h1 className="text-4xl font-bold mb-5">About Dr. Raj Arya</h1>
        <p className="mb-5">Our mission is to provide the best dental care with a focus on laser dentistry.</p>
        <h2 className="text-2xl font-bold mb-3">Timeline of Growth</h2>
        <ul className="list-disc list-inside">
          <li>1995: Clinic Established</li>
          <li>2005: First Laser Treatment</li>
          <li>2010: International Certifications</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
