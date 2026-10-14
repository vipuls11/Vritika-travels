'use client';

import { useRouter } from 'next/navigation';
import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { ArrowForward, Star } from '@mui/icons-material';
import PageHero from '@/components/shared/PageHero';
import { travelPackages } from '@/data/travelData';

export default function PackagesPage() {
  const router = useRouter();

  const handleSelectPackage = (name: string, price: string) => {
    const query = new URLSearchParams({ package: name, price }).toString();
    router.push(`/contact?${query}`);
  };

  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Flexible holidays for every style of traveler"
        description="Explore carefully crafted tours that blend luxury, adventure, guided discovery, and enough breathing room to enjoy every moment."
        image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=80"
      />

      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: 3 }}>
            {travelPackages.map((item) => (
              <Card key={item.name} sx={{ height: '100%' }}>
                <CardMedia component="img" image={item.image} alt={item.name} sx={{ height: 260, objectFit: 'cover' }} />
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.12em', fontWeight: 800 }}>{item.tag}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Star sx={{ color: '#f7b801', fontSize: 18 }} />
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>{item.rating}</Typography>
                    </Box>
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>{item.name}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.8 }}>{item.duration}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', my: 2, lineHeight: 1.8 }}>{item.description}</Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 800 }}>{item.price}</Typography>
                    <Button variant="contained" color="primary" endIcon={<ArrowForward />} onClick={() => handleSelectPackage(item.name, item.price)}>
                      Reserve now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
