import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@emotion/react";
import theme from "../theme/theme";
import DeleteButton from "../components/deleteBtn";
import EditButton from "../components/editBtn";
import Btn from "../components/orderBtn";
function LunchData() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          minHeight: "max-content"
        }}>
        <Box
          component="form"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignitem: "center",
            marginTop: "1rem",
            marginBottom: "1rem",
            width: "100%",
            border: "1px solid black",
            borderRadius: "5px",
            height: "max-content"
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              color: "#132F4C"
            }}>
            <Typography variant="h4">Lunch Details</Typography>
            <Typography variant="p1">User Name:</Typography>
            <TextField required id="outlined-required" label="Required" />

            <Typography variant="p1">Item Description:</Typography>
            <TextField required id="outlined-required" label="Required" />
            <Typography variant="p1">Rotti:</Typography>
            <TextField required id="outlined-required" label="Required" type="number" />
            <Typography variant="p1">Rotti:</Typography>
            <TextField required id="outlined-required" label="Required" type="number" />
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
          </Box>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}

export default LunchData;
