import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


const PurchasePage = () => {
    return (
        <div>
            <h2 sx={{ hight: "100vh" }}>Payment method comming soon!!!!!!!!!!!!</h2>
            <Link to="/deshboard/myOrders">
                <Button variant="contained" color="inherit">back</Button>
            </Link>

        </div>
    );
};

export default PurchasePage;