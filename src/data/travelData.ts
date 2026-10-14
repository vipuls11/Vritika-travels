export type Destination = {
  name: string;
  country: string;
  image: string;
  tag: string;
  description: string;
};

export type TravelPackage = {
  name: string;
  duration: string;
  price: string;
  image: string;
  rating: number;
  tag: string;
  description: string;
};

export type Experience = {
  title: string;
  description: string;
  icon: string;
};

export type DestinationDetail = {
  name: string;
  country: string;
  tag: string;
  subtitle: string;
  image: string;
  summary: string;
  bestFor: string[];
  highlights: string[];
  itinerary: Array<{ day: string; title: string; description: string }>;
};

export type ExperienceDetail = {
  title: string;
  eyebrow: string;
  image: string;
  summary: string;
  keyPoints: string[];
  itinerary: Array<{ title: string; description: string }>;
};

export const destinations: Destination[] = [
  { name: 'Mercedes-Benz C-Class', country: 'Luxury Sedan', image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80', tag: 'Executive drive', description: 'Premium comfort, sharp handling, and a polished cabin designed for everyday confidence.' },
  { name: 'BMW X5', country: 'Luxury SUV', image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80', tag: 'Family ready', description: 'Spacious seating, advanced safety tech, and elevated road presence for busy weekends.' },
  { name: 'Porsche 911', country: 'Performance Coupe', image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1200&q=80', tag: 'Power thrill', description: 'Track-inspired dynamics, iconic styling, and an unmistakable driving experience.' },
  { name: 'Tesla Model Y', country: 'Electric SUV', image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80', tag: 'Future drive', description: 'Long-range efficiency, instant power, and a modern cabin built for the next era.' },
  { name: 'Audi Q7', country: 'Premium SUV', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80', tag: 'Refined touring', description: 'A calm, confident SUV with premium technology and all-weather capability.' },
  { name: 'Range Rover Sport', country: 'Adventure SUV', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80', tag: 'Off-road luxury', description: 'Luxury meets capability with serious comfort for long hauls and rough terrain.' },
];

export const destinationDetails: Record<string, DestinationDetail> = {
  'mercedes-c-class': {
    name: 'Mercedes-Benz C-Class',
    country: 'Luxury Sedan',
    tag: 'Executive drive',
    subtitle: 'Elegant performance and refined comfort for city and highway driving.',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
    summary: 'The Mercedes-Benz C-Class blends precision handling, premium finishes, and effortless comfort in a car made for confident daily driving and business-ready elegance.',
    bestFor: ['Business commuters', 'Luxury buyers', 'Everyday elegance'],
    highlights: ['Ambient interior lighting and digital cockpit', 'Smooth ride comfort with responsive steering', 'Leather-trimmed cabin and advanced safety features'],
    itinerary: [
      { day: 'Day 1', title: 'Delivery & welcome', description: 'Collect your car with a full walk-through of the cabin, controls, and premium features.' },
      { day: 'Day 2', title: 'City drive', description: 'Experience the quiet cabin and control feel while navigating downtown routes and elevated roads.' },
      { day: 'Day 3', title: 'Highway comfort', description: 'Test the long-distance ride quality, adaptive cruise, and driver-assist options.' },
      { day: 'Day 4', title: 'Performance check', description: 'Explore the responsive engine mapping and steering feedback in a more spirited drive.' },
      { day: 'Day 5', title: 'Final review', description: 'Review ownership options, service plans, and financing support for a smooth handoff.' },
    ],
  },
  'bmw-x5': {
    name: 'BMW X5',
    country: 'Luxury SUV',
    tag: 'Family ready',
    subtitle: 'Crossover comfort, sporty response, and a premium cabin built for every trip.',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80',
    summary: 'The BMW X5 balances athletic performance with luxury practicality, making it ideal for families, road trips, and drivers who want both comfort and command.',
    bestFor: ['Family drivers', 'Road trippers', 'Premium SUV buyers'],
    highlights: ['Spacious seating and cargo flexibility', 'All-wheel drive confidence and adaptive suspension', 'Connected infotainment and driver assistance features'],
    itinerary: [
      { day: 'Day 1', title: 'Vehicle briefing', description: 'Learn the tech features, cabin space, and handling setup suited to your routines.' },
      { day: 'Day 2', title: 'School run & errands', description: 'See how the SUV handles daily life with storage space and smooth comfort.' },
      { day: 'Day 3', title: 'Weekend getaway', description: 'Travel with confidence on longer routes with a balanced ride and premium seating.' },
      { day: 'Day 4', title: 'Driver modes', description: 'Try sport, comfort, and efficiency modes to match the road and your mood.' },
      { day: 'Day 5', title: 'Ownership review', description: 'Go through maintenance packages, warranties, and personalized financing options.' },
    ],
  },
  'porsche-911': {
    name: 'Porsche 911',
    country: 'Performance Coupe',
    tag: 'Power thrill',
    subtitle: 'An icon of speed, design, and emotional driving pleasure.',
    image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1600&q=80',
    summary: 'The Porsche 911 is built for drivers who want precision, presence, and the thrill of a legendary sports car. Every detail is tuned for excitement without sacrificing daily usability.',
    bestFor: ['Performance drivers', 'Weekend thrill seekers', 'Style-focused buyers'],
    highlights: ['Rear-engine balance and sharp handling', 'Iconic coupe silhouette and driver-focused cockpit', 'High-performance brakes and launch-ready appeal'],
    itinerary: [
      { day: 'Day 1', title: 'Performance walk-through', description: 'Review engine choices, transmission setup, and the driver-focused interior layout.' },
      { day: 'Day 2', title: 'Open-road drive', description: 'Feel the precise steering and smooth power delivery on a scenic route.' },
      { day: 'Day 3', title: 'Track-inspired handling', description: 'Explore different speeds and the balance that makes the 911 feel alive.' },
      { day: 'Day 4', title: 'Luxury details', description: 'Experience interior leatherwork, sound system, and driver comfort features.' },
      { day: 'Day 5', title: 'Finalize purchase', description: 'Review service packages, performance upgrades, and ownership support.' },
    ],
  },
  'tesla-model-y': {
    name: 'Tesla Model Y',
    country: 'Electric SUV',
    tag: 'Future drive',
    subtitle: 'Efficient, modern, and built for forward-thinking drivers.',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=80',
    summary: 'The Tesla Model Y brings together instant acceleration, all-electric range, and a minimalist design language that feels ahead of its time.',
    bestFor: ['Eco-conscious drivers', 'Tech buyers', 'Daily commuters'],
    highlights: ['Long-range electric performance', 'Minimalist interior with panoramic glass roof', 'Fast charging support and driver-assist technology'],
    itinerary: [
      { day: 'Day 1', title: 'EV setup', description: 'Learn charging access, route planning, and daily use modes tailored for your routine.' },
      { day: 'Day 2', title: 'City commute', description: 'Feel the instant torque and quiet cabin during a day of urban driving.' },
      { day: 'Day 3', title: 'Long-range route', description: 'Test the real-world range, regenerative braking, and charging convenience.' },
      { day: 'Day 4', title: 'Family practicality', description: 'Check space for luggage, passengers, and everyday gear without compromise.' },
      { day: 'Day 5', title: 'Ownership support', description: 'Review charging plans, software features, and worry-free service coverage.' },
    ],
  },
};

export const travelPackages: TravelPackage[] = [
  { name: 'City Executive Sedan', duration: '36 Months / 8,000 mi', price: '$39,900', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80', rating: 4.9, tag: 'Sedan', description: 'Luxury everyday driving with premium finishes and dynamic performance.' },
  { name: 'Family SUV Plus', duration: '48 Months / 10,000 mi', price: '$46,500', image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80', rating: 4.8, tag: 'SUV', description: 'Roomy comfort, family flexibility, and strong all-weather confidence.' },
  { name: 'Performance Coupe', duration: '24 Months / 6,000 mi', price: '$58,200', image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1200&q=80', rating: 5.0, tag: 'Performance', description: 'A high-output coupe for drivers who want thrilling speed and iconic style.' },
  { name: 'EV Future Drive', duration: '42 Months / 9,000 mi', price: '$51,900', image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80', rating: 4.9, tag: 'Electric', description: 'A modern electric SUV with long-range efficiency and tech-forward comfort.' },
];

export const experiences: Experience[] = [
  { title: 'Certified quality', description: 'Every vehicle is inspected, serviced, and road-ready before it reaches your driveway.', icon: 'Route' },
  { title: 'Flexible finance', description: 'Tailored payment plans that fit your budget, priorities, and driving goals.', icon: 'Hotel' },
  { title: 'Dealer expertise', description: 'Helpful, honest guidance from a team that understands performance, comfort, and value.', icon: 'Explore' },
  { title: 'After-sales support', description: 'Warranty help, service updates, and a smooth ownership journey long after the sale.', icon: 'SupportAgent' },
];

export const experienceDetails: Record<string, ExperienceDetail> = {
  adventure: {
    title: 'Adventure SUVs',
    eyebrow: 'Built for every road',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
    summary: 'Our adventure-ready lineups blend rugged capability, premium finishes, and all-weather confidence so you can drive farther and feel at ease anywhere.',
    keyPoints: ['All-terrain traction and elevated ground clearance', 'Rugged design with premium interior touches', 'Perfect for mountain trips, weekend escapes, and active lifestyles'],
    itinerary: [
      { title: 'Vehicle fitment', description: 'Choose the SUV size, drivetrain, and trim that matches your travel routine and terrain.' },
      { title: 'Road test', description: 'Explore comfort, steering feel, towing capability, and cabin practicality on real routes.' },
      { title: 'Drive away day', description: 'Finalize service plans, accessories, and delivery details for a confident handoff.' },
    ],
  },
  luxury: {
    title: 'Luxury Sedans',
    eyebrow: 'Refined comfort',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80',
    summary: 'Luxury sedans from our collection are designed around quiet confidence, elevated materials, and a polished driving experience that never feels rushed.',
    keyPoints: ['Executive comfort and premium leather interiors', 'Advanced safety technology with smooth ride quality', 'Ideal for business travel and refined everyday driving'],
    itinerary: [
      { title: 'Comfort briefing', description: 'Review seating comfort, ambient lighting, and infotainment features in a tailored walkthrough.' },
      { title: 'Drive impression', description: 'Test the cabin quietness, steering response, and highway stability on a route that matches your routine.' },
      { title: 'Ownership plan', description: 'Add servicing, detailing, and protection packages that keep the experience premium.' },
    ],
  },
  honeymoon: {
    title: 'Dream Weekend Cars',
    eyebrow: 'Style meets emotion',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80',
    summary: 'For special occasions, we help drivers choose a vehicle that feels personal, memorable, and perfectly suited to their next milestone or getaway.',
    keyPoints: ['Emotion-driven coupe and convertible picks', 'Custom detailing and premium packages', 'Stylish cars for celebrations and weekend escapes'],
    itinerary: [
      { title: 'Style consultation', description: 'Find the right finish, trim, and interior features to match the vibe you want.' },
      { title: 'Experience drive', description: 'Take the car onto scenic roads to feel the power, sound, and personality of each model.' },
      { title: 'Signature delivery', description: 'Wrap up with a polished handoff and personalized finishing touches.' },
    ],
  },
  'family-trips': {
    title: 'Family SUV Picks',
    eyebrow: 'Easy, joyful driving',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1600&q=80',
    summary: 'Family vehicles from our lineup are built for space, safety, and smooth travel so every journey feels easier, calmer, and more flexible.',
    keyPoints: ['Generous seating and cargo room', 'Child-friendly convenience and active safety tech', 'Safe, comfortable drives for school, errands, and weekend trips'],
    itinerary: [
      { title: 'Family fit check', description: 'Review seating layout, child seat compatibility, and luggage use for your routine.' },
      { title: 'Comfort test', description: 'Experience the cabin silence, ride smoothness, and all-round visibility in real traffic.' },
      { title: 'Ready to drive', description: 'Finalize accessories, service plans, and insurance guidance for stress-free ownership.' },
    ],
  },
};

export const testimonials = [
  { name: 'Sofia Patel', review: 'The buying process felt easy and transparent. We found a luxury SUV that fit our family perfectly.', country: 'Austin' },
  { name: 'Daniel Brooks', review: 'The car was beautifully presented, and the financing guidance made the experience straightforward and stress-free.', country: 'Chicago' },
  { name: 'Aisha Rahman', review: 'The test drive and after-sales support made the whole experience feel premium from start to finish.', country: 'Boston' },
];

export const blogHighlights = [
  {
    title: 'Best family SUVs for school runs and long weekends',
    excerpt: 'Smart space planning, safety tech, and comfort features that make every drive easier.',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'EV charging tips for city and highway drivers',
    excerpt: 'How to plan trips, reduce range anxiety, and keep your electric car ready for the road.',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Luxury sedans worth the upgrade in 2026',
    excerpt: 'Interior comfort, performance values, and design details that elevate the everyday drive.',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80',
  },
];

export const faqs = [
  { question: 'Can I customize my financing plan?', answer: 'Yes. We tailor lease and financing options to match your budget, mileage, and ownership goals.' },
  { question: 'Do you offer family-friendly SUVs?', answer: 'Absolutely. We carry spacious models with safety tech, storage, and comfort features for growing families.' },
  { question: 'Is service support included?', answer: 'Yes. We provide ownership support, maintenance guidance, and assistance long after the sale.' },
  { question: 'How far ahead should I book a test drive?', answer: 'Booking 48 hours in advance is ideal for rare models, premium trims, and busy dealership times.' },
];
