export default function ServiceCard({ title, description }) {
  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold text-xl">{title}</h2>
      <p>{description}</p>
      <button className="bg-red-600 text-white px-4 py-2 rounded mt-2">Learn More</button>
    </div>
  );
}
