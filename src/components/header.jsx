import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "../theme/theme";
function Header() {
  const navigate = useNavigate();
  function logOut() {
    localStorage.clear();
    navigate("/SignIn");
  }

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
                <Button color="inherit" onClick={logOut}>
                  logout
                </Button>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export default Header;
