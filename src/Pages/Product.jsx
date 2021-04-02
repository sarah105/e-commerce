import React,{useState,useEffect} from 'react';
import "./../Css/product.css";
import axios from 'axios';
import {CartContext} from "../Context/CartContext"

const Product = (props) => {
    const context = React.useContext(CartContext);
    const [product,setProduct] = useState({});
    const [quantity,setQuantity] = useState(0);

    const getProducts = async()=>{
        let data = [];
        await axios.get("https://ecommerce-response.herokuapp.com/")
        .then(response => {data = response.data})
        .catch(error => console.log(error))
        return data;
    }

    const getItem = (id)=>{
        const item = getProducts().then(data=>{
            let x = {}
            data.forEach(item => {
                if(item.id === id){
                    x = item;
                }
            })
            return x;
        })
        return item;
    }
    const handelClick = ()=>{
        // const quantity = document.querySelector("#quantity").value
        if(quantity > 0)
            context.addToCart(product,quantity)
    }
    
    useEffect(()=>{
        const id = props.match.params.id;
        getItem(id).then(item=>{setProduct(item);})
    },[])

    const handleChange=(e)=>{
        setQuantity(e.target.value)
        
    }

    return (
        <div className="container-cart">
           { product !== {} &&  
           <div className="product-container">
                <div className="product-part product-part-img">
                    <img src={product.photo} className="product-img"/>
                </div>
                <div className="product-part product-body">
                    <div>
                    <h3>{product.name}</h3>
                    <p className="text-small">added on {product.added}</p>
                    <p className="text-small margin-bottom">by: {product.seller}</p>
                    </div>
                    
                    <div>
                    <p><b>Quantity:</b> {product.quantity}</p>
                    <p className="margin-bottom"><b>sold:</b> {product.sold}</p>
                    </div>
                    <div>
                    <p>There are <b>{product.quantity - product.sold}</b> from this product</p>
                    <p >price: <b>{product.price}$</b></p>
                    </div>

                    <div>
                    <input type="number" id="quantity" value={quantity} onChange={handleChange} className="product-quantity margin-bottom" title="quantity do you want" min="1" placeholder="0"/><br />
                    {/* <button className="product-btn"></button> */}
                    <div className="check-btn form-btn">
                      <button style={{width:"100%"}} onClick={handelClick}>Add to cart</button>
                    </div>
                    </div>
                </div>

            </div>}
        </div> 
        
    );
}
 
export default Product;