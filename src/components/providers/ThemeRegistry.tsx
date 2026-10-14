'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { travelTheme } from '@/theme';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={travelTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
