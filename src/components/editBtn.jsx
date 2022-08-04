import * as React from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
export default function EditButton() {
  return (
    <Button sx={{ marginTop: "20px", width: "100%" }} variant="outlined" endIcon={<EditIcon />}>
      Edit
    </Button>
  );
}
