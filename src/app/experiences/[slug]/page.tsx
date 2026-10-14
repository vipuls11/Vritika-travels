import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { ArrowBack, AutoAwesome, CheckCircle } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Chip, Container, Stack, Typography } from '@mui/material';
import { experienceDetails } from '@/data/travelData';

export function generateStaticParams() {
  return Object.keys(experienceDetails).map((slug) => ({ slug }));
}

export default function ExperienceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<Box sx={{ py: 10, textAlign: 'center' }}>Loading experience...</Box>}>
      <ExperienceDetailContent params={params} />
    </Suspense>
  );
}

async function ExperienceDetailContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = experienceDetails[slug];

  if (!item) {
    notFound();
  }

  return (
    <>
      <Box sx={{ background: `linear-gradient(135deg, rgba(9,25,46,0.75), rgba(13,110,253,0.55)), url(${item.image}) center/cover`, py: { xs: 10, md: 14 } }}>
        <Container maxWidth="xl">
          <Link href="/experiences" style={{ textDecoration: 'none' }}>
            <Button startIcon={<ArrowBack />} sx={{ color: 'white', mb: 3, px: 0 }}>
              Back to experiences
            </Button>
          </Link>
          <Stack spacing={2} sx={{ maxWidth: 760 }}>
            <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.8)', letterSpacing: '0.18em', fontWeight: 800 }}>{item.eyebrow}</Typography>
            <Typography variant="h2" sx={{ color: 'white', fontWeight: 800, letterSpacing: '-0.06em' }}>{item.title}</Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.8 }}>{item.summary}</Typography>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 10 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' }, gap: 4 }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>What makes it special</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              {item.keyPoints.map((point) => (
                <Chip key={point} label={point} color="primary" variant="outlined" sx={{ fontWeight: 700 }} />
              ))}
            </Box>

            <Stack spacing={2} sx={{ mt: 5 }}>
              {item.itinerary.map((step) => (
                <Card key={step.title}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                      <CheckCircle color="primary" />
                      <Typography variant="h6" sx={{ fontWeight: 800 }}>{step.title}</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{step.description}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Box>

          <Card>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <AutoAwesome color="primary" />
                <Typography variant="h6" sx={{ fontWeight: 800 }}>Designed for you</Typography>
              </Box>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9 }}>Every itinerary is custom-built around your pace, your interests, and the type of memory you want to carry home.</Typography>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Button variant="contained" fullWidth sx={{ mt: 3 }}>
                  Request this experience
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}
