import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import services from '../data/services';
import portfolioItems from '../data/portfolio';
import PortfolioCard from '../components/PortfolioCard';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h2>
          <p className="text-gray-600 mb-6">Sorry, the service you're looking for doesn't exist.</p>
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = portfolioItems.filter((item) => item.category === id).slice(0, 3);

  return (
    <div>
      <Hero
        title={service.title}
        subtitle={service.shortDescription}
        backgroundImage={service.image}
        size="md"
      />

      {/* Service Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-lg text-gray-600 mb-8">{service.description}</p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 size={20} className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our team of experienced professionals approaches each {service.title.toLowerCase()} project with meticulous attention to detail. We begin with a thorough assessment of your space to understand the specific requirements and challenges. This allows us to create a customized solution that addresses your unique needs and ensures lasting results.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We use only premium materials and advanced techniques to deliver exceptional quality. Our craftsmen are trained in the latest industry practices and work efficiently to minimize disruption to your daily activities.
              </p>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Request a Quote</h3>
                <p className="text-gray-600 mb-6">
                  Interested in our {service.title} service? Contact us today for a free consultation and quote.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>

              <div className="mt-8 bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
                <ul className="space-y-3">
                  {[
                    'Experienced professionals',
                    'Premium quality materials',
                    'Attention to detail',
                    'Timely project completion',
                    'Competitive pricing',
                    'Excellent customer service',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 size={16} className="text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Process</h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>
            <div className="space-y-16">
              {[
                {
                  title: 'Initial Consultation',
                  description: `We begin with a thorough assessment of your space to understand your ${service.title.toLowerCase()} needs and requirements.`,
                },
                {
                  title: 'Detailed Proposal',
                  description: 'We prepare a comprehensive plan including materials, timeline, and pricing for your approval.',
                },
                {
                  title: 'Preparation',
                  description: 'Our team prepares the work area, protecting your furniture and belongings before starting.',
                },
                {
                  title: 'Expert Execution',
                  description: `Our skilled professionals execute the ${service.title.toLowerCase()} work with precision and attention to detail.`,
                },
                {
                  title: 'Quality Inspection',
                  description: 'We conduct a thorough quality check to ensure all work meets our high standards.',
                },
                {
                  title: 'Final Walkthrough',
                  description: 'We walk you through the completed project to ensure your complete satisfaction.',
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className={`ml-8 md:ml-0 md:w-5/12 bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Related Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((project) => (
                <PortfolioCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  description={project.description}
                  client={project.client}
                  location={project.location}
                  completionDate={project.completionDate}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/portfolio"
                className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-200"
              >
                View all projects
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="bg-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and detailed quote for your {service.title.toLowerCase()} project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-100 transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;