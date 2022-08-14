import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
function MenuCard({ title, src, handleOpen, disabled }) {
  return (
    <Grid
      item
      md={4}
      xs={10}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '0.5rem',
        alignItems: 'center',
        position: 'relative'
      }}>
      <Box
        className="imageContainer"
        sx={{
          height: '90%',
          width: '80%',
          overflow: 'hidden',
          borderRadius: '1rem'
        }}>
        <img
          src={src}
          alt="image2"
          style={{
            height: '100%',
            width: '100%',
            transition: 'transform 1s',
            display: 'block',
            cursor: 'pointer',
            overflow: 'hidden'
          }}
          onClick={
            disabled
              ? () => {
                  toast("You Can't Place Order After Time!");
                }
              : handleOpen
          }
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '12%',
            left: '0',
            right: '0',
            width: '90%',
            padding: '4%'
          }}>
          <Typography variant="h3">{title}</Typography>
        </Box>
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
    </Grid>
  );
}

export default MenuCard;
