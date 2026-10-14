import Link from 'next/link';
import { Box, Button, Card, CardContent, Container, Typography } from '@mui/material';
import { Explore, Hotel, SupportAgent, Route } from '@mui/icons-material';
import PageHero from '@/components/shared/PageHero';
import { experiences } from '@/data/travelData';

const iconsMap = {
  Route,
  Hotel,
  Explore,
  SupportAgent,
};

const slugs = ['adventure', 'luxury', 'honeymoon', 'family-trips'];

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="Travel experiences that feel personal"
        description="From slow luxury escapes to exhilarating adventures, our experiences are curated to match the energy you want from your trip."
        image="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1600&q=80"
      />

      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(4, minmax(0, 1fr))' }, gap: 3 }}>
            {experiences.map((item, index) => {
              const Icon = iconsMap[item.icon as keyof typeof iconsMap] || Explore;
              const slug = slugs[index] ?? 'adventure';

              return (
                <Card key={item.title} sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Box sx={{ display: 'inline-flex', width: 52, height: 52, borderRadius: 2, background: 'linear-gradient(135deg, #dfeeff, #fff0ea)', alignItems: 'center', justifyContent: 'center', color: 'primary.main' }}>
                        <Icon />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 800 }}>{item.title}</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{item.description}</Typography>
                    <Link href={`/experiences/${slug}`} style={{ textDecoration: 'none' }}>
                      <Button variant="text" color="primary" sx={{ mt: 2, px: 0 }}>
                        Learn more
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
