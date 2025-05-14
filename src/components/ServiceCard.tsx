import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PaintBucket, CloudRain, Layers, Hammer, ArrowUp } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, icon, image }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'paint-bucket':
        return <PaintBucket size={24} />;
      case 'cloud-rain':
        return <CloudRain size={24} />;
      case 'layers':
        return <Layers size={24} />;
      case 'hammer':
        return <Hammer size={24} />;
      case 'arrow-up':
        return <ArrowUp size={24} />;
      default:
        return <PaintBucket size={24} />;
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 group">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
            {getIcon(icon)}
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 mb-5">{description}</p>
        <Link
          to={`/services/${id}`}
          className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-200"
        >
          Learn more
          <ArrowRight size={18} className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;