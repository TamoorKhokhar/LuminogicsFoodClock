import React from "react";
import { Link } from "react-router-dom";
import theme from "../theme/theme";
import { ThemeProvider } from "@emotion/react";
import { Grid, Typography, Box, Button } from "@mui/material";
import OfficeBoyImage from "../assets/images/OfficeBoy.png";
import Header from "../components/header";
function LandingPage() {
  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            height: "max-content",
            marginTop: "2rem"
          }}>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              padding: `1.5rem`
            }}>
            <Typography variant="h1"> LUMINOGICS FOOD CLOCK</Typography>
            <Typography variant="subtitle1">
              ““Food is everything we are. It’s an extension of nationalist feeling, ethnic feeling,
              your personal history, your province, your region, your tribe. It’s inseparable from
              those from the get-go.””
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginBottom: "0.5rem",
                marginTop: "0.5rem",
                borderRadius: "2rem",
                background: "#34474E"
              }}>
              <Link
                to={!localStorage.getItem("email") ? "/signIn" : "/adminDashboard"}
                style={{ color: "#FFFFFF", textDecorationLine: "none" }}>
                Get Started
              </Link>
            </Button>
          </Grid>

          <Grid
            item
            md={6}
            xs={12}
            sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
            <Box
              sx={{
                width: "100%",
                backgroundColor: "white",
                overflow: "hidden",
                borderRadius: "2rem"
              }}>
              <img
                src={OfficeBoyImage}
                alt="image2"
                style={{ width: "100%", objectFit: "contain" }}
              />
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default LandingPage;
