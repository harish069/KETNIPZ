import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import ShopAll from './ShopAll';
import Apparel from './Apparel';
import Accessories from './Accessories';
import Cart from "./Cart";
import SingleProduct from './SingleProduct';
import Login from './Login';
import SignUp from './SignUp';
import CheckOut from './CheckOut';

function Routes() {
    return (
        <div>
           <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/home"><Home/></Route>
            <Route exact path="/shopAll"><ShopAll /></Route>
            <Route exact path="/products/:id"><SingleProduct /></Route>
            <Route exact path="/apparel"><Apparel/></Route>
            <Route exact path="/accessories"><Accessories/></Route>
                <Route exact path="/cart"><Cart /></Route>
                <Route path="/product/cart"><Cart /></Route>
                <Route path="/login"><Login /></Route>
                <Route path="/signup"><SignUp /></Route>
                <Route path ="/checkout"><CheckOut/></Route>
            <Route>404 page not found</Route>
            </Switch>
        </div>
    )
}

export default Routes
