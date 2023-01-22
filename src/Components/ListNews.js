import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

import gaming from "../assets/image-gaming-growth.jpg";
import retro from "../assets/image-retro-pcs.jpg";
import laptops from "../assets/image-top-laptops.jpg";

export const ListNews = () => {
  const news = [
    {
      id: "01",
      title: "Reviving Retro PCs",
      description: "What happens when old PCs are given modern upgrades?",
      image: retro,
    },
    {
      id: "02",
      title: "Top 10 Laptops pf 2022",
      description: "Our best picks for various needs and budgets.",
      image: laptops,
    },
    {
      id: "03",
      title: "The Growth of Gaming",
      description: "How the pandemic has sparked fresh opportunities.",
      image: gaming,
    },
  ];

  const theme = useTheme();

  const laptop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      sx={
        laptop
          ? { display: "flex", margin: "50px auto", width: "80%" }
          : { margin: "15px" }
      }
    >
      {news.map((n) => (
        <Box
          key={n.id}
          sx={
            laptop
              ? { display: "flex" }
              : { margin: "20px 0px", display: "flex" }
          }
        >
          <Box
            sx={
              laptop
                ? { width: "100px" }
                : { width: "150px", margin: "0px 10px" }
            }
          >
            <img src={n.image} />
          </Box>
          <Box sx={laptop ? { margin: "0px 15px" } : {}}>
            <Typography
              sx={
                laptop
                  ? {
                      fontSize: "2em",
                      color: "hsl(233, 8%, 79%)",
                      fontWeight: 800,
                    }
                  : {
                      fontSize: "1.5em",
                      color: "hsl(233, 8%, 79%)",
                      fontWeight: 800,
                    }
              }
            >
              {n.id}
            </Typography>
            <Typography
              color="secondary"
              sx={
                laptop
                  ? {
                      fontWeight: 800,
                      fontSize: "1.2em",
                      "&:hover": {
                        color: "hsl(5, 85%, 63%)",
                        cursor: "pointer",
                      },
                    }
                  : {
                      fontWeight: 800,
                      fontSize: "1em",
                      "&:hover": {
                        color: "hsl(5, 85%, 63%)",
                        cursor: "pointer",
                      },
                    }
              }
            >
              {n.title}
            </Typography>
            <Typography
              sx={
                laptop
                  ? {
                      color: "hsl(236, 13%, 42%)",
                      fontWeight: 400,
                      width: "240px",
                      margin: "10px 0px",
                    }
                  : {
                      width: "150px",
                      color: "hsl(236, 13%, 42%)",
                      fontWeight: 400,
                      fontSize: "1em",
                    }
              }
            >
              {n.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
