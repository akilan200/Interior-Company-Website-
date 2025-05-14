import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import services from '../data/services';
import portfolioItems from '../data/portfolio';
import testimonials from '../data/testimonials';

const Home: React.FC = () => {
  const featuredServices = services.slice(0, 3);
  const featuredPortfolio = portfolioItems.filter(item => item.featured).slice(0, 6);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div>
      <Hero
        title="Transform Your Space With Premium Interior Solutions"
        subtitle="Professional painting, rain proofing, and custom textures for your home or business"
        buttonText="Explore Our Services"
        buttonLink="/services"
        backgroundImage="https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide high-quality interior solutions to transform your space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                image={service.image}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-200"
            >
              View all services
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose InteriorsPro For Your Next Project?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 15 years of experience in the industry, we deliver exceptional quality and customer satisfaction for every project.
              </p>

              <ul className="space-y-4">
                {[
                  'Professional team with specialized expertise',
                  'Premium materials and modern techniques',
                  'On-time project completion and clean work areas',
                  'Comprehensive warranty on all services',
                  'Transparent pricing with no hidden costs',
                  'Fully insured and licensed professionals',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 size={24} className="text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Professional team at work"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our portfolio of successful projects and transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPortfolio.map((item) => (
              <div 
                key={item.id} 
                className="group relative overflow-hidden rounded-lg shadow-md bg-white cursor-pointer transition-all duration-300 hover:shadow-lg h-[320px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-200 text-sm mb-4">{item.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
                    <Link
                      to="/portfolio"
                      className="text-indigo-300 hover:text-indigo-200 font-medium text-sm inline-flex items-center"
                    >
                      View Details
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't take our word for it – hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
                testimonial={testimonial.testimonial}
                image={testimonial.image}
                service={testimonial.service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Space?
              </h2>
              <p className="text-xl text-indigo-200">
                Contact us today for a free consultation and quote. Our team of experts is ready to bring your vision to life.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-white text-indigo-700 hover:bg-gray-100 transition-colors duration-200"
              >
                Request a Quote
              </Link>
              <a
                href="tel:+11234567890"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-indigo-600 transition-colors duration-200"
              >
                <Phone size={18} className="mr-2" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;