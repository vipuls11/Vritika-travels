"use client";

import { useState, type MouseEvent } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  FlightTakeoff,
  KeyboardArrowDown,
  Menu as MenuIcon,
  Search,
  Close,
} from "@mui/icons-material";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Destinations",
    submenu: [
      { label: "Bali", href: "/destinations/bali" },
      { label: "Santorini", href: "/destinations/santorini" },
      { label: "Kyoto", href: "/destinations/kyoto" },
      { label: "Swiss Alps", href: "/destinations/swiss-alps" },
    ],
  },
  {
    label: "Experiences",
    submenu: [
      { label: "Adventure", href: "/experiences/adventure" },
      { label: "Luxury", href: "/experiences/luxury" },
      { label: "Honeymoon", href: "/experiences/honeymoon" },
      { label: "Family Trips", href: "/experiences/family-trips" },
    ],
  },
  { label: "Packages", href: "/packages" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<Record<string, boolean>>(
    {},
  );

  const handleOpenMenu = (event: MouseEvent<HTMLElement>, label: string) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(label);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdown((current) => ({
      ...current,
      [label]: !current[label],
    }));
  };

  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1201,
        background: "rgba(255,255,255,0.78)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(16, 35, 61, 0.08)",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: 1280,
          width: "100%",
          mx: "auto",
          minHeight: { xs: 72, md: 88 },
          px: { xs: 2, md: 3 },
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}
        >
          {/* <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 42,
              height: 42,
              borderRadius: 2,
              background: "linear-gradient(135deg, #0d6efd, #4fa5ff)",
              color: "white",
            }}
          > */}
            {/* <FlightTakeoff fontSize="small" /> */}
            <Box
              component="img"
              src="/favicon.svg"
              alt="Car"
              sx={{
                width: 60,
                height: 60,
                display: "inline-block",
                verticalAlign: "middle",
              }}
            />
          {/* </Box> */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: "text.primary",
              }}
            >
              Vritika
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                letterSpacing: "0.13em",
                textTransform: "uppercase",
              }}
            >
              Travels
            </Typography>
          </Box>
        </Link>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            {navItems.map((item) => {
              const isDropdown = Boolean(item.submenu);

              if (isDropdown) {
                return (
                  <Box key={item.label}>
                    <Button
                      color="inherit"
                      onClick={(event) => handleOpenMenu(event, item.label)}
                      endIcon={<KeyboardArrowDown />}
                      sx={{
                        color: "text.primary",
                        borderRadius: 999,
                        px: 1.5,
                        py: 0.9,
                        "&:hover": { backgroundColor: "rgba(13,110,253,0.05)" },
                      }}
                    >
                      {item.label}
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      open={activeMenu === item.label}
                      onClose={handleCloseMenu}
                      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                      transformOrigin={{ vertical: "top", horizontal: "left" }}
                    >
                      {item.submenu?.map((subItem) => (
                        <MenuItem
                          key={subItem.label}
                          component={Link}
                          href={subItem.href}
                          onClick={handleCloseMenu}
                        >
                          {subItem.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                );
              }

              return (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.href ?? "/"}
                  sx={{
                    color: "text.primary",
                    borderRadius: 999,
                    px: 1.5,
                    py: 0.9,
                    "&:hover": { backgroundColor: "rgba(13,110,253,0.05)" },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: "auto" }}>
          <Button
            component={Link}
            href="/contact"
            variant="outlined"
            color="primary"
            sx={{
              display: { xs: "none", md: "inline-flex" },
              borderRadius: 999,
              px: 2,
            }}
          >
            Plan a trip
          </Button>
          <IconButton
            aria-label="Search travel ideas"
            color="primary"
            sx={{
              display: { xs: "none", md: "inline-flex" },
              border: "1px solid rgba(13,110,253,0.15)",
            }}
          >
            <Search />
          </IconButton>
          <IconButton
            aria-label="Open menu"
            color="primary"
            sx={{ display: { xs: "inline-flex", md: "none" } }}
            onClick={() => setMobileOpen((current) => !current)}
          >
            {mobileOpen ? <Close /> : <MenuIcon />}
          </IconButton>
        </Box>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{ "& .MuiDrawer-paper": { width: "88%", maxWidth: 360, p: 2 } }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            Menu
          </Typography>
          <IconButton onClick={() => setMobileOpen(false)}>
            <Close />
          </IconButton>
        </Box>

        <List disablePadding>
          {navItems.map((item) => {
            if (item.submenu) {
              return (
                <Box key={item.label}>
                  <ListItemButton
                    onClick={() => toggleMobileDropdown(item.label)}
                    sx={{ borderRadius: 2, mb: 0.5 }}
                  >
                    <ListItemText>
                      <Typography sx={{ fontWeight: 700 }}>
                        {item.label}
                      </Typography>
                    </ListItemText>
                    <KeyboardArrowDown
                      sx={{
                        transform: mobileDropdown[item.label]
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                      }}
                    />
                  </ListItemButton>
                  <Collapse
                    in={Boolean(mobileDropdown[item.label])}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List disablePadding sx={{ pl: 2, mb: 1 }}>
                      {item.submenu.map((subItem) => (
                        <ListItemButton
                          key={subItem.label}
                          component={Link}
                          href={subItem.href}
                          onClick={() => setMobileOpen(false)}
                          sx={{ borderRadius: 2 }}
                        >
                          <ListItemText primary={subItem.label} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </Box>
              );
            }

            return (
              <ListItemButton
                key={item.label}
                component={Link}
                href={item.href ?? "/"}
                onClick={() => setMobileOpen(false)}
                sx={{ borderRadius: 2, mb: 0.5 }}
              >
                <ListItemText>
                  <Typography sx={{ fontWeight: 700 }}>{item.label}</Typography>
                </ListItemText>
              </ListItemButton>
            );
          })}
        </List>

        <Button
          component={Link}
          href="/contact"
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
          onClick={() => setMobileOpen(false)}
        >
          Plan a trip
        </Button>
      </Drawer>

      <Divider sx={{ borderColor: "rgba(16, 35, 61, 0.08)" }} />
    </Box>
  );
}
