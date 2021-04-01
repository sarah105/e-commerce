import react,{useState} from "react";



const Cart=()=>{
var x=40;
var y=1;
var z=200;


return(
<div className="conatiner">
<div className="start-div" >
<h2>My Cart</h2>
<div className="cart">
<div className="img-card-div">
<img src="https://static.wixstatic.com/media/84770f_94c5dbc59294432290868edc80ee98a4~mv2.jpg/v1/fill/w_621,h_324,al_r,q_80,usm_0.66_1.00_0.01/84770f_94c5dbc59294432290868edc80ee98a4~mv2.webp" width="100%" height="100%"/>
</div>
<div className="text-cart-div">
<p>product name</p>
<p>&euro;{x}</p>

</div>
<div className="total-items">
<button>+</button>
<p>{y}</p>
<button>-</button>
</div>
<div>&euro;{x}</div>
</div>

<div className="cart">
<div className="img-card-div">
<img src="https://static.wixstatic.com/media/84770f_94c5dbc59294432290868edc80ee98a4~mv2.jpg/v1/fill/w_621,h_324,al_r,q_80,usm_0.66_1.00_0.01/84770f_94c5dbc59294432290868edc80ee98a4~mv2.webp" width="100%" height="100%"/>
</div>
<div className="text-cart-div">
<p>product name</p>
<p>&euro;{x}</p>

</div>
<div className="total-items">
<button>+</button>
<p>{y}</p>
<button>-</button>
</div>
<div>&euro;{x}</div>
</div>

<div className="cart">
<div className="img-card-div">
<img src="https://static.wixstatic.com/media/84770f_94c5dbc59294432290868edc80ee98a4~mv2.jpg/v1/fill/w_621,h_324,al_r,q_80,usm_0.66_1.00_0.01/84770f_94c5dbc59294432290868edc80ee98a4~mv2.webp" width="100%" height="100%"/>
</div>
<div className="text-cart-div">
<p>product name</p>
<p>&euro;{x}</p>

</div>
<div className="total-items">
<button>+</button>
<p>{y}</p>
<button>-</button>
</div>
<div>&euro;{x}</div>
</div>


<div className="cart">
<div className="img-card-div">
<img src="https://static.wixstatic.com/media/84770f_94c5dbc59294432290868edc80ee98a4~mv2.jpg/v1/fill/w_621,h_324,al_r,q_80,usm_0.66_1.00_0.01/84770f_94c5dbc59294432290868edc80ee98a4~mv2.webp" width="100%" height="100%"/>
</div>
<div className="text-cart-div">
<p>product name</p>
<p>&euro;{x}</p>

</div>
<div className="total-items">
<button>+</button>
<p>{y}</p>
<button>-</button>
</div>
<div>&euro;{x}</div>
</div>
<div className="cart">
<div className="img-card-div">
<img src="https://static.wixstatic.com/media/84770f_94c5dbc59294432290868edc80ee98a4~mv2.jpg/v1/fill/w_621,h_324,al_r,q_80,usm_0.66_1.00_0.01/84770f_94c5dbc59294432290868edc80ee98a4~mv2.webp" width="100%" height="100%"/>
</div>
<div className="text-cart-div">
<p>product name</p>
<p>&euro;{x}</p>

</div>
<div className="total-items">
<button>+</button>
<p>{y}</p>
<button>-</button>
</div>
<div>&euro;{x}</div>
</div>
</div>
<div className="Order-Summary">
<h2>Order Summary</h2>
<div className="total-price">
<div className="subtotal"><p className="p-s-1">Subtotal</p><p className="p-s-2">&euro;{z}</p></div>
<div className="subtotal"><p className="p-s-1">shipping</p><p className="p-s-2">FREE</p></div>
</div>
<div className="check-out">
<div className="total"><p className="p-s-1">Total</p><p className="p-s-2">&euro;{z}</p></div>
<div className="check-btn"><button>check out</button></div>

</div>
</div>





</div>

);
}
export default Cart;
