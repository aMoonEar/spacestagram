import { createTheme } from "@mui/material/styles";
import "@fontsource/comfortaa/400.css";
import "@fontsource/comfortaa/700.css";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#D1DBBD",
    },
    secondary: {
      main: "#91AA9D",
    },
    background: {
      default: "#193441",
      paper: "#3E606F",
    },
    text: {
      primary: "#FCFFF5",
      secondary: "#FCFFF5",
    },
  },
  typography: {
    h1: {
      fontSize: "7rem",
      fontFamily: "Comfortaa",
      "@media (max-width:900px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      fontFamily: "Comfortaa",
      fontWeight: 700,
      fontSize: "1.8rem",
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.2rem",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.7,
      "@media (max-width:900px)": {
        lineHeight: 1.2,
      },
    },
    body2: {
      textTransform: "uppercase",
    },
  },
});

export default theme;
