import { Button, CardMedia, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const HomeProduct = (props) => {
    const { name, rating, picture, company, balance } = props.product;


    const onSubmitProduct = e => {
        const handleAddToCart = {
            ...props.product,
            name,
            rating,
            picture,
            company,
            balance
        }
        console.log(handleAddToCart)

        fetch("https://young-river-12633.herokuapp.com/handleAddToCarts", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(handleAddToCart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    // setAddSuccess(true);

                }
            })
        e.preventDefault()


    }

    return (


        <Grid>
            <Box item xs={12} md={4} sx={{ textAlign: 'center', p: 1 }} >


                <Grid sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    p: 1,
                    width: '350px',
                    height: '500px',
                    borderRadius: 1,
                    textAlign: 'left',
                    fontSize: '1rem',
                    fontWeight: '700'
                }}>

                    <CardMedia
                        component="img"
                        height="200"
                        image={picture}
                        alt="green iguana"
                    />
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        py: 5,
                        m: 1,
                        bgcolor: 'background.paper',
                    }}>
                        <Box><Typography variant="h4" component="div" gutterBottom>{company}</Typography></Box>
                        <Box><Typography sx={{ fontSize: 15 }} component="legend">{balance}</Typography></Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                    }}>
                        <Typography sx={{ fontSize: 15 }} component="legend">{name}</Typography>
                        <Rating name="disabled" value={rating} readOnly />
                    </Box>

                    <Box sx={{ textAlign: "center" }}>
                        <Link > <Button onClick={onSubmitProduct} variant="contained">Add To Cart</Button></Link>
                    </Box>

                </Grid>
            </Box>
        </Grid >


    );
};

export default HomeProduct;