import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "../assets/logo.svg";

export const NavBar = () => {
  const links = ["Home", "New", "Popular", "Trending", "Categories"];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "25px 0px",
        justifyContent: "space-between",
        width: "78%",
        margin: "auto",
      }}
    >
      <Box sx={{ width: "50px" }}>
        <img src={logo} />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "40%" }}
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
    </Box>
  );
};
