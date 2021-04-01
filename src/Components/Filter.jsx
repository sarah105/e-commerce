import React from 'react';
import "./../Css/filter.css";

const Filter = (props) => {
    const handleChange = (e) =>{
        console.log(e.target.value)
        props.kind(e.target.value)
    }
    return ( 
        <div className="filter">
            <h2>Categories</h2>
            <select onChange={handleChange}>
                <option value="all">All</option>
                <option value="mobiles">Mobiles</option>
                <option value="laptops">Laptops</option>
                <option value="headphones">Headphones</option>
            </select>            
        </div>
        
    );
}
 
export default Filter;