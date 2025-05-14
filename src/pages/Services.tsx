import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import services from '../data/services';
import { CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div>
      <Hero
        title="Our Professional Services"
        subtitle="Comprehensive interior solutions tailored to your needs"
        backgroundImage="https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        size="md"
      />

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Space With Our Expertise
            </h2>
            <p className="text-xl text-gray-600">
              From wall painting to rain proofing, we provide comprehensive interior solutions
              to elevate your living and working spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
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
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              We follow a structured approach to ensure every project is completed to the highest standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We begin with a thorough consultation to understand your needs and vision.',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Our team develops a comprehensive plan including timeline and materials.',
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Expert craftsmen implement the plan with attention to detail and quality.',
              },
              {
                step: '04',
                title: 'Quality Check',
                description: 'Final inspection ensures everything meets our high standards before handover.',
              },
            ].map((process, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Guarantee */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Quality Guarantee
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We stand behind our work with comprehensive warranties and guarantees. Our commitment to quality is reflected in every project we undertake.
              </p>

              <ul className="space-y-4">
                {[
                  'Premium materials sourced from trusted suppliers',
                  'Skilled professionals with specialized training',
                  'Comprehensive warranty on all services',
                  'Adherence to industry standards and best practices',
                  'Rigorous quality control at every stage',
                  'Timely project completion',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 size={24} className="text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/4489761/pexels-photo-4489761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Quality craftsmanship"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and detailed quote tailored to your needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;