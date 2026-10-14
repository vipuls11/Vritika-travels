'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Alert, Box, Button, Card, CardContent, Container, TextField, Typography } from '@mui/material';
import { Email, LocationOn, Phone } from '@mui/icons-material';
import PageHero from '@/components/shared/PageHero';

const initialForm = {
  fullName: '',
  email: '',
  destination: '',
  travelMonth: '',
  message: '',
  selectedPackage: '',
  selectedPackagePrice: '',
};

function ContactPageContent() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    const selectedPackage = searchParams.get('package') || '';
    const selectedPackagePrice = searchParams.get('price') || '';

    if (!selectedPackage && !selectedPackagePrice) {
      return;
    }

    setForm((current) => ({
      ...current,
      destination: current.destination || selectedPackage,
      selectedPackage,
      selectedPackagePrice,
      message: current.message || `I am interested in the ${selectedPackage} package${selectedPackagePrice ? ` (${selectedPackagePrice})` : ''}. Please share the itinerary and availability.`,
    }));
  }, [searchParams]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to send inquiry');
      }

      setStatus({ type: 'success', message: data.message || 'Your inquiry has been submitted successfully.' });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Plan your getaway with our specialists"
        description="Tell us what kind of trip you have in mind and we’ll help shape a journey that feels perfectly right for you."
        image="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1600&q=80"
      />

      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '0.95fr 1.2fr' }, gap: 4 }}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>Ask us anything</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Phone color="primary" />
                    <Typography variant="body1">+1 (800) 555-0148</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Email color="primary" />
                    <Typography variant="body1">hello@Vritikatravel.com</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocationOn color="primary" />
                    <Typography variant="body1">25 Marina Avenue, Bali, Indonesia</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>Tell us about your trip</Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' }, gap: 2 }}>
                  <TextField label="Full name" name="fullName" value={form.fullName} onChange={handleChange} fullWidth required />
                  <TextField label="Email address" name="email" type="email" value={form.email} onChange={handleChange} fullWidth required />
                  <TextField label="Destination" name="destination" value={form.destination} onChange={handleChange} fullWidth required />
                  <TextField label="Travel month" name="travelMonth" value={form.travelMonth} onChange={handleChange} fullWidth required />
                  <Box sx={{ gridColumn: '1 / -1' }}>
                    <TextField label="Tell us about your trip" name="message" value={form.message} onChange={handleChange} multiline minRows={5} fullWidth required />
                  </Box>
                  {status && (
                    <Box sx={{ gridColumn: '1 / -1' }}>
                      <Alert severity={status.type}>{status.message}</Alert>
                    </Box>
                  )}
                  <Box sx={{ gridColumn: '1 / -1' }}>
                    <Button type="submit" variant="contained" color="primary" disabled={loading} sx={{ mt: 1 }}>
                      {loading ? 'Sending...' : 'Send inquiry'}
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactPageContent />
    </Suspense>
  );
}
