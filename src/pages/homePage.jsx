import Header from "../components/header";
import theme from "../theme/theme";
import { ThemeProvider } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import TeaData from "../components/teaData";
import LunchData from "../components/lunchData";
import BasicModal from "../components/modals/modal";
import MorningTea from "../assets/images/MorningTea.png";
import Lunch from "../assets/images/Lunch.png";
import EveningTea from "../assets/images/EveningTea.png";
import Modallunch from "../assets/images/ModalLunch.png";
import ModalMorningTea from "../assets/images/ModalMorningTea.PNG";
import ModalEveningTea from "../assets/images/ModalEveningtea.png";
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
                “Tell me what you eat, and I will tell you who you are.”
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
            <BasicModal
              teaData={<TeaData />}
              title="Morning Tea"
              src={MorningTea}
              image={ModalMorningTea}
            />
            <BasicModal lunchData={<LunchData />} title="Lunch" src={Lunch} image={Modallunch} />
            <BasicModal
              teaData={<TeaData />}
              title="Evening Tea"
              src={EveningTea}
              image={ModalEveningTea}
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default HomePage;
