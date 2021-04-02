import React, {useState} from 'react';
import "./../Css/card.css";
import {Link} from "react-router-dom";
import {FaCartPlus} from "react-icons/fa";
import {CartContext} from "./../Context/CartContext"

const Card = (props) => {
    const context = React.useContext(CartContext)
    const img = props.product.photo;
    const title = props.product.name;
    const price = props.product.price;
    const [counter,setCounter] = useState(0);

    const increment = ()=>{
        setCounter(counter+1)
    }
    const decrement = ()=>{
        if(counter > 0)
            setCounter(counter-1)
    }

    const handelClick = ()=>{
        if(counter > 0)
            context.addToCart(props.product,counter)
    }

    return ( 
        <div className="card">
            <Link className="div-img" to={`/products/${props.product.id}`}>
                <img src={img} className="card-img"/>
            </Link>
            
            <div className="card-body">
                <Link className="card-title" to={`/products/${props.product.id}`}>{title}</Link>
                <p className="card-subtitle">price: {price}$</p>
                <div className="card-add">
                    {/* <input type="number" className="product-quantity" title="quantity do you want" min="1" placeholder="0"/> */}
                    <div className="counter-div">
                        <button className="counter-btn" onClick={decrement}>-</button>
                        <p className="counter-value">{counter}</p>
                        <button className="counter-btn" onClick={increment}>+</button>
                    </div>
                    <i className = "card-icon" onClick={handelClick}><FaCartPlus /></i>
                </div>
            </div>
        </div>
    );
}
 
export default Card;