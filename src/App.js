import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";
import Products from "./Pages/ProductsPage";
import Login from  "./Components/LoginForm";
import Product from "./Pages/Product";
import SignUp from "./Components/SignUp";
import {CartProvider} from "./Context/CartContext"

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <CartProvider>
  <BrowserRouter>
  {/* <SignUp /> */}
  
    <div className="app">
      <Navbar/>
    </div>
    {/* <SignUp /> */}
      <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/cart" exact component={Cart}/>
       <Route path="/login" exact component={Login}/>
       <Route path="/products/:id" component={Product} />
       <Route path="/products" exact component={Products}/>
       <Route path="/signup" exact component={SignUp} />
       </Switch>
    
  </BrowserRouter></CartProvider>
  );
}

export default App;
