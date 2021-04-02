import React,{useContext} from 'react';
import OrderSummary from "./../Components/OrderSummary"
import CartCom from "./../Components/Cart"
import {CartContext} from "./../Context/CartContext"
const Cart = () => {
    const context = useContext(CartContext);
    const items = context.cart;
// console.log(context.cart)
    // React.useEffect(()=>{
    //     setItems(context.cart)
    // } ,[])

    return ( 
        <div className="container">
            <div className="start-div" >
            <h2>My Cart</h2>
            {
                items !== [] &&
                items.map((item,index)=><CartCom key={index} index={index} item={item}/>)
                
            }
            </div>
            <OrderSummary />
        </div>
    );
}
 
export default Cart;