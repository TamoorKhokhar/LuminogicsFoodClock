import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '../../components/button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import theme from '../../theme/theme';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@emotion/react';
import Link from '@mui/material/Link';
import SignInImage from '../../assets/images/SignIn.png';
import { signIn } from '../../utils/services/tableDataServices';
import { sign_In } from '../../redux/action/actions';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitForm = async (e) => {
    e.preventDefault();
    setLoader(true);
    const newUser = {
      email: email,
      password: password
    };
    const userData = await signIn(newUser);

    const { token = '', user = {} } = userData;
    if (token) {
      dispatch(sign_In(user));
      localStorage.setItem('token', token);
      navigate('/homePage');
    } else {
      toast(`User Not Found`);
    }
    setEmail('');
    setPassword('');
    setLoader(false);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'max-content',
            marginTop: '2rem'
          }}>
          <Grid
            item
            lg={5}
            xs={10}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: `1.5rem`
            }}>
            <Typography variant="h1">LUMINOGICS FOOD CLOCK</Typography>
            <Typography variant="subtitle1" className="subTitle">
              <b>Welcome to Luminogics Food Clock!! </b>We are offering one of the easiest way to
              place your everyday orders by sitting on your desk.
            </Typography>
          </Grid>
          <Grid
            item
            lg={5}
            xs={10}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '2px 2px 5px 5px #243136',
              borderRadius: '10px',
              height: 'max-content',
              marginTop: '2rem',
              backgroundColor: '#fafafa'
            }}>
            <Box
              component="form"
              onSubmit={submitForm}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                marginTop: '1rem',
                width: '100%',
                borderRadius: '5px',
                height: 'max-content'
              }}>
              <Grid item>
                <img sx={{ objectFit: 'contain' }} src={SignInImage} alt="signinpage" />
              </Grid>
              <Grid
                item
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '90%'
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
                    disabled={email === '' || password === ''}
                    onClick={submitForm}
                    loader={loader}
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
