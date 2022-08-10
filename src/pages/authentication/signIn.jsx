import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "../../components/button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import theme from "../../theme/theme";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@emotion/react";
import Link from "@mui/material/Link";
import SignInImage from "../../assets/images/SignIn.png";
import { signIn } from "../../utils/services/orderServices";
import { sign_In } from "../../redux/action/actions";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitForm = async (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password
    };
    const userData = await signIn(newUser);
    dispatch(sign_In(userData));
    if (userData?.metadata?.status === "SUCCESS") {
      navigate("/homePage");
      localStorage.setItem("token", userData.payload.data.token);
    } else {
      toast(`User ${userData?.statusText}`);
    }
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            minHeight: "100vh",
            backgroundColor: "#96BEF0"
          }}>
          <Grid
            item
            md={6}
            xs={10}
            sx={{
              display: "flex",
              justifyContent: "center",
              boxShadow: "2px 2px 5px 5px #243136",
              borderRadius: "10px",
              height: "max-content",
              marginTop: "8rem",
              backgroundColor: "#fafafa"
            }}>
            <Box
              component="form"
              onSubmit={submitForm}
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
                    onClick={submitForm}
                  />
                  <ToastContainer
                    position="top-right"
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                  <Grid container>
                    <Grid item xs>
                      <Link href="/adminLogin" variant="body2">
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
