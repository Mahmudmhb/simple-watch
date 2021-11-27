import { AppBar, Button, IconButton, Toolbar, Typography, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        timezone
                    </Typography>
                    <Link style={{ color: 'white' }} to="/home">
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link style={{ color: 'white' }} to="/products">
                        <Button color="inherit">Explore</Button>
                    </Link>

                    {
                        user?.email ?
                            <Box>

                                <NavLink to="/deshboard">
                                    <Button style={{ color: 'white' }} color="inherit">Deshboard</Button>
                                </NavLink>

                                <NavLink to="/login">
                                    <Button style={{ color: 'white' }} onClick={logOut} color="inherit">Logout</Button>
                                </NavLink>
                            </Box>
                            :
                            <Link style={{ color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </Link>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;