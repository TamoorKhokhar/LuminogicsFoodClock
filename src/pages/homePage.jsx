import Header from "../components/header";
import theme from "../theme/theme";
import { ThemeProvider } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import TeaData from "../components/teaData";
import LunchData from "../components/lunchData";
import BasicModal from "../components/modals/modal";
import MorningTea from "../assets/images/MorningTea.png";
import Lunch from "../assets/images/Lunch.jpg";
import EveningTea from "../assets/images/EveningTea.png";
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
              <Typography variant="h1"> Start Your Day With Fresh Mind</Typography>
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
            <BasicModal teaData={<TeaData />} title="Morning Tea" src={MorningTea} />
            <BasicModal lunchData={<LunchData />} title="Lunch" src={Lunch} />
            <BasicModal teaData={<TeaData />} title="Evening Tea" src={EveningTea} />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default HomePage;
