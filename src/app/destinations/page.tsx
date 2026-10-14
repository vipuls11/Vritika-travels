import Link from 'next/link';
import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { ArrowForward, LocationOn } from '@mui/icons-material';
import PageHero from '@/components/shared/PageHero';
import { destinations } from '@/data/travelData';

const getSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Find your next unforgettable stop"
        description="Discover breathtaking coastlines, vibrant city escapes, mountain hideaways, and culturally rich destinations across the globe."
        image="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80"
      />

      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' }, gap: 3 }}>
            {destinations.map((item) => {
              const slug = getSlug(item.name);

              return (
                <Card key={item.name} sx={{ height: '100%' }}>
                  <CardMedia component="img" image={item.image} alt={item.name} sx={{ height: 280, objectFit: 'cover' }} />
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
                      <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: '0.12em' }}>{item.tag}</Typography>
                      <LocationOn color="secondary" />
                    </Box>
                    <Typography variant="h5" sx={{ mt: 1.5, fontWeight: 800 }}>{item.name}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.8 }}>{item.country}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2, lineHeight: 1.7 }}>{item.description}</Typography>
                    <Link href={`/destinations/${slug}`} style={{ textDecoration: 'none' }}>
                      <Button variant="text" color="primary" endIcon={<ArrowForward />} sx={{ mt: 2, px: 0 }}>
                        Explore destination
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </Box>
        </Container>
      </Box>
    </>
  );
}
