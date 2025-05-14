import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-bold flex items-center mb-4">
              <span className="text-indigo-400">PKS</span>
              <span className="text-white">INTERIORS</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Transforming spaces with premium interior solutions since 2010. Quality craftsmanship for homes and businesses.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <FooterLink to="/services/wall-painting" label="Wall Painting" />
              <FooterLink to="/services/rain-proofing" label="Rain Proofing" />
              <FooterLink to="/services/texture-finishes" label="Texture Finishes" />
              <FooterLink to="/services/wall-repair" label="Wall Repair" />
              <FooterLink to="/services/ceiling-work" label="Ceiling Work" />
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/portfolio" label="Portfolio" />
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/contact" label="Contact" />
              <FooterLink to="/services" label="Services" />
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="text-indigo-400 mt-1 mr-3" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-indigo-400 mt-1 mr-3" />
                <span>info@pksinteriors.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-indigo-400 mt-1 mr-3" />
                <span>123 Design Street, Creative City, State 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} PKS INTERIORS. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </span>
              <span className="text-gray-400 text-sm hover:text-white transition-colors">
                Terms of Service
              </span>
              <span className="text-gray-400 text-sm hover:text-white transition-colors">
                Cookie Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, label }) => {
  return (
    <li>
      <Link
        to={to}
        className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
      >
        {label}
      </Link>
    </li>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => {
  return (
    <a
      href="#"
      className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors duration-200"
    >
      {icon}
    </a>
  );
};

export default Footer;