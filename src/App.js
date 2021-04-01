import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
import Login from  "./Pages/Login";

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
  <BrowserRouter>
    <div>
      <Navbar/>
      </div>
      <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/cart" exact component={Cart}/>
       <Route path="/login" exact component={Login}/>
       <Route path="/products" exact component={Products}/>
       </Switch>

  </BrowserRouter>
  );
}

export default App;
