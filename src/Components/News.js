import React from "react";
import { Box, Typography, Button } from "@mui/material";
import desktop from "../assets/image-web-3-desktop.jpg";

export const News = () => {
  return (
    <Box sx={{ width: "50%" }}>
      <Box sx={{ width: "700px" }}>
        <img src={desktop} />
      </Box>
      <Box
        sx={{
          display: "flex",
          padding: "1em 0",
          height: "180px",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: "3em",
            fontWeight: 800,
            width: "40%",
            lineHeight: "50px",
          }}
          color="secondary"
        >
          The Bright Future of Web 3.0?
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "50%",
          }}
        >
          <Typography sx={{ fontWeight: 400 }}>
            We dive into the next evolution of the web thaht claims to put the
            power of platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontWeight: 800,
              letterSpacing: "3px",
              backgroundColor: "hsl(5, 85%, 63%)",
              "&:hover": { backgroundColor: "hsl(240, 100%, 5%)" },
            }}
          >
            read more
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
