"use client";

import Link from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";
import { Email, LocationOn, Phone, ArrowForward } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ background: "#0b1730", color: "white", mt: 12 }}
    >
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "1.5fr 0.8fr 0.8fr 1fr",
            },
            gap: 4,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 800, letterSpacing: "-0.04em" }}
            >
              Vritika Travel
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 320 }}
            >
              Thoughtful journeys, personal concierge support, and beautiful
              moments crafted around the way you love to travel.
            </Typography>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              color="secondary"
              endIcon={<ArrowForward />}
              sx={{ alignSelf: "flex-start" }}
            >
              Book your escape
            </Button>
          </Box>

          <Box>
            <Typography
              variant="overline"
              sx={{
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.12em",
                mb: 2,
                display: "block",
              }}
            >
              Explore
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
              <Link href="/destinations">
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.8)" }}
                >
                  Destinations
                </Typography>
              </Link>
              <Link href="/packages">
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.8)" }}
                >
                  Packages
                </Typography>
              </Link>
              <Link href="/experiences">
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.8)" }}
                >
                  Experiences
                </Typography>
              </Link>
              <Link href="/blog">
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.8)" }}
                >
                  Travel Blog
                </Typography>
              </Link>
            </Box>
          </Box>

          <Box>
            <Typography
              variant="overline"
              sx={{
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.12em",
                mb: 2,
                display: "block",
              }}
            >
              Company
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
              <Link href="/about">
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.8)" }}
                >
                  About us
                </Typography>
              </Link>
              <Link href="/contact">
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.8)" }}
                >
                  Contact
                </Typography>
              </Link>
              <Link href="/packages">
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.8)" }}
                >
                  Special offers
                </Typography>
              </Link>
              <Link href="/destinations/bali">
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.8)" }}
                >
                  Tailor-made trips
                </Typography>
              </Link>
            </Box>
          </Box>

          <Box>
            <Typography
              variant="overline"
              sx={{
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.12em",
                mb: 2,
                display: "block",
              }}
            >
              Contact
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                <LocationOn sx={{ color: "secondary.main", fontSize: 18 }} />
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.8)" }}
                >
                  25 Marina Avenue, Bali
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                <Phone sx={{ color: "secondary.main", fontSize: 18 }} />
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.8)" }}
                >
                  +1 (800) 555-0148
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                <Email sx={{ color: "secondary.main", fontSize: 18 }} />
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.8)" }}
                >
                  hello@Vritikatravel.com
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            mt: 5,
            pt: 3,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
            © 2026 Vritika Travel powered by{" "}
          <Box
  component={Link}
  href="https://digitalwebapp.in"
  target="_blank"
  rel="noopener noreferrer"
  sx={{
    color: '#4169E1',
    fontWeight: 700,
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: '#2748B5',
      textDecoration: 'underline',
    },
  }}
>
  DigitalWebApp
</Box>
            . All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
              Privacy Policy
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
              Terms
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
