import React, { useEffect } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@emotion/react';
import DropDown from '../components/dropDown';
import theme from '../theme/theme';
import Btn from './button';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { orderData, updateOrder } from '../utils/services/tableDataServices';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteOrder } from '../utils/services/tableDataServices';
import { user_Order } from '../redux/action/actions';
function TeaData({ type, order }) {
  const [sugarQuantity, setSugarQuantity] = useState('');
  const [teaVolume, setTeaVolume] = useState('');
  const user = useSelector((state) => state?.signIn?.signIn) || '';
  const [userName, setUserName] = useState(user?.userName);
  const dispatch = useDispatch();
  const orderId = useSelector((state) => state?.userOrder[0]);
  useEffect(() => {
    if (order) {
      setSugarQuantity(order?.sugarQuantity);
      setTeaVolume(order?.teaVolume);
    }
  }, [order]);

  const SubmitForm = async (e) => {
    e.preventDefault();
    let date = new Date().toLocaleString('en-US', {
      hourCycle: 'h24'
    });
    date = date + 'Z';
    e.preventDefault();
    const newOrder = {
      email: user?.email,
      employeeName: user?.userName,
      sugerQuantity: sugarQuantity,
      teaVolume: teaVolume,
      orderDate: date,
      orderType: type
    };
    await orderData(newOrder);
  };
  const handleUpdateOrder = async (e) => {
    e.preventDefault();
    const newOrder = {
      _id: orderId?._id,
      sugerQuantity: sugarQuantity,
      teaVolume: teaVolume
    };
    const order = await updateOrder(newOrder);
    dispatch(user_Order(order));
  };
  const handleDeleteOrder = async (e) => {
    e.preventDefault();
    const order = await deleteOrder(orderId?._id);
    dispatch(user_Order(order));
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
              value={teaVolume || ''}
              onChange={(e) => setTeaVolume(e.target.value)}
            />
            <Grid
              container
              sx={{ justifyContent: 'space-around', marginTop: '25px', marginBottom: '0.5rem' }}>
              <Grid item xs={12} lg={5}></Grid>
              <Grid item xs={12} md={3} lg={2}>
                <Btn
                  text="Delete"
                  onClick={handleDeleteOrder}
                  icon={<DeleteIcon />}
                  variant="Contained"
                  style={{ backgroundColor: 'red', color: 'white' }}
                />
              </Grid>
              <Grid item xs={12} md={3} lg={2}>
                <Btn
                  text="Edit"
                  onClick={handleUpdateOrder}
                  icon={<EditIcon />}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={3} lg={2}>
                <Btn
                  text="Order"
                  icon={<CheckIcon />}
                  onClick={SubmitForm}
                  variant="contained"
                  // disabled={userName === '' || sugarQuantity === '' || teaVolume === ''}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}

export default TeaData;
