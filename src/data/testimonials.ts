export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  image?: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Homeowner",
    company: "Residential Client",
    testimonial: "The team completely transformed our living room with their expert wall painting. They were professional, clean, and the results exceeded our expectations. We've already recommended them to all our friends!",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    service: "Wall Painting"
  },
  {
    id: 2,
    name: "Michael Chambers",
    position: "Property Manager",
    company: "Oceanview Apartments",
    testimonial: "We had recurring issues with water seepage until we hired this company for rainproofing. Their solution was comprehensive and effective. Two years later, and we've had zero leaks despite heavy rains.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    service: "Rain Proofing"
  },
  {
    id: 3,
    name: "Jennifer Williams",
    position: "Interior Designer",
    company: "Williams Design Studio",
    testimonial: "As an interior designer, I have high standards for craftmanship. This team consistently delivers exceptional texture finishes that bring my design visions to life. They're my go-to for all my client projects.",
    image: "https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    service: "Texture Finishes"
  },
  {
    id: 4,
    name: "Robert Davis",
    position: "Director",
    company: "Heritage Museum",
    testimonial: "The restoration work done on our historic building was meticulous. They repaired extensive wall damage while preserving the original character and detail. True professionals who understand their craft.",
    image: "https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    service: "Wall Repair"
  },
  {
    id: 5,
    name: "Emily Chen",
    position: "Homeowner",
    company: "Residential Client",
    testimonial: "The coffered ceiling they installed is the highlight of our home. Guests are always amazed by the craftsmanship. The team was professional from design to installation and completed the project on schedule.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    service: "Ceiling Work"
  }
];

export default testimonials;