'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Box, Button, Chip, Container, Typography } from '@mui/material';
import { ArrowForward, PlayArrow, Star } from '@mui/icons-material';

export default function HeroSection() {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, rgba(14, 40, 75, 0.88), rgba(13, 110, 253, 0.72)), url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80) center/cover' }}>
      <Container maxWidth="xl" sx={{ py: { xs: 10, md: 14 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' }, gap: 4, alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Chip label="Discover unforgettable journeys" sx={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'white', borderRadius: 999, px: 1.2, py: 0.7, fontWeight: 700, mb: 3 }} />
            <Typography variant="h1" sx={{ color: 'white', fontSize: { xs: '2.7rem', md: '5rem' }, lineHeight: 1.03, maxWidth: 620 }}>
              Escape to the world’s most inspiring places.
            </Typography>
            <Typography variant="h6" sx={{ mt: 3, color: 'rgba(255,255,255,0.86)', maxWidth: 620, lineHeight: 1.7 }}>
              Curated tours, boutique stays, and unforgettable moments for couples, families, and adventurers.
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mt: 4 }}>
              <Button component={Link} href="/packages" variant="contained" color="secondary" size="large" endIcon={<ArrowForward />}>
                Explore packages
              </Button>
              <Button component={Link} href="/about" variant="outlined" size="large" sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.35)', '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.08)' } }} startIcon={<PlayArrow />}>
                See how it works
              </Button>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mt: 5, color: 'white' }}>
              {[
                { label: '12k+', sub: 'happy travelers' },
                { label: '4.9/5', sub: 'average rating' },
                { label: '110+', sub: 'destinations' },
              ].map((stat) => (
                <Box key={stat.label}>
                  <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5 }}>{stat.label}</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.72)' }}>{stat.sub}</Typography>
                </Box>
              ))}
            </Box>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <Box sx={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 2, p: 3, boxShadow: '0 20px 45px rgba(0,0,0,0.15)' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>Featured getaway</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, background: 'rgba(255,255,255,0.1)', borderRadius: 999, px: 1.1, py: 0.6 }}>
                    <Star sx={{ color: '#ffd166', fontSize: 18 }} />
                    <Typography variant="body2" sx={{ color: 'white', fontWeight: 700 }}>4.9</Typography>
                  </Box>
                </Box>

                <Box sx={{ borderRadius: 2, overflow: 'hidden', height: 240, background: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80) center/cover' }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <Box>
                    <Typography variant="h5" sx={{ color: 'white', fontWeight: 800 }}>Santorini Escape</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)' }}>7 days · Greece</Typography>
                  </Box>
                  <Typography variant="h5" sx={{ color: 'white', fontWeight: 800 }}>$1,299</Typography>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
