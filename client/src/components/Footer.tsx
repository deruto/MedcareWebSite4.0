import { Link } from 'wouter';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center text-primary font-bold text-2xl mb-4">
              <div className="w-8 h-8 mr-2 bg-primary rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              Medcare Dwarka
            </div>
            <p className="text-neutral-300 mb-6">
              Leading dental care provider with 28+ years of experience in advanced dentistry and laser treatments.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="bg-neutral-700 hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="bg-neutral-700 hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="bg-neutral-700 hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="bg-neutral-700 hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/"><a className="text-neutral-300 hover:text-primary transition-colors duration-300">Home</a></Link></li>
              <li><Link href="/about"><a className="text-neutral-300 hover:text-primary transition-colors duration-300">About Us</a></Link></li>
              <li><Link href="/team"><a className="text-neutral-300 hover:text-primary transition-colors duration-300">Our Team</a></Link></li>
              <li><Link href="/services"><a className="text-neutral-300 hover:text-primary transition-colors duration-300">Services</a></Link></li>
              <li><Link href="/contact"><a className="text-neutral-300 hover:text-primary transition-colors duration-300">Contact</a></Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/laser"><a className="text-neutral-300 hover:text-primary transition-colors duration-300">Laser Dentistry</a></Link></li>
              <li><Link href="/services/implants"><a className="text-neutral-300 hover:text-primary transition-colors duration-300">Dental Implants</a></Link></li>
              <li><Link href="/services/rct"><a className="text-neutral-300 hover:text-primary transition-colors duration-300">Root Canal</a></Link></li>
              <li><Link href="/services/smile-design"><a className="text-neutral-300 hover:text-primary transition-colors duration-300">Smile Design</a></Link></li>
              <li><Link href="/services/jawcare"><a className="text-neutral-300 hover:text-primary transition-colors duration-300">Oral Surgery & Jaw Care</a></Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="text-primary mr-3 w-4 h-4" />
                <span className="text-neutral-300">+91 12345 67890</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-primary mr-3 w-4 h-4" />
                <span className="text-neutral-300">info@medcaredwarka.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="text-primary mr-3 w-4 h-4 mt-1" />
                <span className="text-neutral-300">Sector 12, Dwarka<br />New Delhi - 110075</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400">© 2023 Medcare Dwarka. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
