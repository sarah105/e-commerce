import React from 'react';
import { useEffect,useState } from 'react';
import {CartContext} from "./../Context/CartContext"

const OrederSummary = () => {
    const context = React.useContext(CartContext);
    let total = context.cart.reduce((total,item) => total + parseInt(item.quantity) * item.item.price, 0);

    return ( 
        <div className="Order-Summary">
            <h2>Order Summary</h2>
            <div className="total-price">
            <div className="subtotal"><p className="p-s-1">Subtotal</p><p className="p-s-2">&euro;{total}</p></div>
            <div className="subtotal"><p className="p-s-1">shipping</p><p className="p-s-2">FREE</p></div>
            </div>
            <div className="check-out">
            <div className="total"><p className="p-s-1">Total</p><p className="p-s-2">&euro;{total}</p></div>
            <div className="check-btn"><button>check out</button></div>

            </div>
        </div>
     );
}
 
export default OrederSummary;