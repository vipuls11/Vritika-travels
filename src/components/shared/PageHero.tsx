import { Box, Container, Typography } from '@mui/material';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export default function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <Box sx={{ position: 'relative', background: `linear-gradient(135deg, rgba(9, 25, 46, 0.72), rgba(13,110,253,0.52)), url(${image}) center/cover`, py: { xs: 10, md: 14 } }}>
      <Container maxWidth="xl">
        <Box sx={{ maxWidth: 700 }}>
          <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.75)', letterSpacing: '0.18em', display: 'block', fontWeight: 800 }}>{eyebrow}</Typography>
          <Typography variant="h2" sx={{ color: 'white', mt: 2, fontWeight: 800, letterSpacing: '-0.05em', fontSize: { xs: '2.4rem', md: '4rem' } }}>{title}</Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.82)', mt: 2, lineHeight: 1.8 }}>{description}</Typography>
        </Box>
      </Container>
    </Box>
  );
}
