import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
const Ragister = () => {

    const [loginData, setLoginData] = useState({});

    const history = useHistory();

    const { user, registerUser, isLoading, authError, signInWithGoogle } = useAuth();

    const handleOnChange = e => {
        const filed = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[filed] = value;
        // console.log(newLoginData)
        setLoginData(newLoginData);
    }
    const handleRegisterSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not Match');
            e.preventDefault();
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)

        e.preventDefault();
        console.log(registerUser)
    }
    const handleGoogleLoign = () => {
        signInWithGoogle()
    }
    return (
        <Box>
            <Navigation />
            <Container>
                <Grid sx={{ pt: 5, textAlign: 'center' }} container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h4'>Register Form</Typography>

                        {!isLoading && <form sx={{ mt: 5 }} onSubmit={handleRegisterSubmit}>
                            {user?.email && <Alert severity="success">

                                This is a successfully Registerd  — <strong> Enjoy!!</strong>
                            </Alert>}
                            {authError && <Alert severity="error">

                                This is an error — <strong>You Already Registered. PLease Login</strong>
                            </Alert>}
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                label="Your Name"
                                type="text"
                                name="name"
                                onBlur={handleOnChange}
                                variant="standard" />
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
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                label="Rtype Your Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnChange}
                                variant="standard" />
                            <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit">Register Now</Button>
                        </form>}
                        {isLoading && <CircularProgress />}

                        <Link to="/login">
                            <Button variant="text">Allready Registered? Please Login</Button>
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

export default Ragister;