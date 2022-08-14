import React from 'react';
import Button from '@mui/material/Button';
import { ClipLoader } from 'react-spinners';

export default function Buttont({ disabled, style, variant, icon, onClick, text, loader }) {
  return (
    <Button
      disabled={disabled}
      style={style}
      sx={{ marginTop: '20px', width: '100%' }}
      variant={variant}
      endIcon={icon}
      onClick={onClick}>
      {loader ? <ClipLoader color={'#fafafa'} size={15} /> : text}
    </Button>
  );
}
