import { createTheme } from '@mui/material/styles';

export const travelTheme = createTheme({
  palette: {
    primary: {
      main: '#0d6efd',
      light: '#dfeeff',
      dark: '#083d7a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff7f50',
      light: '#fff0ea',
      dark: '#d96532',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f8fb',
      paper: '#ffffff',
    },
    text: {
      primary: '#10233d',
      secondary: '#55657d',
    },
    success: {
      main: '#1aa179',
    },
    warning: {
      main: '#f59e0b',
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans), Arial, sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.04em' },
    h2: { fontWeight: 700, letterSpacing: '-0.03em' },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  shape: {
    borderRadius: 18,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          boxShadow: 'none',
          padding: '0.8rem 1.3rem',
          fontWeight: 700,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 20px 50px rgba(20, 45, 78, 0.08)',
          border: '1px solid rgba(16, 35, 61, 0.05)',
        },
      },
    },
  },
});
