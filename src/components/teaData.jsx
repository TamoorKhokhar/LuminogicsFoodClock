import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@emotion/react";
import DropDown from "../components/dropDown";
import theme from "../theme/theme";
import Buttons from "./buttonContainer";
function TeaData() {
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
            <Typography variant="h4">Tea Details</Typography>
            <Typography variant="p1">User Name:</Typography>
            <TextField required id="outlined-required" label="Required" />
            <Typography variant="p1">Sugar Quantatity:</Typography>
            <TextField required id="outlined-required" label="Required" type="number" />
            <Typography variant="p1">Tea Volume:</Typography>
            <DropDown item1="Half Cup" item2="Full Cup" />
            <Buttons />
          </Box>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}

export default TeaData;