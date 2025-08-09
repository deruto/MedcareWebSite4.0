import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SmileAnalysis() {
  return (
    <div>
      <Header />
      <main className="text-center py-10">
        <h1 className="text-4xl font-bold mb-5">Smile Analysis</h1>
        <p className="mb-5">Upload your smile for a digital preview.</p>
        <form className="flex flex-col items-center">
          <input type="file" className="mb-2" />
          <input type="text" placeholder="Name" className="mb-2 border p-2" />
          <input type="email" placeholder="Email" className="mb-2 border p-2" />
          <input type="tel" placeholder="Phone" className="mb-2 border p-2" />
          <button className="bg-red-600 text-white px-4 py-2 rounded">Submit - ₹2500</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
