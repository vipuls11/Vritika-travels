'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { ArrowForward, LocationOn } from '@mui/icons-material';
import { destinations } from '@/data/travelData';
import SectionHeader from '@/components/home/SectionHeader';

export default function FeaturedDestinations() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 3 } }}>
        <SectionHeader
          eyebrow="Curated destinations"
          title="Choose a dream destination"
          description="From tropical beaches to alpine escapes, our destination experts can shape a journey that feels bespoke and beautifully paced."
        />

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' }, gap: 3 }}>
          {destinations.map((destination, index) => (
            <motion.div key={destination.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: index * 0.08 }}>
              <Card sx={{ height: '100%' }}>
                <CardActionArea component={Link} href="/destinations">
                  <CardMedia component="img" image={destination.image} alt={destination.name} sx={{ height: 280, objectFit: 'cover' }} />
                  <CardContent sx={{ p: 2.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
                      <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.12em', fontWeight: 800 }}>{destination.tag}</Typography>
                      <LocationOn color="secondary" sx={{ fontSize: 18 }} />
                    </Box>
                    <Typography variant="h5" sx={{ mt: 1.3, fontWeight: 800 }}>{destination.name}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.7 }}>{destination.country}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1.5, lineHeight: 1.7 }}>{destination.description}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          ))}
        </Box>

        <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
          <Button component={Link} href="/destinations" variant="contained" color="primary" endIcon={<ArrowForward />}>
            View all destinations
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
