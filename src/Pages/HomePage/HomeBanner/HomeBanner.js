import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const HomeBanner = () => {
    return (
        <Grid sx={{ backgroundColor: '#dedeea', py: 10 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid sx={{ display: 'flex', alignItems: 'center', }} item xs={12} md={6}>
                        <Box >
                            <Typography variant="h2" sx={{ color: '#3498db', fontWeight: "500" }} component="div" gutterBottom>
                                New Watch Collection 2021
                            </Typography>
                            <Typography variant="body" sx={{ mb: 8 }} component="div" gutterBottom>
                                The Esquire editors pick their favourite new and upcoming watches from big Swiss brands and under-the-radar newbies
                            </Typography>
                            <Button variant="contained">luran more</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src="https://timezonebd.com/theme/homeux/brands/ca_home_banner.jpg" width="100%" alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Grid>


    );
};

export default HomeBanner;