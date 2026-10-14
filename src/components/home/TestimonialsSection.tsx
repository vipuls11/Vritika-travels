'use client';

import { Box, Card, CardContent, Typography } from '@mui/material';
import { Star } from '@mui/icons-material';
import { testimonials } from '@/data/travelData';
import SectionHeader from '@/components/home/SectionHeader';

export default function TestimonialsSection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, background: 'rgba(13,110,253,0.03)' }}>
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 3 } }}>
        <SectionHeader
          eyebrow="Traveler stories"
          title="Loved by explorers worldwide"
          description="We design with intention, but it’s the moments our travelers remember most that tell the real story."
        />

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' }, gap: 3 }}>
          {testimonials.map((item) => (
            <Card key={item.name} sx={{ height: '100%' }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', gap: 0.5, mb: 2 }}>
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} sx={{ color: '#f7b801', fontSize: 18 }} />
                  ))}
                </Box>
                <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.8, mb: 3 }}>
                  “{item.review}”
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 800 }}>{item.name}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{item.country}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
