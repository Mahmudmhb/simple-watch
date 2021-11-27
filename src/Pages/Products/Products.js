import { Alert, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [AddSuccess, setAddSuccess] = useState(false);
    const [cart, setCart] = useState([]);

    // const [addSuccess, setAddSuccess] = useState(false);
    useEffect(() => {
        fetch("https://young-river-12633.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddTOCart = product => {
        // console.log('clickd')
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return (
        <Grid sx={{ textAlign: 'center' }}>
            <Navigation />
            <Container>
                <Typography variant="h2" sx={{ color: 'success', py: 3 }} component="div" gutterBottom>ALL EXPLORE PRODUCTS</Typography>

                <Box>
                    {AddSuccess && <Alert severity="success">Add To Cart successfully!</Alert>}
                    <Grid container spacing={2} >
                        {
                            products.map(product => <Product
                                key={product._id}
                                product={product}
                                handleAddTOCart={handleAddTOCart}
                                setAddSuccess={setAddSuccess}
                            ></Product>)

                        }
                    </Grid>
                </Box>


            </Container>
            <Footer />

        </Grid >
    );
};

export default Products;