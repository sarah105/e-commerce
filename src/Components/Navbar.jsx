import React,{useContext} from "react";
import { FaCreativeCommonsBy } from "react-icons/fa";
import {FiShoppingCart} from "react-icons/fi";
import {Link} from "react-router-dom";
import "./../Css/navbar.css";
import {CartContext} from "./../Context/CartContext"

const Navbar =()=>{
  const context = useContext(CartContext)
  const counter = context.cart.length;
  
return(
  <div className="parent">

    <div className="child-1">
      <h1>TechShed</h1>
      <button> Get 15% off your first purchase </button>
    </div>


  <div className="child-2">
      <ul>
    <Link to="/" className="nav-link"> <li>Home</li></Link>
    <Link to="/products" className="nav-link"><li>Products</li></Link>
    <Link to="/cart" className="nav-link"><li>Cards</li></Link>
    <Link to="/" className="nav-link">  <li>Contact</li></Link>
      </ul>

      <button className="btn-1"> <FaCreativeCommonsBy size="2em" className="icon-1" /><Link to ="/login" className="nav-link">log in</Link></button>
      <Link to ="/cart" className="nav-link count-cart "><FiShoppingCart size="2em"/><span className="count-span">{counter}</span></Link>
  </div>
</div>
);
}
export default Navbar;
