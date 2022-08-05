import React from "react";
import Button from "@mui/material/Button";

export default function Btn({ disabled, style, variant, icon, onClick, text }) {
  return (
    <Button
      disabled={disabled}
      style={style}
      sx={{ marginTop: "20px", width: "100%" }}
      variant={variant}
      endIcon={icon}
      onClick={onClick}>
      {text}
    </Button>
  );
}
