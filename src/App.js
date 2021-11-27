import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import Deshboard from "./Pages/Deshboard/Deshboard";
import PurchasePage from "./Pages/Deshboard/PurchascPage/PurchasePage";
import Home from "./Pages/HomePage/Home/Home";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Ragister from "./Pages/Login/Ragister";
import HomeProducts from "./Pages/Products/Product/HomeProducts/HomeProducts";
import Products from "./Pages/Products/Products";
import NotFound from "./Shared/NotFound/NotFound";


function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/homeProduct">
              <HomeProducts />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/deshboard">
              <Deshboard />
            </PrivateRoute>
            <PrivateRoute exact path="/purchasePage">
              <PurchasePage />
            </PrivateRoute>
            <PrivateRoute exact path="/products">
              < Products />
            </PrivateRoute>
            <Route exact path="/ragister">
              <Ragister />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

        </Router >
      </AuthProvider>
    </div>
  )

}

export default App;
