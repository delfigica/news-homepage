import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import logo from "../assets/logo.svg";
import menu from "../assets/icon-menu.svg";
import { MenuDrawer } from "./MenuDrawer";

export const NavBar = () => {
  const links = ["Home", "New", "Popular", "Trending", "Categories"];

  const theme = useTheme();

  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={
        laptop
          ? {
              display: "flex",
              alignItems: "center",
              padding: "25px 0px",
              justifyContent: "space-between",
              width: "78%",
              margin: "auto",
            }
          : {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "25px",
              position: 'sticky'
            }
      }
    >
      <Box sx={{ width: "50px" }}>
        <img src={logo} />
      </Box>
      {laptop ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "40%",
          }}
        >
          {links.map((link) => (
            <Typography
              key={link}
              sx={{
                color: "hsl(236, 13%, 42%)",
                fontWeight: 400,
                "&:hover": { color: "hsl(5, 85%, 63%)", cursor: "pointer" },
              }}
            >
              {link}
            </Typography>
          ))}
        </Box>
      ) : (
        <MenuDrawer />
      )}
    </Box>
  );
};
