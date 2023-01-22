import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import desktop from "../assets/image-web-3-desktop.jpg";
import mobile from "../assets/image-web-3-mobile.jpg";

export const News = () => {
  const theme = useTheme();

  const laptop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box sx={laptop ? { width: "50%" } : {}}>
      <>
        {laptop ? (
          <Box sx={{ width: "700px" }}>
            <img src={desktop} />
          </Box>
        ) : (
          <Box sx={{ width: "300px", margin: "auto" }}>
            <img src={mobile} />
          </Box>
        )}
      </>

      <Box
        sx={
          laptop
            ? {
                display: "flex",
                padding: "1em 0",
                height: "180px",
                justifyContent: "space-between",
                width: "100%",
              }
            : {}
        }
      >
        <Typography
          sx={
            laptop
              ? {
                  fontSize: "3em",
                  fontWeight: 800,
                  width: "40%",
                  lineHeight: "50px",
                }
              : {
                  fontSize: "2.5em",
                  fontWeight: 800,
                  lineHeight: "50px",
                  margin: "15px",
                }
          }
          color="secondary"
        >
          The Bright Future of Web 3.0?
        </Typography>
        <Box
          sx={
            laptop
              ? {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  width: "50%",
                }
              : { width: "90%", margin: "auto" }
          }
        >
          <Typography
            sx={
              laptop
                ? { fontWeight: 400, color: "hsl(236, 13%, 42%)" }
                : {
                    fontWeight: 400,
                    color: "hsl(236, 13%, 42%)",
                    margin: "10px 0px",
                  }
            }
          >
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
