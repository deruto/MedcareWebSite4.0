import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <Header />
      <main className="text-center py-10">
        <h1 className="text-4xl font-bold mb-5">Contact Us</h1>
        <div className="mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d144.9537353153163!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0f0f0f%3A0x0!2sMedcare%20Dwarka!5e0!3m2!1sen!2sin!4v1616161616161!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <p>Phone: +91 12345 67890</p>
        <p>WhatsApp: +91 98765 43210</p>
        <form className="flex flex-col items-center">
          <input type="text" placeholder="Name" className="mb-2 border p-2" />
          <input type="email" placeholder="Email" className="mb-2 border p-2" />
          <input type="tel" placeholder="Phone" className="mb-2 border p-2" />
          <textarea placeholder="Message" className="mb-2 border p-2" rows="4"></textarea>
          <button className="bg-red-600 text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
