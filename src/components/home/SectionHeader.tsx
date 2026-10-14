import { Box, Typography } from '@mui/material';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <Box sx={{ maxWidth: 620, mb: 6 }}>
      <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.16em', fontWeight: 800, display: 'block', mb: 1 }}>{eyebrow}</Typography>
      <Typography variant="h3" sx={{ fontWeight: 800, letterSpacing: '-0.04em', mb: 1.5 }}>{title}</Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{description}</Typography>
    </Box>
  );
}
