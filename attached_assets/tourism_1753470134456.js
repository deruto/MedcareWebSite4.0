import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Tourism() {
  return (
    <div>
      <Header />
      <main className="text-center py-10">
        <h1 className="text-4xl font-bold mb-5">Dental Tourism</h1>
        <p className="mb-5">Explore our international dental packages.</p>
        <h2 className="text-2xl font-bold mb-3">Visa Help</h2>
        <p>We assist with visa applications for our international patients.</p>
        <h2 className="text-2xl font-bold mb-3">Language Support</h2>
        <select className="border p-2">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </main>
      <Footer />
    </div>
  );
}
