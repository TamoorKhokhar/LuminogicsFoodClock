import Header from '../components/header';
import * as React from 'react';
import theme from '../theme/theme';
import { ThemeProvider } from '@emotion/react';
import { Grid, Typography } from '@mui/material';
import BasicModal from '../components/modals/basicModal';
import MorningTeaImage from '../assets/images/MorningTea.png';
import LunchImage from '../assets/images/Lunch.png';
import {
  morningResultStart,
  morningResultEnd,
  lunchResultStart,
  lunchResultEnd,
  eveningResultStart,
  eveningResultEnd
} from '../constants/appConstants';
import EveningTeaImage from '../assets/images/EveningTea.png';
import ModallunchImage from '../assets/images/ModalLunch.png';
import ModalMorningTeaImage from '../assets/images/ModalMorningTea.png';
import ModalEveningTeaImage from '../assets/images/ModalEveningtea.png';
import TeaRecords from '../components/teaRecords';
import LunchRecords from '../components/lunchRecords';
function HomePage() {
  function inTime(start, end) {
    var now = new Date();
    var time = now.getHours() * 60 + now.getMinutes();
    return time >= start && time < end;
  }
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
              <Typography variant="h1">GENERATE REPORT</Typography>
              <Typography variant="subtitle1">“By Clicking The Below Cards”</Typography>
            </Grid>

            <Grid
              container
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}>
              <BasicModal
                type="Morning-Tea"
                teaData={<TeaRecords heading="Morning Tea" type="Morning-Tea" />}
                title="Morning Tea"
                open={open}
                src={MorningTeaImage}
                image={ModalMorningTeaImage}
                disabled={!inTime(morningResultStart, morningResultEnd)}
              />
              <BasicModal
                type="Lunch"
                lunchData={<LunchRecords heading="Lunch" type="Lunch" />}
                title="Lunch"
                src={LunchImage}
                image={ModallunchImage}
                disabled={!inTime(lunchResultStart, lunchResultEnd)}
              />
              <BasicModal
                type="Evening-Tea"
                teaData={<TeaRecords heading="Evening Tea" type="Evening-Tea" />}
                title="Evening Tea"
                src={EveningTeaImage}
                image={ModalEveningTeaImage}
                disabled={!inTime(eveningResultStart, eveningResultEnd)}
              />
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default HomePage;
