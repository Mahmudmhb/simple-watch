import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Box sx={{ textAlign: "center", height: "100vh" }}>
            <Typography variant="h1" component="div" gutterBottom>
                NOT FOUND PAGE
            </Typography>
            <Link to="/home">
                <Button variant="contained" color="inherit">back</Button>
            </Link>
        </Box>
    );
};

export default NotFound;