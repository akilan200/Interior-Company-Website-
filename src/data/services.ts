export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 'wall-painting',
    title: 'Wall Painting',
    shortDescription: 'Professional interior and exterior wall painting services',
    description: 'Transform your space with our professional wall painting services. We use high-quality paints and techniques to ensure a flawless finish that lasts for years. Our team of experienced painters can handle any project, from single rooms to entire buildings.',
    icon: 'paint-bucket',
    image: 'https://images.pexels.com/photos/6444268/pexels-photo-6444268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      'Interior and exterior painting',
      'Color consultation',
      'Surface preparation',
      'Premium paint options',
      'Texture and special finishes',
      'Eco-friendly paint options',
    ],
  },
  {
    id: 'rain-proofing',
    title: 'Rain Proofing',
    shortDescription: 'Effective water-resistant solutions for your property',
    description: 'Protect your property from water damage with our comprehensive rain proofing solutions. We use advanced materials and techniques to ensure your walls, roof, and foundation remain dry and secure even during heavy rainfall.',
    icon: 'cloud-rain',
    image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      'Exterior waterproofing',
      'Roof sealing',
      'Basement waterproofing',
      'Foundation treatments',
      'Drainage solutions',
      'Warranty on all services',
    ],
  },
  {
    id: 'texture-finishes',
    title: 'Texture Finishes',
    shortDescription: 'Custom texture finishes to enhance your walls',
    description: 'Add dimension and character to your space with our custom texture finishes. From subtle textures to bold statement walls, our skilled craftsmen can create unique surfaces that elevate your interior design.',
    icon: 'layers',
    image: 'https://images.pexels.com/photos/5473177/pexels-photo-5473177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      'Custom texture designs',
      'Venetian plaster',
      'Stucco finishes',
      'Concrete effects',
      'Metallic finishes',
      'Sample testing',
    ],
  },
  {
    id: 'wall-repair',
    title: 'Wall Repair',
    shortDescription: 'Professional wall repair and restoration services',
    description: 'From minor cracks to major damage, our wall repair services can restore your walls to perfect condition. We address the underlying issues and ensure a seamless finish that blends with your existing walls.',
    icon: 'hammer',
    image: 'https://images.pexels.com/photos/8961491/pexels-photo-8961491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      'Crack repair',
      'Hole patching',
      'Water damage restoration',
      'Drywall replacement',
      'Surface preparation',
      'Paint matching',
    ],
  },
  {
    id: 'ceiling-work',
    title: 'Ceiling Work',
    shortDescription: 'Custom ceiling designs and installations',
    description: 'Elevate your space with our custom ceiling work. From repairs and painting to decorative installations, our team can transform your ceiling into a stunning feature of your home or business.',
    icon: 'arrow-up',
    image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      'Ceiling painting',
      'Texture applications',
      'Drop ceiling installation',
      'Coffered ceiling design',
      'Crown molding',
      'Popcorn ceiling removal',
    ],
  },
];

export default services;