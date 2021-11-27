import { Avatar, Grid, Paper, Rating, Typography } from '@mui/material';
import React from 'react';

const Testimonial = (props, user) => {
    // console.log(props.review)
    // console.log(user)
    const { name, driscription, value } = props.review;

    return (

        <Grid item xs={12} sm={4} md={4} sx={{ textAlign: 'center', p: 1 }}  >
            <Grid sx={{
                bgcolor: 'primary.main',
                color: 'white',
                py: 10,
                m: 1,
                borderRadius: 1,
                textAlign: 'center',
                fontSize: '1rem',
                fontWeight: '700',

            }}>
                <Paper elevation={0} />
                <Typography variant="h4" component="div" gutterBottom>{driscription}</Typography>
                <Typography sx={{ fontSize: 10 }} component="legend">{name}</Typography>
                <Rating value={value} readOnly />

                <Paper />
            </Grid>
        </Grid>

    );
};

export default Testimonial;