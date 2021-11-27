import { Container, Grid, ListItemText, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import React from 'react';

const Footer = () => {
    return (
        <Grid sx={{ backgroundColor: 'black', }} >
            <Container >
                <Grid sx={{ display: 'flex', pt: 5, justifyContent: 'space-between' }}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" sx={{ color: '#ffffff' }} gutterBottom component="div">
                            Our Information
                            <Typography>

                                <ListItemText sx={{ color: "#d1d1d1" }}>
                                    Retrun Policy
                                </ListItemText>
                                <ListItemText sx={{ color: "#d1d1d1" }}>
                                    Privacy Policy
                                </ListItemText>
                                <ListItemText sx={{ color: "#d1d1d1" }}>
                                    Trams and Conditon
                                </ListItemText>
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" sx={{ color: '#ffffff' }} gutterBottom component="div">
                            About us
                            <ListItemText sx={{ color: "#d1d1d1" }}>
                                Support Center
                            </ListItemText>
                            <ListItemText sx={{ color: "#d1d1d1" }}>
                                Customar Support
                            </ListItemText>
                            <ListItemText sx={{ color: "#d1d1d1" }}>
                                About Us
                            </ListItemText>
                            <ListItemText sx={{ color: "#d1d1d1" }}>
                                Copy Right
                            </ListItemText>
                            <ListItemText sx={{ color: "#d1d1d1" }}>
                                Populur Campain
                            </ListItemText>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" sx={{ color: '#ffffff' }} gutterBottom component="div">
                            Support
                            <ListItemText sx={{ color: "#d1d1d1" }}>
                                Product Help
                            </ListItemText>
                            <ListItemText sx={{ color: "#d2d2d2" }}>
                                Service & Warantiy
                            </ListItemText>
                            <ListItemText sx={{ color: "#d4d4d4" }}>
                                Castomar Care
                            </ListItemText>
                        </Typography>
                    </Grid>

                </Grid>
                <Divider />

                <Grid sx={{ textAlign: 'center' }}>

                    <Typography sx={{ color: "#d2d2d2", pb: 2 }}>

                        CopyRight 2021@All Right Reserved!!
                    </Typography>
                </Grid>
            </Container >
        </Grid >
    );
};

export default Footer;