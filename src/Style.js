import { createTheme } from "@mui/material";

const colors = {
  softOrange: "hsl(35, 77%, 62%)",
  softRed: "hsl(5, 85%, 63%)",
  offWhite: "hsl(36, 100%, 99%)",
  grayishBlue: "hsl(233, 8%, 79%)",
  darkGrayishBlue: "hsl(236, 13%, 42%)",
  veryDarkBlue: "hsl(240, 100%, 5%)",
};

export const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  palette: {
    primary: {
      main: colors.softRed,
    },
    secondary: {
      main: colors.veryDarkBlue,
    },
  },
});
