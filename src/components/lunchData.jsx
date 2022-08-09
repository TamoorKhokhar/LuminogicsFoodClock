import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@emotion/react";
import theme from "../theme/theme";
import { useSelector } from "react-redux";
import Buttons from "./buttonContainer";
function LunchData() {
  const user = useSelector((state) => {
    return state?.signIn?.signIn[0]?.payload?.data?.user?.userName;
  });
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          minHeight: "max-content"
        }}>
        <Grid
          item
          md={12}
          xs={12}
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
            <Typography variant="h4">Lunch Details</Typography>
            <Typography variant="p1">User Name:</Typography>
            <TextField required id="outlined-required" label="Required" value={user} />
            <Typography variant="p1">Item Description:</Typography>
            <TextField required id="outlined-required" label="Required" />
            <Typography variant="p1">Rotti:</Typography>
            <TextField required id="outlined-required" label="Required" type="number" />
            <Typography variant="p1">Amount Paid:</Typography>
            <TextField required id="outlined-required" label="Required" type="number" />
            <Buttons />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default LunchData;
