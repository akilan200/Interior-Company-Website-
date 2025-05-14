import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface PortfolioCardProps {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  location: string;
  completionDate: string;
  onClick?: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  category,
  image,
  description,
  client,
  location,
  completionDate,
  onClick,
}) => {
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'wall-painting':
        return 'Wall Painting';
      case 'rain-proofing':
        return 'Rain Proofing';
      case 'texture-finishes':
        return 'Texture Finishes';
      case 'wall-repair':
        return 'Wall Repair';
      case 'ceiling-work':
        return 'Ceiling Work';
      default:
        return category;
    }
  };

  return (
    <div 
      className="rounded-lg overflow-hidden shadow-md bg-white group cursor-pointer transition-all duration-300 hover:shadow-lg"
      onClick={onClick}
    >
      <div className="h-64 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full font-medium">
            {getCategoryLabel(category)}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-col space-y-2 text-sm text-gray-500">
          <div className="font-medium text-gray-700">{client}</div>
          <div className="flex items-center">
            <MapPin size={14} className="mr-1" />
            {location}
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {completionDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;