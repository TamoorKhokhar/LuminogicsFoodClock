import Header from "../components/header";
import theme from "../theme/theme";
import { ThemeProvider } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import MorningModal from "../components/modals/morningTeaModal";
import EveningModal from "../components/modals/eveningTeaModal";
import LunchModal from "../components/modals/lunchModal";
function HomePage() {
  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem"
          }}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item xs={10}>
              <Typography variant="h2"> Start Your Day With Fresh Mind</Typography>
              <Typography variant="subtitle1">
                Wide Variety of IT Services and We work with small to mid-sized companies to build
                customized software solutions.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            xs={10}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem"
            }}>
            <MorningModal />
            <LunchModal />
            <EveningModal />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default HomePage;
