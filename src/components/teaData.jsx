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
import {
  user_Order,
  order_delete,
  eveningOrderItem,
  eveningOrderDelete
} from '../redux/action/actions';
import { ToastContainer, toast } from 'react-toastify';
function TeaData({ type, order }) {
  const [sugarQuantity, setSugarQuantity] = useState('');
  const [teaVolume, setTeaVolume] = useState('');
  const user = useSelector((state) => state?.signIn?.signIn) || '';
  const [userName, setUserName] = useState(user?.userName);
  const dispatch = useDispatch();
  const orderId = useSelector((state) => state?.userOrder[0]);
  const oId = useSelector((state) => state?.eveningOrder[0]);
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
    // let date = '2022-08-14T01:00:00'; this line is for testing

    const newOrder = {
      email: user?.email,
      employeeName: user?.userName,
      sugerQuantity: sugarQuantity,
      teaVolume: teaVolume,
      orderDate: date,
      orderType: type
    };
    const result = await orderData(newOrder);
    if (result?.status === 200) {
      toast('Order placed Successfully!');
      setSugarQuantity('');
      setTeaVolume('');
    } else {
      toast(result?.response?.data?.metadata?.message);
    }
  };
  const handleUpdateOrder = async (e) => {
    e.preventDefault();
    if (type === 'Morning-Tea') {
      const newOrder = {
        _id: orderId?._id,
        sugerQuantity: sugarQuantity,
        teaVolume: teaVolume
      };
      const order = await updateOrder(newOrder);
      if (order?.status === 200) {
        toast('Order updated');
        setSugarQuantity('');
        setTeaVolume('');
      } else {
        toast(order?.response?.data?.metadata?.message);
      }
      dispatch(user_Order(order));
    } else if (type === 'Evening-Tea') {
      const newOrder = {
        _id: oId?._id,
        sugerQuantity: sugarQuantity,
        teaVolume: teaVolume
      };
      const order = await updateOrder(newOrder);
      if (order?.status === 200) {
        toast('Order updated Successfully!');
        setSugarQuantity('');
        setTeaVolume('');
      } else {
        toast(order?.response?.data?.metadata?.message);
      }
      dispatch(eveningOrderItem(order));
    }
  };
  const handleDeleteOrder = async (e) => {
    e.preventDefault();
    if (type === 'Morning-Tea') {
      const order = await deleteOrder(orderId?._id);
      if (order?.status === 200) {
        toast('Order Deleted Successfully!');
        setSugarQuantity('');
        setTeaVolume('');
      } else {
        toast(order?.response?.data?.metadata?.message);
      }
      dispatch(order_delete(order, orderId?._id));
    } else if (type === 'Evening-Tea') {
      const order = await deleteOrder(oId?._id);
      if (order?.status === 200) {
        toast('Order Deleted Successfully!');
        setSugarQuantity('');
        setTeaVolume('');
      } else {
        toast(order?.response?.data?.metadata?.message);
      }
      dispatch(eveningOrderDelete(order, oId?._id));
    }
    setSugarQuantity('');
    setTeaVolume('Half cup');
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
                <Btn text="Order" icon={<CheckIcon />} onClick={SubmitForm} variant="contained" />
              </Grid>{' '}
              <ToastContainer
                position="top-right"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </Grid>
          </Box>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}

export default TeaData;
