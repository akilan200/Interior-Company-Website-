export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  location: string;
  completionDate: string;
  featured: boolean;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Modern Living Room Transformation",
    category: "wall-painting",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Complete transformation of a living room with custom paint colors and texture finishes.",
    client: "Johnson Residence",
    location: "Downtown Heights",
    completionDate: "January 2025",
    featured: true
  },
  {
    id: 2,
    title: "Luxury Bathroom Waterproofing",
    category: "rain-proofing",
    image: "https://images.pexels.com/photos/6585601/pexels-photo-6585601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Comprehensive waterproofing solution for a luxury bathroom renovation.",
    client: "Oceanview Hotel",
    location: "Coastal Boulevard",
    completionDate: "February 2025",
    featured: true
  },
  {
    id: 3,
    title: "Artisan Wall Textures",
    category: "texture-finishes",
    image: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Custom textured wall finishes for a contemporary art gallery.",
    client: "Modern Art Gallery",
    location: "Arts District",
    completionDate: "March 2025",
    featured: true
  },
  {
    id: 4,
    title: "Historic Building Restoration",
    category: "wall-repair",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Restoration of damaged walls in a historic building, preserving original features.",
    client: "Heritage Foundation",
    location: "Old Town Square",
    completionDate: "December 2024",
    featured: false
  },
  {
    id: 5,
    title: "Elegant Ceiling Design",
    category: "ceiling-work",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Custom ceiling installation with decorative molding and lighting features.",
    client: "Luxury Residence",
    location: "Hillside Estates",
    completionDate: "April 2025",
    featured: true
  },
  {
    id: 6,
    title: "Industrial Loft Painting",
    category: "wall-painting",
    image: "https://images.pexels.com/photos/3932957/pexels-photo-3932957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Converting an industrial space into a modern loft with specialized paint techniques.",
    client: "Urban Developments",
    location: "Warehouse District",
    completionDate: "May 2025",
    featured: false
  },
  {
    id: 7,
    title: "Basement Waterproofing Project",
    category: "rain-proofing",
    image: "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Complete basement waterproofing solution with drainage system installation.",
    client: "Riverside Homes",
    location: "Valley View",
    completionDate: "June 2025",
    featured: false
  },
  {
    id: 8,
    title: "Venetian Plaster Feature Wall",
    category: "texture-finishes",
    image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Luxurious Venetian plaster application creating a stunning feature wall.",
    client: "Boutique Hotel",
    location: "Fashion District",
    completionDate: "July 2025",
    featured: true
  },
  {
    id: 9,
    title: "Post-Flood Wall Restoration",
    category: "wall-repair",
    image: "https://images.pexels.com/photos/7506000/pexels-photo-7506000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Emergency restoration of flood-damaged walls with mold prevention treatment.",
    client: "Community Center",
    location: "Riverside Park",
    completionDate: "August 2024",
    featured: false
  },
  {
    id: 10,
    title: "Coffered Ceiling Installation",
    category: "ceiling-work",
    image: "https://images.pexels.com/photos/707579/pexels-photo-707579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Design and installation of an elegant coffered ceiling with integrated lighting.",
    client: "Executive Residence",
    location: "Summit Heights",
    completionDate: "September 2024",
    featured: true
  },
  {
    id: 11,
    title: "Eco-Friendly Nursery Painting",
    category: "wall-painting",
    image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Non-toxic, eco-friendly painting solution for a children's nursery.",
    client: "Family Residence",
    location: "Green Valley",
    completionDate: "October 2024",
    featured: false
  },
  {
    id: 12,
    title: "Commercial Building Exterior Sealing",
    category: "rain-proofing",
    image: "https://images.pexels.com/photos/1029606/pexels-photo-1029606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Comprehensive exterior waterproofing for a modern commercial building.",
    client: "Tech Innovations Inc.",
    location: "Business Park",
    completionDate: "November 2024",
    featured: false
  }
];

export default portfolioItems;