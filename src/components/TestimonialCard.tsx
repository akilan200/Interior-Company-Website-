import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  testimonial: string;
  image?: string;
  service: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  position,
  company,
  testimonial,
  image,
  service,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 flex flex-col h-full">
      <div className="mb-4 text-indigo-600">
        <Quote size={32} />
      </div>
      <p className="text-gray-700 italic mb-6 flex-grow">{testimonial}</p>
      <div className="flex items-center">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{position}, {company}</p>
          <p className="text-xs text-indigo-600 mt-1">{service}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;