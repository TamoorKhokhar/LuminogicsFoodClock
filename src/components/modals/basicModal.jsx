import * as React from 'react';
import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import MenuCard from '../menuCard';
import { user_Order, all_Orders } from '../../redux/action/actions';
import { getUserOrder, getAllOrders } from '../../utils/services/tableDataServices';
import { useDispatch, useSelector } from 'react-redux/es/exports';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 0
};

export default function BasicModal({ teaData, lunchData, title, src, image, button, type }) {
  const user = useSelector((state) => state?.signIn?.signIn) || '';
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
    const callingApi = () => {
      getUserOrder(user.email, type)
        .then((res) => {
          dispatch(user_Order(res?.data?.payload?.data));
        })
        .catch((err) => {
          console.log(err);
        });
      useDispatch;
    };
    callingApi();
    const officeOrders = () => {
      getAllOrders(type)
        .then((res) => {
          dispatch(all_Orders(res?.data?.payload?.data));
        })
        .catch((err) => {
          console.log(err);
        });
      useDispatch;
    };
    officeOrders();
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <MenuCard handleOpen={handleOpen} title={title} src={src} button={button} type={type} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          sx={{
            ...style,
            width: '70vw',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}>
          {teaData}
          {lunchData}
        </Box>
      </Modal>
    </>
  );
}
