import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { ArrowBack, CheckCircle, Map, Star } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Chip, Container, Stack, Typography } from '@mui/material';
import { destinationDetails } from '@/data/travelData';

export function generateStaticParams() {
  return Object.keys(destinationDetails).map((slug) => ({ slug }));
}

export default function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<Box sx={{ py: 10, textAlign: 'center' }}>Loading destination...</Box>}>
      <DestinationDetailContent params={params} />
    </Suspense>
  );
}

async function DestinationDetailContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = destinationDetails[slug];

  if (!item) {
    notFound();
  }

  return (
    <>
      <Box sx={{ background: `linear-gradient(135deg, rgba(9,25,46,0.75), rgba(13,110,253,0.55)), url(${item.image}) center/cover`, py: { xs: 10, md: 14 } }}>
        <Container maxWidth="xl">
          <Link href="/destinations" style={{ textDecoration: 'none' }}>
            <Button startIcon={<ArrowBack />} sx={{ color: 'white', mb: 3, px: 0 }}>
              Back to destinations
            </Button>
          </Link>
          <Stack spacing={2} sx={{ maxWidth: 760 }}>
            <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.8)', letterSpacing: '0.18em', fontWeight: 800 }}>{item.tag}</Typography>
            <Typography variant="h2" sx={{ color: 'white', fontWeight: 800, letterSpacing: '-0.06em' }}>{item.name}</Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.8 }}>{item.subtitle}</Typography>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 10 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.3fr 0.7fr' }, gap: 4 }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Why travelers love {item.name}</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9 }}>{item.summary}</Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 3 }}>
              {item.bestFor.map((label) => (
                <Chip key={label} label={label} color="primary" variant="outlined" sx={{ fontWeight: 700 }} />
              ))}
            </Box>

            <Box sx={{ mt: 5 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>Highlights</Typography>
              <Stack spacing={1.8}>
                {item.highlights.map((highlight) => (
                  <Box key={highlight} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <CheckCircle color="primary" />
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>{highlight}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>

          <Card>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Map color="primary" />
                <Typography variant="h6" sx={{ fontWeight: 800 }}>Trip snapshot</Typography>
              </Box>
              <Stack spacing={2.2}>
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Location</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700 }}>{item.country}</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Style</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700 }}>{item.tag}</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Best for</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700 }}>{item.bestFor.join(', ')}</Typography>
                </Box>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" fullWidth startIcon={<Star />}>
                    Plan this getaway
                  </Button>
                </Link>
              </Stack>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>Sample itinerary</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: 3 }}>
            {item.itinerary.map((entry) => (
              <Card key={entry.day}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.12em', fontWeight: 800 }}>{entry.day}</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 800, mt: 1 }}>{entry.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1.4, lineHeight: 1.8 }}>{entry.description}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
}
