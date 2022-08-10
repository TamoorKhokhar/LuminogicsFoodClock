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
import { signUp } from "../../utils/services/tableDataServices";
import { useDispatch } from "react-redux";
import { sign_up } from "../../redux/action/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    const data = {
      userName: userName,
      email: email,
      password: password
    };
    const userData = await signUp(data);
    dispatch(sign_up(userData));
    if (userData?.metadata?.status === "SUCCESS") {
      navigate(`/signIn`);
      setUserName(""), setEmail(""), setPassword("");
    } else {
      toast("Error! Please Add Correct Data");
    }
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
            backgroundColor: "#66DD8D"
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
                <img sx={{ objectFit: "contain" }} src={SignInImage} alt="signInpage" />
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "90%"
                }}>
                <Typography component="h1" variant="h5">
                  Sign Up Your Account
                </Typography>
                <Box component="form" onSubmit={submitForm} noValidate sx={{ mt: 1, mb: 4 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="User Name"
                    name="name"
                    autoComplete="Name"
                    autoFocus
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                  />
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
                    text="Sign Up"
                    onClick={submitForm}
                    disabled={userName === "" || email === "" || password === ""}
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
                      <Link href="signIn" variant="body2">
                        Sign In As User
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
export default SignUp;
