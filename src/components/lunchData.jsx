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
import { lunchOrderItem } from '../redux/action/actions';
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
    if (order?.items && order?.rotti && order?.amountPaid) {
      setItems(order?.items);
      setRotti(order?.rotti);
      setAmountPaid(order?.amountPaid);
    }
  }, [order]);

  const SubmitForm = async (e) => {
    e.preventDefault();
    // let date = new Date().toLocaleString('en-US', {
    //   timeZone: 'Asia/Karachi',
    //   hourCycle: 'h24'
    // });
    // date = date + 'Z';
    let date = '2022-08-21T09:00:00';
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
      setItems('');
      setRotti('');
      setAmountPaid('');
      setTimeout(() => {
        location.reload();
      }, 2000);
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
    const orders = await updateOrder(newOrder);
    if (orders?.status === 200) {
      toast(orders?.data?.metadata?.message);
      setTimeout(() => {
        location.reload();
      }, 2000);
    } else {
      toast(orders?.response?.data?.metadata?.message);
    }
    dispatch(lunchOrderItem(orders));
  };

  const handleDeleteOrder = async (e) => {
    e.preventDefault();
    const lunchOrder = await deleteOrder(oId?._id);
    if (lunchOrder?.status === 200) {
      toast(lunchOrder?.data?.metadata?.message);
      setItems('');
      setRotti('');
      setAmountPaid('');
      setTimeout(() => {
        location.reload();
      }, 2000);
    } else {
      toast(lunchOrder?.response?.data?.metadata?.message);
    }
    dispatch(lunchOrderItem(lunchOrder));
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
              label="User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Typography variant="p1">Item Description:</Typography>
            <TextField
              required
              id="outlined-required"
              label="Item Description"
              value={items}
              onChange={(e) => setItems(e.target.value)}
            />
            <Typography variant="p1">Rotti:</Typography>
            <TextField
              required
              inputProps={{ min: 0 }}
              id="outlined-required"
              label="Rotti"
              type="number"
              value={rotti}
              onChange={(e) => setRotti(e.target.value)}
            />
            <Typography variant="p1">Amount Paid:</Typography>
            <TextField
              required
              inputProps={{ min: 0 }}
              id="outlined-required"
              label="Amount Paid"
              type="number"
              value={amountPaid}
              onChange={(e) => setAmountPaid(e.target.value)}
            />
            {order?.items && order?.rotti && order?.amountPaid && (
              <Grid
                container
                sx={{
                  justifyContent: 'space-around',
                  marginTop: '10px',
                  marginBottom: '0.5rem'
                }}>
                <Grid item xs={12} lg={8}></Grid>
                <Grid item xs={12} md={12} lg={1.8}>
                  <Btn
                    text="Edit"
                    onClick={handleUpdateOrder}
                    icon={<EditIcon />}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={1.8}>
                  <Btn
                    text="Delete"
                    onClick={handleDeleteOrder}
                    icon={<DeleteIcon />}
                    variant="Contained"
                    style={{ backgroundColor: 'red', color: 'white' }}
                  />
                </Grid>
              </Grid>
            )}
            {!order?.items && !order?.rotti && !order?.amountPaid && (
              <Grid
                container
                sx={{
                  justifyContent: 'space-around',
                  marginTop: '10px',
                  marginBottom: '0.5rem'
                }}>
                <Grid item xs={12} lg={10}></Grid>
                <Grid item xs={12} md={12} lg={2}>
                  <Btn
                    text="Order"
                    icon={<CheckIcon />}
                    onClick={SubmitForm}
                    variant="contained"
                    disabled={!userName || !items || !rotti || !amountPaid}
                  />
                </Grid>{' '}
              </Grid>
            )}
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
          </Box>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}

export default LunchData;
