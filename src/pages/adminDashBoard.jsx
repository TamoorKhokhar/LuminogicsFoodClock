import Header from "../components/header";
import theme from "../theme/theme";
import { ThemeProvider } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import TeaData from "../components/teaData";
import LunchData from "../components/lunchData";
import BasicModal from "../components/modals/basicModal";
import MorningTeaImage from "../assets/images/MorningTea.png";
import LunchImage from "../assets/images/Lunch.png";
import EveningTeaImage from "../assets/images/EveningTea.png";
import ModallunchImage from "../assets/images/ModalLunch.png";
import ModalMorningTeaImage from "../assets/images/ModalMorningTea.png";
import ModalEveningTeaImage from "../assets/images/ModalEveningtea.png";
import Buttont from "../components/button";
import TeaRecords from "../components/teaRecords";
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
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}>
            <Grid item xs={10}>
              <Typography variant="h2"> Start Your Day With Fresh Mind</Typography>
              <Typography variant="subtitle1">
                “Tell me what you eat, and I will tell you who you are.”
              </Typography>
            </Grid>

            <Grid
              container
              md={12}
              xs={10}
              sx={{
                display: "flex",
                justifyContent: "center"
              }}>
              <BasicModal
                teaData={<TeaRecords />}
                title="Morning Tea"
                button={
                  <Buttont
                    text="Generate Report"
                    variant="contained"
                    style={{
                      width: "70%"
                    }}
                  />
                }
                src={MorningTeaImage}
                image={ModalMorningTeaImage}
              />
              <BasicModal
                lunchData={<LunchData />}
                title="Lunch"
                button={
                  <Buttont
                    text="Generate Report"
                    variant="contained"
                    style={{
                      width: "70%"
                    }}
                  />
                }
                src={LunchImage}
                image={ModallunchImage}
              />
              <BasicModal
                teaData={<TeaData />}
                title="Evening Tea"
                button={
                  <Buttont
                    text="Generate Report"
                    variant="contained"
                    style={{
                      width: "70%"
                    }}
                  />
                }
                src={EveningTeaImage}
                image={ModalEveningTeaImage}
              />
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default HomePage;
