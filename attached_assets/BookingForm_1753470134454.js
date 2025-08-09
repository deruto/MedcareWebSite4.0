export default function BookingForm() {
  return (
    <form className="flex flex-col items-center">
      <input type="text" placeholder="Name" className="mb-2 border p-2" />
      <input type="tel" placeholder="Phone" className="mb-2 border p-2" />
      <select className="mb-2 border p-2">
        <option>Select Service</option>
        <option>Laser Dentistry</option>
        <option>Root Canal Treatment</option>
        <option>Dental Implants</option>
      </select>
      <button className="bg-red-600 text-white px-4 py-2 rounded">Book Now</button>
    </form>
  );
}
