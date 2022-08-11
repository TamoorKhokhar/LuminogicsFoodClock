import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@emotion/react';
import DropDown from '../components/dropDown';
import theme from '../theme/theme';
import Buttons from './buttonContainer';
import { useState } from 'react';
function TeaData() {
  const [userName, setUserName] = useState('');
  const [sugarQuantity, setSugarQuantity] = useState('');
  const [teaVolume, setTeaVolume] = useState('');

  const SubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          minHeight: 'max-content'
        }}>
        <Box
          component="form"
          onSubmit={SubmitForm}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignitem: 'center',
            marginTop: '1rem',
            marginBottom: '1rem',
            width: '100%',
            borderRadius: '5px',
            height: 'max-content'
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '90%',
              color: '#132F4C'
            }}>
            <Typography variant="h4">Tea Details</Typography>
            <Typography variant="p1">User Name:</Typography>
            <TextField
              required
              id="outlined-required"
              label="Required"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Typography variant="p1">Sugar Quantatity:</Typography>
            <TextField
              required
              id="outlined-required"
              label="Required"
              type="number"
              value={sugarQuantity}
              onChange={(e) => setSugarQuantity(e.target.value)}
            />
            <Typography variant="p1">Tea Volume:</Typography>
            <DropDown
              item1="Half Cup"
              item2="Full Cup"
              value={teaVolume}
              onChange={(e) => setTeaVolume(e.target.value)}
            />
            <Buttons
              onClick={SubmitForm}
              disabled={userName === '' || sugarQuantity === '' || teaVolume === ''}
            />
          </Box>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}

export default TeaData;
