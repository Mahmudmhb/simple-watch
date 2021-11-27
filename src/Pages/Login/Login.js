import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, login, isLoading, authError, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const filed = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[filed] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {

        login(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }



    const handleGoogleLoign = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Box>
            <Navigation />
            <Container>
                <Grid sx={{ pt: 5, textAlign: 'center' }} container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h4'>Login Form</Typography>
                        <form sx={{ mt: 5 }} onSubmit={handleLoginSubmit} >
                            {user?.email && <Alert severity="success">

                                This is a successfully   — <strong> Login!!</strong>
                            </Alert>}
                            {isLoading && <CircularProgress />}
                            {authError && <Alert severity="error">

                                This is an error — <strong>You Did not Registered. PLease Registered</strong>
                            </Alert>}
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                label="Your Email"
                                type="email"
                                name="email"
                                onBlur={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnChange}
                                variant="standard" />
                            <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit">Login</Button>
                        </form>
                        <Link to="/ragister">
                            <Button variant="text">New User? Please Ragister</Button>
                        </Link>
                        <p>-------------------------</p>
                        <Button onClick={handleGoogleLoign} variant="contained">Google Sign In</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src="https://timezonebd.com/theme/homeux/brands/ct_home_banner.jpg" alt="" />
                    </Grid>

                </Grid>
            </Container>

        </Box >
    );
};

export default Login;