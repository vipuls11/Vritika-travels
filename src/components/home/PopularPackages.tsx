'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { ArrowForward, Star } from '@mui/icons-material';
import { travelPackages } from '@/data/travelData';
import SectionHeader from '@/components/home/SectionHeader';

export default function PopularPackages() {
  const router = useRouter();

  const handleReserve = (pkg: { name: string; price: string }) => {
    const query = new URLSearchParams({
      package: pkg.name,
      price: pkg.price,
    }).toString();

    router.push(`/contact?${query}`);
  };

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(180deg, rgba(13,110,253,0.03), rgba(255,255,255,0))' }}>
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 3 } }}>
        <SectionHeader
          eyebrow="Popular packages"
          title="Travel experiences designed around you"
          description="Browse our most loved itineraries for romantic escapes, cultural journeys, and adventure-filled breaks."
        />

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: 3 }}>
          {travelPackages.map((pkg, index) => (
            <motion.div key={pkg.name} initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
              <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: '100%' }}>
                <CardMedia component="img" image={pkg.image} alt={pkg.name} sx={{ width: { xs: '100%', md: 260 }, height: 240, objectFit: 'cover' }} />
                <CardContent sx={{ flex: 1, p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.12em', fontWeight: 800 }}>{pkg.tag}</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Star sx={{ color: '#f7b801', fontSize: 18 }} />
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>{pkg.rating}</Typography>
                      </Box>
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 800 }}>{pkg.name}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.8 }}>{pkg.duration}</Typography>
                  </Box>

                  <Typography variant="body2" sx={{ my: 2, color: 'text.secondary', lineHeight: 1.7 }}>{pkg.description}</Typography>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 800 }}>{pkg.price}</Typography>
                    <Button variant="contained" color="primary" endIcon={<ArrowForward />} onClick={() => handleReserve(pkg)}>
                      Book now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
