import React from "react";
const Home =()=>{
return(

<div className="container">
<div className="div-1">
<p>Incredible Prices On All Your Favorite Items</p>
<span>Free Shipping for orders over 50$</span>
<button>SHOP NOW</button>
</div>
<div className="sec-container">
<div className="div-2">
<p>Holiday Deals</p>
<span> Top Headphone Brands</span>
<button>shop</button>

</div>

<div className="div-3">
<p>Just In</p>
<span>Up to 30% off</span>
<button>shop</button>

</div>
</div>
<div className="sellers-div" >best sellers</div>
<div className="best-sellers">
<div className="best-sellers-child-1">

<button className="image-button-1"><span>sale</span></button>
<del>&euro;100.00</del><p className="p-sale">&euro;80.00</p>
</div>

<div className="best-sellers-child-1">
<button className="image-button-2"><span>sale</span></button>

<del>&euro;80.00</del><p className="p-sale">&euro;60.00</p>
</div>


<div className="best-sellers-child-1">
<button className="image-button-3"><span>new</span></button>

<p className="p-new">&euro;75.00</p>
</div>


<div className="best-sellers-child-1">
<button className="image-button-4"><span>new</span></button>

<p className="p-new">&euro;99.99</p>
</div>


<div className="best-sellers-child-1">
<button className="image-button-5"><span>sale</span></button>
<del>&euro;70.00</del><p className="p-sale">&euro;55.00</p>
</div>
</div>
<div className="view-button"><button>view all</button></div>

</div>

);
}
export default Home;
