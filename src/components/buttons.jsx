import React from "react";
import DeleteButton from "../components/deleteBtn";
import EditButton from "../components/editBtn";
import Btn from "../components/orderBtn";
import { Grid } from "@mui/material";
function Buttons() {
  return (
    <Grid
      container
      sx={{ justifyContent: "space-around", marginTop: "25px", marginBottom: "0.5rem" }}>
      <Grid item xs={12} lg={5}></Grid>
      <Grid item xs={12} md={3} lg={2}>
        <DeleteButton />
      </Grid>
      <Grid item xs={12} md={3} lg={2}>
        <EditButton />
      </Grid>
      <Grid item xs={12} md={3} lg={2}>
        <Btn text="Order" />
      </Grid>
    </Grid>
  );
}

export default Buttons;
