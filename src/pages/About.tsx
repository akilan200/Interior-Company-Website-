import React from 'react';
import Hero from '../components/Hero';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      <Hero
        title="About InteriorsPro"
        subtitle="Professional interior solutions since 2010"
        backgroundImage="https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        size="md"
      />

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2010, InteriorsPro began as a small family business specializing in residential wall painting. Over the years, we have grown into a comprehensive interior solutions provider, expanding our services to include rain proofing, texture finishes, wall repair, and ceiling work.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our journey has been marked by a steadfast commitment to quality, craftsmanship, and customer satisfaction. What started as a passion project has evolved into a trusted name in the industry, serving both residential and commercial clients across the region.
              </p>
              <p className="text-lg text-gray-600">
                Today, we take pride in our team of skilled professionals who share our vision of transforming spaces with premium solutions that stand the test of time.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Company history"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mission & Values
            </h2>
            <p className="text-xl text-gray-600">
              We are driven by a clear mission and guided by core values that define who we are
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To transform spaces with premium interior solutions that enhance aesthetics, functionality, and durability, while delivering exceptional customer service at every step of the journey.
              </p>
              <p className="text-gray-600">
                We strive to be the trusted partner for all interior needs, creating environments that inspire and endure through quality craftsmanship and innovative approaches.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-4">
                {[
                  'Quality: We never compromise on the quality of materials or workmanship',
                  'Integrity: We operate with honesty and transparency in all interactions',
                  'Reliability: We deliver on our promises and complete projects on time',
                  'Innovation: We continuously improve and adopt new techniques',
                  'Customer-Centric: We prioritize customer satisfaction above all else',
                ].map((value, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 size={22} className="text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the professionals who bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'David Anderson',
                position: 'Founder & CEO',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                bio: 'With over 20 years of experience in interior solutions, David founded InteriorsPro with a vision to transform spaces with premium quality work.',
              },
              {
                name: 'Sarah Johnson',
                position: 'Creative Director',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                bio: 'Sarah brings her artistic vision and expertise in color theory to create stunning designs that elevate every space.',
              },
              {
                name: 'Michael Rodriguez',
                position: 'Operations Manager',
                image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                bio: 'Michael ensures smooth project execution, managing resources and timelines to deliver exceptional results on schedule.',
              },
              {
                name: 'Jennifer Lee',
                position: 'Client Relations',
                image: 'https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                bio: 'Jennifer is dedicated to providing outstanding customer service, ensuring client satisfaction throughout the project journey.',
              },
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Milestones that mark our journey of excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              {
                year: '2010',
                title: 'Company Founded',
                description: 'InteriorsPro was established as a specialized wall painting service.',
              },
              {
                year: '2013',
                title: 'Service Expansion',
                description: 'Added rain proofing and texture finishes to our service offerings.',
              },
              {
                year: '2015',
                title: 'Industry Recognition',
                description: 'Received "Excellence in Craftsmanship" award from the Regional Contractors Association.',
              },
              {
                year: '2017',
                title: 'Commercial Division',
                description: 'Expanded operations to include commercial projects and larger developments.',
              },
              {
                year: '2020',
                title: '10-Year Anniversary',
                description: 'Celebrated a decade of service with over 1,000 successful projects completed.',
              },
              {
                year: '2023',
                title: 'Sustainable Practices',
                description: 'Implemented eco-friendly processes and materials across all service lines.',
              },
            ].map((achievement, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white font-bold text-xl">
                    {achievement.year}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-700 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Join the hundreds of satisfied clients who have trusted us with their interior projects.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;