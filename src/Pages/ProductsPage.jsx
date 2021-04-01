import React, {useEffect,useState} from 'react';
import "./../Css/products.css";
import Filter from "../Components/Filter";
import Products from "../Components/Products";
import axios from "axios";

const ProductsPage = (props) => {
    const [products,setProducts] = useState([]);
    const [kind,setKind] = useState("all");
    const getProducts = async()=>{
        // console.log(props.match.params)
        let data = [];
        await axios.get("https://ecommerce-response.herokuapp.com/")
        .then(response => {data = response.data})
        .catch(error => console.log(error))
        return data;
    }
    useEffect(()=>{
      getProducts().then(data => setProducts(data))
    },[]);

    useEffect(()=>{
        if(kind === "all"){
            getProducts().then(data => setProducts(data))
        }else{
            getProducts().then(data => {
                let res = [];
                data.forEach(item=>{
                    if(kind === "mobiles" && item.category === "Mobile"){
                        res.push(item)
                    }else if (kind === "laptops" && item.category === "Laptop"){
                        res.push(item)
                    }else if (kind === "headphones" && item.category === "Headphones"){
                        res.push(item)
                    }
                })
                setProducts(res)
            })
        }
        
      },[kind]);
    
      const setType=(type)=>{
        setKind(type)
    }
    
    return ( 
        <div className="page">
            <Filter kind={setType}/>
            <Products products={products} />
        </div>
     );
}
 
export default ProductsPage;