import './App.css';
import SignUp from "./Components/SignUp";
import ProductsPage from "./Pages/ProductsPage";
import Filter from "./Components/Filter";
import Home from "./Pages/Home";
import Product from "./Pages/Product"
import {BrowserRouter, Switch, Route, NavLink} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <nav>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/products"> Products </NavLink>
        </nav>
        {/* <Filter /> */}
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/products/:id" exact component={Product} />
        <Route path="/products" exact component={ProductsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
