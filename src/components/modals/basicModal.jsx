import * as React from 'react';
import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import MenuCard from '../menuCard';

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

export default function BasicModal({ teaData, lunchData, title, src, image, button }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <MenuCard handleOpen={handleOpen} title={title} src={src} button={button} />

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
