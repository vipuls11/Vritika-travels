import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import PageHero from '@/components/shared/PageHero';

const values = [
  { title: 'Tailored planning', content: 'We design every trip around the pace, mood, and priorities that make each journey feel personal.' },
  { title: 'Local knowledge', content: 'Our team partners with trusted local experts to bring deeper stories, better access, and more authentic stays.' },
  { title: 'Thoughtful detail', content: 'From flights to stays, restaurant picks to transfers, every detail is considered well before you travel.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We craft journeys worth talking about"
        description="Vritika Travel is built for curious travelers who want more than a checklist—they want meaningful experiences, effortless planning, and beautiful memories."
        image="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80"
      />

      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: 4, alignItems: 'center' }}>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 800, letterSpacing: '-0.04em', mb: 2 }}>Travel should feel seamless, inspiring, and personal.</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
                Our travel advisors combine destination expertise with a service-first mindset. We listen closely, design intentionally, and shape journeys that balance iconic highlights with the kind of moments that stay with you long after the trip ends.
              </Typography>
            </Box>
            <Box sx={{ background: 'url(https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80) center/cover', borderRadius: 4, height: 420 }} />
          </Box>

          <Box sx={{ mt: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.14em', fontWeight: 800 }}>Our values</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' }, gap: 3, mt: 1 }}>
              {values.map((value) => (
                <Card key={value.title} sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>{value.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{value.content}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
