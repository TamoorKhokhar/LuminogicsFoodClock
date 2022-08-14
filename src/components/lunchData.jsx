import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@emotion/react';
import theme from '../theme/theme';
import { useState, useEffect } from 'react';
import { orderData } from '../utils/services/tableDataServices';
import Btn from './button';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteOrder } from '../utils/services/tableDataServices';
import { updateOrder } from '../utils/services/tableDataServices';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { lunchOrderItem, lunchOrderDelete } from '../redux/action/actions';
import { ToastContainer, toast } from 'react-toastify';
function LunchData({ type, order }) {
  const [items, setItems] = useState('');
  const [rotti, setRotti] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const user = useSelector((state) => state?.signIn?.signIn) || '';
  const [userName, setUserName] = useState(user?.userName);
  const dispatch = useDispatch();
  const oId = useSelector((state) => state?.lunchOrder[0]);
  useEffect(() => {
    if (order) {
      setItems(order?.items);
      setRotti(order?.rotti);
      setAmountPaid(order?.amountPaid);
    }
  }, [order]);

  const SubmitForm = async (e) => {
    e.preventDefault();
    let date = new Date().toLocaleString('en-US', {
      hourCycle: 'h24'
    });
    date = date + 'Z';
    // let date = '2022-08-13T09:00:00'; this line is for testing
    const newOrder = {
      email: user?.email,
      employeeName: user?.userName,
      extras: items,
      rotiQuantity: rotti,
      amount: amountPaid,
      orderDate: date,
      orderType: type
    };
    const result = await orderData(newOrder);
    if (result?.status === 200) {
      toast('Order placed Successfully!');
    } else {
      toast(result?.response?.data?.metadata?.message);
    }
  };
  const handleUpdateOrder = async (e) => {
    e.preventDefault();
    const newOrder = {
      _id: oId?._id,
      extras: items,
      rotiQuantity: rotti,
      amount: amountPaid
    };
    const order = await updateOrder(newOrder);
    if (order?.status === 200) {
      toast('Order updated!');
    } else {
      toast(order?.response?.data?.metadata?.message);
    }
    dispatch(lunchOrderItem(order));
  };

  const handleDeleteOrder = async (e) => {
    e.preventDefault();
    const order = await deleteOrder(oId?._id);
    if (order?.status === 200) {
      toast('Order Deleted Successfully!');
    } else {
      toast(order?.response?.data?.metadata?.message);
    }
    dispatch(lunchOrderDelete(order));
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
            component="form"
            onSubmit={SubmitForm}
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
            <Grid
              container
              sx={{ justifyContent: 'space-around', marginTop: '25px', marginBottom: '0.5rem' }}>
              <Grid item xs={12} lg={5}></Grid>
              <Grid item xs={12} md={3} lg={2}>
                <Btn
                  text="Delete"
                  icon={<DeleteIcon />}
                  variant="Contained"
                  onClick={handleDeleteOrder}
                  style={{ backgroundColor: 'red', color: 'white' }}
                />
              </Grid>
              <Grid item xs={12} md={3} lg={2}>
                <Btn
                  text="Edit"
                  icon={<EditIcon />}
                  variant="outlined"
                  onClick={handleUpdateOrder}
                />
              </Grid>
              <Grid item xs={12} md={3} lg={2}>
                <Btn
                  text="Order"
                  onClick={SubmitForm}
                  icon={<CheckIcon />}
                  variant="contained"
                  disabled={userName === '' || items === '' || rotti === '' || amountPaid === ''}
                />
              </Grid>
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

export default LunchData;
