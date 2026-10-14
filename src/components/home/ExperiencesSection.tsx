import { Box, Card, CardContent, Typography } from '@mui/material';
import { TravelExplore, HotelRounded, SupportAgentRounded, RouteRounded } from '@mui/icons-material';
import { experiences } from '@/data/travelData';
import SectionHeader from '@/components/home/SectionHeader';

const iconsMap = {
  Route: RouteRounded,
  Hotel: HotelRounded,
  Explore: TravelExplore,
  SupportAgent: SupportAgentRounded,
};

export default function ExperiencesSection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Box sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 2, md: 3 } }}>
        <SectionHeader
          eyebrow="Why choose us"
          title="Travel with confidence, creativity, and care"
          description="Every journey is shaped around your rhythm, your interests, and the moments worth remembering."
        />

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(4, minmax(0, 1fr))' }, gap: 3 }}>
          {experiences.map((item) => {
            const Icon = iconsMap[item.icon as keyof typeof iconsMap] || TravelExplore;

            return (
              <Card key={item.title} sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'inline-flex', width: 54, height: 54, borderRadius: 2, background: 'linear-gradient(135deg, #dfeeff, #fff0ea)', alignItems: 'center', justifyContent: 'center', color: 'primary.main', mb: 2.5 }}>
                    <Icon fontSize="large" />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{item.description}</Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
