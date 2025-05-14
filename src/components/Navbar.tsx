import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900">
              <span className="text-indigo-600">PKS</span>INTERIORS
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink to="/" label="Home" current={location.pathname === '/'} />
              <NavLink to="/services" label="Services" current={location.pathname === '/services' || location.pathname.startsWith('/services/')} />
              <NavLink to="/portfolio" label="Portfolio" current={location.pathname === '/portfolio'} />
              <NavLink to="/about" label="About" current={location.pathname === '/about'} />
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+11234567890" className="text-indigo-600 hover:text-indigo-700 flex items-center font-medium">
              <Phone size={18} className="mr-2" />
              <span>(123) 456-7890</span>
            </a>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 bg-white">
          <MobileNavLink to="/" label="Home" current={location.pathname === '/'} />
          <MobileNavLink to="/services" label="Services" current={location.pathname === '/services' || location.pathname.startsWith('/services/')} />
          <MobileNavLink to="/portfolio" label="Portfolio" current={location.pathname === '/portfolio'} />
          <MobileNavLink to="/about" label="About" current={location.pathname === '/about'} />
          <div className="pt-4 border-t border-gray-200">
            <a
              href="tel:+11234567890"
              className="block px-3 py-2 text-base font-medium text-indigo-600 hover:text-indigo-700 flex items-center"
            >
              <Phone size={18} className="mr-2" />
              <span>(123) 456-7890</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  current: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, current }) => {
  return (
    <Link
      to={to}
      className={`py-2 text-sm font-medium transition-colors duration-200 ${
        current
          ? 'text-indigo-600 border-b-2 border-indigo-600'
          : 'text-gray-700 hover:text-indigo-600'
      }`}
    >
      {label}
    </Link>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ to, label, current }) => {
  return (
    <Link
      to={to}
      className={`block px-3 py-2 text-base font-medium ${
        current
          ? 'text-indigo-600 bg-indigo-50 rounded-md'
          : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;