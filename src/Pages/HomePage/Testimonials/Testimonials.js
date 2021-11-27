import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const { user } = useAuth();
    const [reviews, setReviews] = React.useState([]);

    React.useEffect(() => {
        const url = 'https://young-river-12633.herokuapp.com/reviews';
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
        // console.log(data)
    }, [])
    return (
        <Container sx={{ textAlign: 'center' }}>

            <Typography variant="h3" sx={{ pb: 5 }} component="div" gutterBottom>
                TESTIMONIAL
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(review => <Testimonial
                            review={review}
                            user={user}
                        >


                        </Testimonial>)

                    }
                </Grid>
            </Box>

        </Container>
    );
};

export default Testimonials;