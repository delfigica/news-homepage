import { NavBar } from "./Components/NavBar.js";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { News } from "./Components/News.js";
import { MenuNews } from "./Components/MenuNews.js";
import { ListNews } from "./Components/ListNews.js";

function App() {
  const theme = useTheme();

  const laptop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box sx={{ backgroundColor: "hsl(36, 100%, 99%)" }}>
      <NavBar />
      <Box sx={laptop ? { display: "flex", justifyContent: "center" } : {}}>
        <News />
        <MenuNews />
      </Box>
      <ListNews />
    </Box>
  );
}

export default App;
