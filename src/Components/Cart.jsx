import React,{useState} from "react";
import {CartContext} from "./../Context/CartContext";


const Cart=(props)=>{
const context = React.useContext(CartContext);
const name = props.item.item.name;
const price = props.item.item.price;
const photo = props.item.item.photo;
const quantity = props.item.quantity
const total = price * quantity;

const handelClick=()=>{
    context.deleteFromCart(props.index)
}

return(


<div className="cart">
    <div className="img-card-div">
        <img src={photo} width="100%" height="100%"/>
    </div>
    <div className="text-cart-div">
        <p><b>{name}</b></p>
        <p>&euro;{price}</p>
        <p>{quantity} items</p>
    </div>
    <div className="text-cart-div">
        <p><b>total</b></p>
        <p>&euro;{total}</p>
        
    </div>
    
    <div className="check-btn" style={{width:"20%"}}>
        <button onClick={handelClick}>Delete</button>
    </div>
</div>


);
}
export default Cart;
