import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
export default function DeleteButton() {
  return (
    <Button
      sx={{ marginTop: "20px", width: "100%" }}
      variant="contained"
      color="error"
      endIcon={<DeleteIcon />}>
      Delete
    </Button>
  );
}
