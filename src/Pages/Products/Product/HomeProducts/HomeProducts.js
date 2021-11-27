import { Alert, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import HomeProduct from './HomeProduct';

const HomeProducts = () => {

    const [homeProduct, setHomeProduct] = useState([]);
    const [AddSuccess, setAddSuccess] = useState(false);
    const [cart, setCart] = useState([]);

    // const [addSuccess, setAddSuccess] = useState(false);
    useEffect(() => {
        fetch("https://young-river-12633.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setHomeProduct(data))
    }, [])
    const handleAddTOCart = product => {
        // console.log('clickd')
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return (
        <Grid sx={{ textAlign: 'center' }}>

            <Container>
                <Typography variant="h2" sx={{ color: 'success', py: 3 }} component="div" gutterBottom>ALL EXPLORE PRODUCTS</Typography>

                <Box>
                    {AddSuccess && <Alert severity="success">Add To Cart successfully!</Alert>}
                    <Grid container spacing={2} >
                        {
                            homeProduct.slice(0, 6).map(product => <HomeProduct
                                product={product}
                            ></HomeProduct>)

                        }
                    </Grid>
                </Box>


            </Container>


        </Grid >
    );
};

export default HomeProducts;