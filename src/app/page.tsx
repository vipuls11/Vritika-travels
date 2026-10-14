import { Box } from '@mui/material';
import HeroSection from '@/components/home/HeroSection';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import PopularPackages from '@/components/home/PopularPackages';
import ExperiencesSection from '@/components/home/ExperiencesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import NewsletterSection from '@/components/home/NewsletterSection';

export default function HomePage() {
  return (
    <Box sx={{ backgroundColor: 'background.default' }}>
      <HeroSection />
      <FeaturedDestinations />
      <PopularPackages />
      <ExperiencesSection />
      <TestimonialsSection />
      <NewsletterSection />
    </Box>
  );
}
