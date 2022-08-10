import Header from '../components/header';
import * as React from 'react';
import theme from '../theme/theme';
import { ThemeProvider } from '@emotion/react';
import { Grid, Typography } from '@mui/material';
import BasicModal from '../components/modals/basicModal';
import MorningTeaImage from '../assets/images/MorningTea.png';
import LunchImage from '../assets/images/Lunch.png';
import EveningTeaImage from '../assets/images/EveningTea.png';
import ModallunchImage from '../assets/images/ModalLunch.png';
import ModalMorningTeaImage from '../assets/images/ModalMorningTea.png';
import ModalEveningTeaImage from '../assets/images/ModalEveningtea.png';
import Buttont from '../components/button';
import TeaRecords from '../components/teaRecords';
import TableRecords from '../components/tableRecords';
function HomePage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '2rem'
          }}>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
            <Grid item xs={10}>
              <Typography variant="h2"> Start Your Day With Fresh Mind</Typography>
              <Typography variant="subtitle1">
                “Tell me what you eat, and I will tell you who you are.”
              </Typography>
            </Grid>

            <Grid
              container
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}>
              <BasicModal
                teaData={<TeaRecords heading="Morning Tea" />}
                title="Morning Tea"
                open={open}
                button={
                  <Buttont
                    handleOpen={handleOpen}
                    // onClose={handleClose}
                    text="Generate Report"
                    variant="contained"
                    style={{
                      width: '70%'
                    }}
                  />
                }
                src={MorningTeaImage}
                image={ModalMorningTeaImage}
              />
              <BasicModal
                lunchData={<TableRecords heading="Lunch" />}
                title="Lunch"
                button={
                  <Buttont
                    onClick={handleOpen}
                    text="Generate Report"
                    variant="contained"
                    style={{
                      width: '70%'
                    }}
                  />
                }
                src={LunchImage}
                image={ModallunchImage}
              />
              <BasicModal
                teaData={<TeaRecords heading="Evening Tea" />}
                title="Evening Tea"
                button={
                  <Buttont
                    text="Generate Report"
                    variant="contained"
                    style={{
                      width: '70%'
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
