import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#202020",
      light: "#FAFAFA"
    },
    secondary: {
      main: "#132F4C",
      light: "#6DB784"
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
      color: "#fff"
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 600,
      marginTop: "1rem"
    },
    h5: {
      //For nav bar number
      fontSize: "1.3rem",
      textAlign: "center",
      width: "max-content"
    },
    h6: {
      //for nav bar login
      fontSize: "1.3rem",
      textAlign: "center",
      marginLeft: "0.1rem",
      width: "max-content"
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
