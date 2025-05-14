import React, { useState } from 'react';
import Hero from '../components/Hero';
import PortfolioCard from '../components/PortfolioCard';
import portfolioItems, { PortfolioItem } from '../data/portfolio';
import { X } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filteredProjects = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'wall-painting', name: 'Wall Painting' },
    { id: 'rain-proofing', name: 'Rain Proofing' },
    { id: 'texture-finishes', name: 'Texture Finishes' },
    { id: 'wall-repair', name: 'Wall Repair' },
    { id: 'ceiling-work', name: 'Ceiling Work' },
  ];

  return (
    <div>
      <Hero
        title="Our Portfolio"
        subtitle="Explore our past projects and transformations"
        backgroundImage="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        size="md"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center mb-12 space-x-2 space-y-2 sm:space-y-0">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  filter === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
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
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-700">No projects found in this category.</h3>
              <p className="text-gray-500 mt-2">Please select another category or view all projects.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 sm:h-80 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full font-medium">
                  {selectedProject.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
              <p className="text-gray-600 mb-6">{selectedProject.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">CLIENT</h4>
                  <p className="text-gray-900">{selectedProject.client}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">LOCATION</h4>
                  <p className="text-gray-900">{selectedProject.location}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">COMPLETED</h4>
                  <p className="text-gray-900">{selectedProject.completionDate}</p>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Details</h3>
              <p className="text-gray-600 mb-6">
                This project showcases our expertise in {selectedProject.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}. 
                We worked closely with the client to understand their vision and delivered a solution that exceeded their expectations.
                Our team of skilled professionals ensured that every detail was executed perfectly, resulting in a stunning transformation.
              </p>
              
              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let us transform your space with our expert services. Contact us today for a free consultation.
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

export default Portfolio;