import React, {useState,useEffect} from 'react';
import Card from "./CardProducts";
import "./../Css/products.css";

const Products = (props) => {
    const products= props.products;

    
    return ( 
        <div className="products">
            {
                products.map(product => <Card key={product.id} product={product}/>)
            }
            
            
            {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
            
        </div>
    );
}
 
export default Products;