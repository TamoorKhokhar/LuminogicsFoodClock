import Header from '../components/header';
import theme from '../theme/theme';
import { ThemeProvider } from '@emotion/react';
import { Grid, Typography } from '@mui/material';
import TeaData from '../components/teaData';
import LunchData from '../components/lunchData';
import BasicModal from '../components/modals/basicModal';
import MorningTeaImage from '../assets/images/MorningTea.png';
import LunchImage from '../assets/images/Lunch.png';
import EveningTeaImage from '../assets/images/EveningTea.png';
import { morningTeaStart } from '../constants/appConstants';
import { morningTeaEnd } from '../constants/appConstants';
import { lunchStart } from '../constants/appConstants';
import { lunchEnd } from '../constants/appConstants';
import { eveningTeaStart } from '../constants/appConstants';
import { eveningTeaEnd } from '../constants/appConstants';
import { useSelector } from 'react-redux';
import ModallunchImage from '../assets/images/ModalLunch.png';
import ModalMorningTeaImage from '../assets/images/ModalMorningTea.png';
import ModalEveningTeaImage from '../assets/images/ModalEveningtea.png';
function HomePage() {
  function inTime(start, end) {
    var now = new Date();
    var time = now.getHours() * 60 + now.getMinutes();
    return time >= start && time < end;
  }
  const order = useSelector((state) => state?.userOrder[0]);
  const lunchh = useSelector((state) => state?.lunchOrder[0]);
  const tea = useSelector((state) => state?.eveningOrder[0]);

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
              <Typography variant="h1">PLACE ORDER!!</Typography>
              <Typography variant="subtitle1">
                <b>“By Clicking The Below Cards”</b>
              </Typography>
            </Grid>

            <Grid
              container
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}>
              <BasicModal
                disabled={!inTime(morningTeaStart, morningTeaEnd)}
                type="Morning-Tea"
                teaData={
                  <TeaData
                    type="Morning-Tea"
                    order={{
                      _id: order?._id,
                      sugarQuantity: order?.sugerQuantity,
                      teaVolume: order?.teaVolume
                    }}
                  />
                }
                title=" Morning Tea"
                src={MorningTeaImage}
                image={ModalMorningTeaImage}
              />
              <BasicModal
                disabled={!inTime(lunchStart, lunchEnd)}
                type="Lunch"
                lunchData={
                  <LunchData
                    type="Lunch"
                    order={{
                      _id: lunchh?._id,
                      items: lunchh?.extras,
                      rotti: lunchh?.rotiQuantity,
                      amountPaid: lunchh?.amount
                    }}
                  />
                }
                title="Lunch"
                src={LunchImage}
                image={ModallunchImage}
              />
              <BasicModal
                disabled={!inTime(eveningTeaStart, eveningTeaEnd)}
                type="Evening-Tea"
                teaData={
                  <TeaData
                    type="Evening-Tea"
                    order={{
                      _id: tea?._id,
                      sugarQuantity: tea?.sugerQuantity,
                      teaVolume: tea?.teaVolume
                    }}
                  />
                }
                title="Evening Tea"
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
