import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#34474E", //nav-bar
      light: "#FFFFFF" //white-background
    },
    secondary: {
      main: "#242424", //head-text
      light: "#686868s" //paragraph-text
    }
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#242424",
      paddingRight: "3rem",
      paddingLeft: "3rem",
      textAlign: "center"
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#242424",
      paddingRight: "3rem",
      paddingLeft: "3rem",
      textAlign: "center"
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 700,
      textAlign: "center",
      color: "#242424",
      cursor: "pointer"
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      marginTop: "1rem",
      color: "#242424"
    },
    h5: {
      fontSize: "1.3rem",
      textAlign: "center",
      width: "max-content"
    },
    h6: {
      fontSize: "1.3rem",
      textAlign: "center",
      width: "max-content"
    },
    p1: {
      fontSize: "1rem",
      textAlign: "center",
      width: "max-content",
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    },
    subtitle1: {
      fontWeight: 200,
      fontSize: "1rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      textAlign: "center",
      color: "#686868"
    }
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#fafafa",
          color: "#132F4C",
          border: "2px solid #3DAD6A "
        }
      }
    }
  }
});
export default theme;
