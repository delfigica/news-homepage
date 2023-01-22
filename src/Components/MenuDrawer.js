import React, { useState } from "react";
import menu from "../assets/icon-menu.svg";
import close from "../assets/icon-menu-close.svg";

import { Box, Typography, Drawer } from "@mui/material";

export const MenuDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const links = ["Home", "New", "Popular", "Trending", "Categories"];

  return (
    <Box>
      <Box onClick={() => setOpenDrawer((prev) => !prev)}>
        <img src={menu} />
      </Box>
      <Drawer
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        anchor="right"
      >
        <Box role="presentation" sx={{ width: "200px" }}>
          <Box
            sx={{
              width: "30px",
              margin: "25px",
              marginLeft: "150px",
            }}
          >
            <img src={close} onClick={() => setOpenDrawer(false)} />
          </Box>
          <Box sx={{ padding: "0px 30px" }}>
            {links.map((link) => (
              <Typography
                key={link}
                sx={{
                  color: "hsl(240, 100%, 5%)",
                  fontWeight: 400,
                  margin: "15px 0px",
                  "&:hover": { color: "hsl(5, 85%, 63%)", cursor: "pointer" },
                }}
              >
                {link}
              </Typography>
            ))}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};
