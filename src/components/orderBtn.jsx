import React from "react";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
export default function Btn(props) {
  return (
    <Button
      disabled={props.disabled}
      sx={{ marginTop: "20px", width: "100%" }}
      variant="contained"
      endIcon={<CheckIcon />}
      onClick={props.onClick}>
      {props.text}
    </Button>
  );
}
