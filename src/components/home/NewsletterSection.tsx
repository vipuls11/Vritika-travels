import {
  Box,
  Button,
  Card,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { Send } from "@mui/icons-material";

export default function NewsletterSection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl">
        <Card
          sx={{
            background:
              "linear-gradient(135deg, rgba(13,110,253,0.94), rgba(37,99,235,0.88))",
            color: "white",
            border: "none",
            p: { xs: 3, md: 5 },
            minHeight: 200,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "center" },
              gap: 3,
            }}
          >
            <Box sx={{ maxWidth: 620 }}>
              <Typography
                variant="overline"
                sx={{ letterSpacing: "0.12em", opacity: 0.8 }}
              >
                Stay inspired
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: 800, mt: 1, letterSpacing: "-0.05em" }}
              >
                Get destination ideas and fresh travel inspiration.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 1.5,
                width: { xs: "100%", md: "auto" },
              }}
            >
              <TextField
                placeholder="Your email address"
                variant="filled"
                sx={{
                  width: { xs: "100%", md: 320 },
                  "& .MuiFilledInput-root": {
                    backgroundColor: 'rgba(255,255,255,0.14)',
                    borderRadius: 999,
                    color: "white",
                    "&:before, &:after": { display: "none" },
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.05)" },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "rgba(255,255,255,0.7)",
                  },
                  "& .MuiFilledInput-input": {
                    p: "16px 18px",
                    "&:-webkit-autofill": {
                      WebkitBoxShadow: "0 0 0 100px transparent inset",
                      WebkitTextFillColor: "white",
                      caretColor: "white",
                      transition: "background-color 9999s ease-out",
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                endIcon={<Send />}
                sx={{ whiteSpace: "nowrap" }}
              >
                Join now
              </Button>
            </Box>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
