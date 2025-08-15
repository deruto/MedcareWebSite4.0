import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IdCard, Languages, Hotel, Car, MapPin, CreditCard } from 'lucide-react';

export default function Tourism() {
  return (
    <div className="oxanium-font">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-neutral-800 mb-4"><span style={{ fontFamily: 'Handel' }}>Global Dental Services</span></h1>
            <p className="text-xl text-neutral-600">Comprehensive support for our international patients</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-top">
            <div>
              <h2 className="text-3xl font-bold text-neutral-800 mb-6"><span style={{ fontFamily: 'Handel' }}>Complete Support Package</span></h2>
              
              <div className="space-y-6">


                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 mt-1">
                    <Languages className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-2">Language Support</h3>
                    <p className="text-neutral-600 mb-3">
                      Clear communication and support for patients worldwide.
                    </p>
                    <div className="max-w-xs">
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 mt-1">
                    <Hotel className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-2">Accommodation</h3>
                    <p className="text-neutral-600">
                      Partner hotels and recovery facilities near our clinic for your convenience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 mt-1">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-2">Transportation</h3>
                    <p className="text-neutral-600">
                      Airport pickup and drop-off services, plus transportation to/from clinic.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="International dental tourism" 
                className="rounded-xl shadow-lg w-full" 
              />
              
              <div className="bg-neutral-50 rounded-xl p-6">
                <h3 className="font-semibold text-neutral-800 mb-4 flex items-center">
                  <CreditCard className="mr-2 w-5 h-5 text-primary" />
                  Treatment Packages
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-700">Complete Smile Makeover</span>
                    <span className="font-semibold text-primary">Starting ₹50,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-700">Dental Implant Package</span>
                    <span className="font-semibold text-primary">Starting ₹25,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-700">Laser Treatment Package</span>
                    <span className="font-semibold text-primary">Starting ₹15,000</span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-3 mt-3">
                    <span className="text-neutral-700 font-medium">Consultation</span>
                    <span className="font-semibold text-green-600">FREE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
