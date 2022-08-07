import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "../../components/button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import theme from "../../theme/theme";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@emotion/react";
import Header from "../../components/header";
import Link from "@mui/material/Link";
import SignInImage from "../../assets/images/SignIn.png";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function SubmitForm(e) {
    e.preventDefault();
  }
  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            minHeight: "100vh"
          }}>
          <Grid
            item
            md={6}
            xs={10}
            sx={{
              display: "flex",
              justifyContent: "center",
              boxShadow: "5px 5px 10px 10px #ccc",
              borderRadius: "10px",
              height: "max-content",
              marginTop: "4rem"
            }}>
            <Box
              component="form"
              onSubmit={SubmitForm}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "1rem",
                width: "100%",
                borderRadius: "5px",
                height: "max-content"
              }}>
              <Grid item>
                <img sx={{ objectFit: "contain" }} src={SignInImage} alt="signinpage" />
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "90%"
                }}>
                <Typography component="h1" variant="h5">
                  User Sign In
                </Typography>
                <Box noValidate sx={{ mt: 1, mb: 4 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}
                    text="Sign In"
                    disabled={email === "" || password === ""}
                    onClick={SubmitForm}
                  />
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Sign In As Admin
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/signUp" variant="body2">
                        Don&apos;t have an account? Sign Up
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
export default SignIn;
