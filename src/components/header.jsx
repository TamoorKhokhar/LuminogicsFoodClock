import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "../theme/theme";
function Header() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item sx={{ flexGrow: 1 }}>
          <AppBar position="sticky" sx={{ background: "#34474E" }}>
            <Toolbar sx={{ display: "flex" }}>
              <Grid item xs={6}>
                <Typography variant="h6" color="inherit" component="div">
                  <Link to="/" style={{ color: "white", textDecorationLine: "none" }}>
                    Luminogics Food Clock
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography variant="h6" color="inherit" component="div">
                  <Link
                    to="/homePage"
                    style={{ color: "white", textDecorationLine: "none", marginRight: "1rem" }}>
                    Home
                  </Link>
                </Typography>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export default Header;
