import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@emotion/react';
import theme from '../theme/theme';
import { useState } from 'react';
import Buttons from './buttonContainer';
function LunchData() {
  const [userName, setUserName] = useState('');
  const [items, setItems] = useState('');
  const [rotti, setRotti] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
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
            <Typography variant="h4">Lunch Details</Typography>
            <Typography variant="p1">User Name:</Typography>
            <TextField
              required
              id="outlined-required"
              label="Required"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Typography variant="p1">Item Description:</Typography>
            <TextField
              required
              id="outlined-required"
              label="Required"
              value={items}
              onChange={(e) => setItems(e.target.value)}
            />
            <Typography variant="p1">Rotti:</Typography>
            <TextField
              required
              id="outlined-required"
              label="Required"
              type="number"
              value={rotti}
              onChange={(e) => setRotti(e.target.value)}
            />
            <Typography variant="p1">Amount Paid:</Typography>
            <TextField
              required
              id="outlined-required"
              label="Required"
              type="number"
              value={amountPaid}
              onChange={(e) => setAmountPaid(e.target.value)}
            />
            <Buttons
              onClick={SubmitForm}
              disabled={userName === '' || items === '' || rotti === '' || amountPaid === ''}
            />
          </Box>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}

export default LunchData;
