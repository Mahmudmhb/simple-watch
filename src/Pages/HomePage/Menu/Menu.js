import React from 'react';
import { Button, Container, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
const Menu = () => {
    return (
        <Grid sx={{ py: 20 }} >
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{ backgroundColor: '#111111', bac: 'left' }} md={6}>
                        <Box >
                            <img sx={{ mt: -20 }} src="https://timezonebd.com/theme/homeux/brands/es_home_banner.jpg" width="100%" alt="" />
                        </Box>
                    </Grid>
                    <Grid sx={{ display: 'flex', alignItems: 'center', }} item xs={12} md={6}>
                        <Box >
                            <Typography variant="body" sx={{ mb: 8, color: '#3498db' }} component="div" >
                                OUR STORY
                                <Divider />
                            </Typography>
                            <Typography variant="h2" sx={{ color: '#3498db', pb: 5, fontWeight: "500" }} component="div" >
                                The Best Watches for Men 2021
                            </Typography>
                            <Typography variant="body" sx={{ mb: 8 }} component="div" >
                                Well-designed and well-priced, there’s a reason why Longines has become one of the biggest watch brands in the world. Its Spirit collection was launched in 2020
                            </Typography>
                            <Button variant="contained">luran more</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Container>

        </Grid>


    );
};

export default Menu;