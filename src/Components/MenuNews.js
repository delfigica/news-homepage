import React from "react";
import { Box, Typography } from "@mui/material";

export const MenuNews = () => {
  const news = [
    {
      id: 0,
      title: "Hydrogen VS Electric Cars",
      description: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      id: 1,
      title: "The Downsides of Al Artistry",
      description:
        "What are the possible adverse effects of on-demand Al image generation?",
    },
    {
      id: 2,
      title: "Is VC Funding Drying Up?",
      description:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  return (
    <Box
      sx={{
        marginLeft: "50px",
        backgroundColor: "hsl(240, 100%, 5%)",
        width: "25%",
        padding: "1.5em",
      }}
    >
      <Typography
        sx={{ fontSize: "2.5em", fontWeight: 800, color: "hsl(35, 77%, 62%)" }}
      >
        New
      </Typography>
      {news.map((n) => (
        <Box key={n.id}>
          <hr
            style={{
              border: "1px solid hsl(233, 8%, 79%)",
              margin: "15px 0px",
            }}
          />
          <Typography
            sx={{
              color: "hsl(36, 100%, 99%)",
              fontWeight: 700,
              "&:hover": { color: "hsl(35, 77%, 62%)", cursor: "pointer" },
            }}
          >
            {n.title}
          </Typography>
          <Typography
            sx={{
              color: "hsl(233, 8%, 79%)",
              fontWeight: 400,
              margin: "10px 0px",
            }}
          >
            {n.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
