import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import AddToCart from './AddToCart/AddToCart';
import AddProducts from '../Products/AddProducts/AddProducts'
import {

    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddReviews from '../Products/AddReviews/AddReviews';
import useAuth from '../../Hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import PurchasePage from './PurchascPage/PurchasePage';

const drawerWidth = 200;

function Deshboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    const { user, admin, logOut } = useAuth();
    // console.log(admin)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Box sx={{ borderRadius: '50%' }}>
                <img width="50px" src={user.photoURL} alt="" />
            </Box>
            <Typography variant="body1" color="text.secondary">

                {user.displayName}
            </Typography>

            {/* <Toolbar /> */}
            <Box sx={{ py: 10, pb: 20 }}>
                <Link to='/home'><Button color="inherit">Home</Button></Link><br />

                {/* <Link to={`${url}`}><Button color="inherit">Deshboard</Button></Link> */}
                <Box>
                    <Link to={`${url}/myOrders`}><Button color="inherit">My Orders</Button></Link>
                </Box>
                <Box>
                    <Link to={`${url}/addReviews`}><Button color="inherit">Add Review</Button></Link>
                </Box>
                <Box>
                    <Link to={`${url}/purchasePage`}><Button color="inherit">Purchase Page</Button></Link>
                </Box>
                <Box>
                    {/* admin &&  */}
                    {admin && <Box>
                        <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                        <Link to={`${url}/addProduct`}><Button color="inherit">Add Product</Button></Link>
                    </Box>}
                </Box>
            </Box>





            <Typography variant="body1" color="text.secondary">
                {user.displayName}
            </Typography>
            <NavLink to="/login">
                <Button onClick={logOut} color="inherit">Logout</Button>
            </NavLink>



        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        timeZone
                    </Typography>

                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}

                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={`${path}/myOrders`}>
                        <AddToCart />

                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProducts />
                    </AdminRoute>
                    <Route path={`${path}/addReviews`}>
                        <AddReviews />
                    </Route>
                    <Route path={`${path}/purchasePage`}>
                        <PurchasePage />
                    </Route>
                </Switch>


            </Box>
        </Box>
    );
}

Deshboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Deshboard;
