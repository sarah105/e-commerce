import react,{useState} from "react";
import {Link} from "react-router-dom";
const Login=()=>{
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[emailErr,setemailErr]=useState("");


const handleChange=(e)=>{
const name=e.target.name;
const val=e.target.value;
 if (name==="email") {
      setEmail(val);
      setemailErr("");}
    else if (name==="password") {
      setPassword(val);}

}

const handleSubmit=(e)=>{
e.preventDefault();
if (email==="") {
  setemailErr("enter your E-mail");
}
}


return(
<form onSubmit={handleSubmit}>
<h1 className="log-in-title">Log In</h1>
<div className="sign-up-h3">
<p>New to this syte ?</p>
<Link to="/signup" className="sign-up-link"> <span>sign up</span></Link></div>
<div className="child1">
<div className="text-b-1">E-mail</div>
<input  type="email" name="email" onChange={handleChange} value={email}/>
{emailErr&&<span>{emailErr}</span>}
</div>
<div className="child1">
<div className="text-b-2">Password</div>
<input  type="password" name="password" onChange={handleChange} value={password}/></div>
<div className="btn-container"><button className="form-btn">log in</button></div>
</form>
);
}
export default Login;
