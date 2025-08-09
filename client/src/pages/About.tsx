import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div>
      <Header />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-neutral-800 mb-6">About Us</h1>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                At Med Care Dental & Laser Centre, we believe your smile is more than just teeth — it's a reflection of your<strong> health, confidence, and personality.</strong><br />
Med Care offers advanced laser dentistry with all four types of dental lasers, ensuring precision, faster healing, and minimal discomfort. <br />Backed by 25+ years of experience, we combine cutting-edge digital <strong> OPG imaging and modern technologies </strong> to deliver safe, effective, and patient-focused care. Consistently rated <strong>4.5+ stars</strong>, we’re known for ethical practices, innovation, and a commitment to redefining the dental experience.

              </p>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-neutral-800 mb-4">Why Choose Us</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">1</div>
                    <div>
                      <div className="font-semibold text-neutral-800">All 4 Dental Lasers</div>
                      <div className="text-neutral-600">Every type of dental laser for versatile and precise treatments</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">2</div>
                    <div>
                      <div className="font-semibold text-neutral-800">25+ Years of Expertise</div>
                      <div className="text-neutral-600">Decades of clinical experience ensure confident and reliable care</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">3</div>
                    <div>
                      <div className="font-semibold text-neutral-800">Advanced Digital Imaging</div>
                      <div className="text-neutral-600">OPG and digital tools enable faster, more accurate diagnosis and planning</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">4</div>
                    <div>
                      <div className="font-semibold text-neutral-800">Quick Healing, Less Pain</div>
                      <div className="text-neutral-600">Laser speeds up recovery with minimal discomfort</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">5</div>
                    <div>
                      <div className="font-semibold text-neutral-800">Transparent & Ethical</div>
                      <div className="text-neutral-600">Clear treatment plans with honest, patient-first approach</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">6</div>
                    <div>
                      <div className="font-semibold text-neutral-800">High Safety Standards</div>
                      <div className="text-neutral-600">Strict hygiene protocols and fully sterilized environment for every patient</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Modern dental clinic exterior" 
                className="rounded-lg shadow-lg" 
              />
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Medical awards and certifications" 
                className="rounded-lg shadow-lg mt-8" 
              />
              <img 
                src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Advanced dental equipment" 
                className="rounded-lg shadow-lg -mt-8" 
              />
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Dental team collaboration" 
                className="rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
