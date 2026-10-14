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
  { name: 'Bali', country: 'Indonesia', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80', tag: 'Beach escape', description: 'Sunset villas, surfing, wellness retreats, and tropical dining.' },
  { name: 'Santorini', country: 'Greece', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80', tag: 'Clifftop romance', description: 'Whitewashed villages, volcanic views, and unforgettable island sunsets.' },
  { name: 'Kyoto', country: 'Japan', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80', tag: 'Culture trails', description: 'Temples, cherry blossoms, tea houses, and serene walking routes.' },
  { name: 'Swiss Alps', country: 'Switzerland', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80', tag: 'Mountain luxury', description: 'Peak panoramas, glacier trains, and luxury chalets in the snow.' },
  { name: 'Marrakech', country: 'Morocco', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80', tag: 'Desert nights', description: 'Souks, riads, spice markets, and unforgettable desert adventures.' },
  { name: 'Patagonia', country: 'Argentina', image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80', tag: 'Wild landscapes', description: 'Ice fields, alpine paths, and dramatic glacial scenery.' },
];

export const destinationDetails: Record<string, DestinationDetail> = {
  bali: {
    name: 'Bali',
    country: 'Indonesia',
    tag: 'Beach escape',
    subtitle: 'Wellness, surf, culture, and warm tropical nights.',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=80',
    summary: 'Bali is a gentle mix of ocean energy, temple rituals, and luxurious downtime. From Uluwatu sunsets to rice terrace mornings, every day can be as active or restful as you like.',
    bestFor: ['Couples', 'Yoga lovers', 'Beach escapes'],
    highlights: ['Private villa stays with sunrise breakfasts', 'Surf lessons and sunset beach dinners', 'Temple visits and handmade craft experiences'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Uluwatu', description: 'Settle into a cliffside villa and enjoy a candlelit seafood dinner overlooking the ocean.' },
      { day: 'Day 2', title: 'Surf & wellness morning', description: 'Take a guided surf lesson before a restorative spa session and a relaxed beach afternoon.' },
      { day: 'Day 3', title: 'Temple circuit', description: 'Visit iconic temples and discover a local artisan workshop in central Bali.' },
      { day: 'Day 4', title: 'Rice terraces & lunch', description: 'Travel through scenic valley roads, enjoy a farm-to-table lunch, and continue to a sunset viewpoint.' },
      { day: 'Day 5', title: 'Free day / optional island hop', description: 'Choose between a private boat trip, a day of shopping, or a slow beach getaway.' },
    ],
  },
  santorini: {
    name: 'Santorini',
    country: 'Greece',
    tag: 'Clifftop romance',
    subtitle: 'Sun-washed villages, secret coves, and unforgettable sunsets.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=80',
    summary: 'Santorini is made for golden-hour views and slow-living luxury. Think white architecture, blue domes, volcanic landscapes, and a coastline built for romantic dinners.',
    bestFor: ['Honeymoons', 'Luxury travelers', 'Island hopping'],
    highlights: ['Caldera-view suites with plunge pools', 'Private yacht excursion to volcanic islands', 'Wine tasting and sunset cliffside dining'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Oia', description: 'Check in, explore the lanes of Oia, and watch the sunset from a hidden viewpoint.' },
      { day: 'Day 2', title: 'Catamaran cruise', description: 'Swim in volcanic coves, snorkel in crystal water, and enjoy lunch onboard.' },
      { day: 'Day 3', title: 'Winery & village day', description: 'Savor local vintages and wander through the cobbled streets of Fira.' },
      { day: 'Day 4', title: 'Boat trip to Red Beach', description: 'Enjoy scenic swimming stops, a romantic picnic, and a slow evening back at the hotel.' },
      { day: 'Day 5', title: 'Leisure & farewell dinner', description: 'Spend the morning at a beach club before a final sunset dinner.' },
    ],
  },
  kyoto: {
    name: 'Kyoto',
    country: 'Japan',
    tag: 'Culture trails',
    subtitle: 'Timeless temples, hidden lanes, and refined hospitality.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80',
    summary: 'Kyoto offers a deeper cultural rhythm—lantern-lit streets, tea houses, garden courtyards, and a sense of quiet luxury that transforms ordinary travel into a meaningful escape.',
    bestFor: ['Culture seekers', 'Food lovers', 'Slow travelers'],
    highlights: ['Private temple tours and geisha district walks', 'Tea ceremony and kaiseki dining experiences', 'Guided cycling routes through old neighborhoods'],
    itinerary: [
      { day: 'Day 1', title: 'Historic center arrival', description: 'Start with a gentle walk through Gion and a dinner tasting the local specialties.' },
      { day: 'Day 2', title: 'Shrines & gardens', description: 'Visit iconic temples and quiet gardens that feel tucked away from the city bustle.' },
      { day: 'Day 3', title: 'Tea ceremony', description: 'Enjoy a private tea ceremony and later sample wagashi with a local host.' },
      { day: 'Day 4', title: 'Arashiyama day trip', description: 'Spend the day among bamboo groves, river walks, and scenic mountain views.' },
      { day: 'Day 5', title: 'Market and farewell evening', description: 'Explore local markets and finish with a boutique ryokan stay.' },
    ],
  },
  'swiss-alps': {
    name: 'Swiss Alps',
    country: 'Switzerland',
    tag: 'Mountain luxury',
    subtitle: 'Snowy peaks, pocket villages, and panoramic train rides.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80',
    summary: 'The Swiss Alps are ideal for travelers who want mountain drama without sacrificing comfort. Picture panoramic rail journeys, elegant chalets, and scenery that feels effortlessly cinematic.',
    bestFor: ['Adventure travelers', 'Luxury seekers', 'Nature lovers'],
    highlights: ['Private transfers and scenic rail passes', 'Lake-view chalet stays and spa experiences', 'Hiking, skiing, and glacier excursions'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Zurich', description: 'Transfer to the mountains and settle into a lakeside chalet.' },
      { day: 'Day 2', title: 'Glacier express route', description: 'Take a scenic railway route through valleys and panoramic ridge lines.' },
      { day: 'Day 3', title: 'Alpine adventure', description: 'Choose a guided hike, cable car ascent, or snow activity depending on the season.' },
      { day: 'Day 4', title: 'Wellness day', description: 'Rest in a wellness retreat and enjoy a mountain view dinner.' },
      { day: 'Day 5', title: 'Village exploration', description: 'Visit a local village for artisan shopping and quiet lakeside relaxation.' },
    ],
  },
};

export const travelPackages: TravelPackage[] = [
  { name: 'Bali Bliss Escape', duration: '5 Days / 4 Nights', price: '$899', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', rating: 4.9, tag: 'Couples', description: 'Beachfront stay, yoga, temple tour, and island hopping.' },
  { name: 'Mediterranean Dreams', duration: '7 Days / 6 Nights', price: '$1,249', image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80', rating: 4.8, tag: 'Family', description: 'Sailing days, coastal hotels, and vibrant cultural experiences.' },
  { name: 'Alpine Adventure', duration: '6 Days / 5 Nights', price: '$1,499', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80', rating: 5.0, tag: 'Adventure', description: 'Scenic rail journeys, skiing, and mountain lodges.' },
  { name: 'Japan Heritage Route', duration: '8 Days / 7 Nights', price: '$1,799', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80', rating: 4.9, tag: 'Culture', description: 'Historic shrines, city experiences, and premium guided tours.' },
];

export const experiences: Experience[] = [
  { title: 'Custom itineraries', description: 'Handpicked routes and private experiences designed around your travel style.', icon: 'Route' },
  { title: 'Luxury stays', description: 'Boutique hotels, wellness resorts, and unforgettable scenic accommodations.', icon: 'Hotel' },
  { title: 'Local guides', description: 'Expert-led tours with insider stories, hidden gems, and authentic culture.', icon: 'Explore' },
  { title: '24/7 travel support', description: 'Friendly assistance from planning to touchdown for complete peace of mind.', icon: 'SupportAgent' },
];

export const experienceDetails: Record<string, ExperienceDetail> = {
  adventure: {
    title: 'Adventure Escapes',
    eyebrow: 'High-energy experiences',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80',
    summary: 'Adventure travel with Vritika balances thrill and comfort. Expect active days, immersive terrain, and expert-level guidance that keeps the journey both exciting and seamless.',
    keyPoints: ['Multi-day hikes and mountain routes', 'Private guides and safe, premium logistics', 'Flexible add-ons for climbing, rafting, and skiing'],
    itinerary: [
      { title: 'Trail briefing & gear setup', description: 'Start with a local guide who customizes the route to your comfort and skill level.' },
      { title: 'Peak-to-lake journey', description: 'Experience panoramic scenery as you move through valleys, ridgelines, and glacier viewpoints.' },
      { title: 'Campfire or lodge evening', description: 'Wrap up with a cozy alpine dinner and time to recharge for the next day.' },
    ],
  },
  luxury: {
    title: 'Luxury Journeys',
    eyebrow: 'Refined travel',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80',
    summary: 'Luxury with us is never generic. We create polished itineraries with five-star stays, private transfers, elegant dining, and just enough room for true relaxation.',
    keyPoints: ['Boutique villas and oceanfront suites', 'Concierge-level trip planning and support', 'Private dining, wellness rituals, and tailored experiences'],
    itinerary: [
      { title: 'Arrival & check-in', description: 'Enjoy a seamless welcome with a private driver, VIP lounge handling, and a beautifully prepared suite.' },
      { title: 'Curated day plans', description: 'You can choose between spa indulgence, yacht days, or city-private experiences.' },
      { title: 'Seamless farewell', description: 'End the trip with a sunset dinner and private transfer to the airport.' },
    ],
  },
  honeymoon: {
    title: 'Honeymoon Stories',
    eyebrow: 'Romantic escapes',
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1600&q=80',
    summary: 'We shape honeymoon itineraries around atmosphere, privacy, and meaningful moments. Think iconic sunsets, slow breakfasts, and destination-level romance at every turn.',
    keyPoints: ['Sunset dinners and private beach moments', 'Room upgrades and celebratory touches', 'Flexible pacing with quiet time built in'],
    itinerary: [
      { title: 'Arrival romance', description: 'A private welcome, suite setup, and a candlelit evening create the perfect first impression.' },
      { title: 'Beach or view experience', description: 'Add unique moments like a sunset cruise or a cinematic cliffside dinner.' },
      { title: 'Memorable final day', description: 'Build in a spa morning, scenic photoshoot, and one last relaxed farewell meal.' },
    ],
  },
  'family-trips': {
    title: 'Family Trips',
    eyebrow: 'Easy, joyful planning',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=80',
    summary: 'Family travel feels simpler when every detail is designed for both comfort and discovery. We balance thoughtful pacing, child-friendly activities, and room to unwind.',
    keyPoints: ['Family-friendly accommodation options', 'Flexible sightseeing with rest times built in', 'Hands-on experiences for both kids and adults'],
    itinerary: [
      { title: 'Easy arrival day', description: 'A relaxed start with airport transfers and a restful check-in to settle everyone in.' },
      { title: 'Interactive day plan', description: 'Add a beach club, a city walk, or educational museum hours matched to age range.' },
      { title: 'Wind-down evening', description: 'Enjoy a family dinner and keep the following day light to avoid travel fatigue.' },
    ],
  },
};

export const testimonials = [
  { name: 'Sofia Nguyen', review: 'The itinerary felt perfectly personal. Every transfer, stay, and recommendation was seamless.', country: 'Singapore' },
  { name: 'Daniel Brooks', review: 'Our family trip to Greece was beautifully handled. The guides were warm and genuinely knowledgeable.', country: 'Canada' },
  { name: 'Aisha Rahman', review: 'The luxury details and genuine local experiences made this trip unforgettable from start to finish.', country: 'UK' },
];

export const blogHighlights = [
  {
    title: 'Top 10 romantic escapes for couples',
    excerpt: 'Curated destinations, dreamy stays, and experiences that turn every trip into a memory.',
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'How to plan the perfect long weekend',
    excerpt: 'Smart packing, route planning, and on-the-ground tips to make the most of every day.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Hidden gems beyond the tourist trail',
    excerpt: 'Explore lesser-known spots with deeper culture, better stories, and more authenticity.',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
  },
];

export const faqs = [
  { question: 'Can I customize my itinerary?', answer: 'Yes. Each trip can be tailored to your budget, pace, interests, and travel dates.' },
  { question: 'Do you offer family packages?', answer: 'Absolutely. We create family-friendly options with kid-safe activities and restful stays.' },
  { question: 'Is travel support included?', answer: 'Yes. We provide local on-trip support, booking assistance, and 24/7 guidance when needed.' },
  { question: 'How far ahead should I book?', answer: 'For peak season and popular destinations, booking 3–6 months in advance is ideal.' },
];
