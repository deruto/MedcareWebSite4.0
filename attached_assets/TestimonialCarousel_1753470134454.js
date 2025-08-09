export default function TestimonialCarousel() {
  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-3">Testimonials</h2>
      <div className="flex overflow-x-auto">
        {['"Best dental experience!"', '"Highly recommend!"', '"Professional and caring!"'].map((quote, index) => (
          <div key={index} className="border p-4 rounded mr-4">
            <p>{quote}</p>
            <p>⭐⭐⭐⭐⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
}
