import react,{useState} from "react";
import axios from "axios";


const Call=()=>{
const [name,setName]=useState();
const loadName=()=>{
axios.get("https://ecommerce-response.herokuapp.com")
.then(response=>{
setName(response.data)
  })
}
 

   return(
     <div >
       <p>see some titles</p>
          <div className="btn-container" onClick={loadName}><button className="form-btn">click here</button></div>
         <ul>
            {name&&name.map(el=> <li key={el.id}>{el.name} {el.price} <img src={el.photo}/><button>add to cart</button></li>)}

         </ul>
     </div>
   );
}
export default Call ;
