import React from 'react';

export const CartContext = React.createContext();

export function CartProvider(props){
    const [cart,setCart] = React.useState([]);

    function addToCart(item,quantity){
        setCart([...cart,{item,quantity}]);
        console.log(cart)
        // localStorage.setItem("cart",cart)
    }

    function deleteFromCart(index){
        let tem = [...cart]
        tem.splice(index, 1)
        setCart(tem)
    }

    function clearCart(){
        setCart([])
    }
    
    // React.useEffect(()=>{
    //     let cartLoc = localStorage.getItem("cart");
    //     if(cartLoc){
    //         setCart(cartLoc)
    //     }
    // },[])

    // React.useEffect(()=>{
    //     console.log(cart)
    //      localStorage.setItem("cart",cart)
    // },[cart])

    return (
        <CartContext.Provider value={{cart,setCart,addToCart,deleteFromCart}}>
            {props.children}
        </CartContext.Provider>
    );
}
