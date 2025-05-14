import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage: string;
  overlay?: boolean;
  size?: 'sm' | 'md' | 'lg';
  align?: 'left' | 'center' | 'right';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
  overlay = true,
  size = 'lg',
  align = 'center',
}) => {
  const heightClass = 
    size === 'sm' ? 'min-h-[40vh]' : 
    size === 'md' ? 'min-h-[60vh]' : 
    'min-h-[85vh]';

  const alignClass = 
    align === 'left' ? 'text-left items-start' : 
    align === 'right' ? 'text-right items-end' : 
    'text-center items-center';

  return (
    <div 
      className={`relative flex items-center justify-center w-full ${heightClass} bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {overlay && <div className="absolute inset-0 bg-black bg-opacity-50"></div>}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center py-12 sm:py-16">
        <div className={`flex flex-col ${alignClass}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 animate-fade-in-up">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl animate-fade-in-up animation-delay-300">
            {subtitle}
          </p>
          {buttonText && buttonLink && (
            <Link
              to={buttonLink}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 animate-fade-in-up animation-delay-600 w-fit"
            >
              {buttonText}
              <ArrowRight size={18} className="ml-2" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;