import React from "react";
import Btn from "./button";
// import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
import { Grid } from "@mui/material";
function Buttons() {
  return (
    <Grid
      container
      sx={{ justifyContent: "space-around", marginTop: "25px", marginBottom: "0.5rem" }}>
      <Grid item xs={12} lg={5}></Grid>
      <Grid item xs={12} md={3} lg={2}>
        <Btn
          text="Delete"
          icon={<DeleteIcon />}
          variant="Contained"
          style={{ backgroundColor: "red", color: "white" }}
        />
      </Grid>
      {/* <Grid item xs={12} md={3} lg={2}>
        <Btn text="Edit" icon={<EditIcon />} variant="outlined" />
      </Grid>
      <Grid item xs={12} md={3} lg={2}>
        <Btn text="Order" icon={<CheckIcon />} variant="contained" />
      </Grid> */}
    </Grid>
  );
}

export default Buttons;
