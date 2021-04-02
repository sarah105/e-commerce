import React, {useState} from 'react';
import "./../Css/signUp.css";
import { Link } from 'react-router-dom';

const Signup = ()=>{
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errorUsername,setErrorUsername] = useState("");
    const [errorPassword,setErrorPassword] = useState("");
    const [errorEmail,setErrorEmail] = useState("");

    const handleOnChange = (event)=>{
        const {name,value} = event.target;
        if(name === "password"){
            setPassword(value);
            setErrorPassword("");
            let ele = document.querySelector("#emptyPassword");
            ele.classList.remove("signUp-error");
            ele.className = " from-input";
        }
        else if (name === "username"){
            setUsername(value);
            setErrorUsername("");
            let ele = document.querySelector("#emptyUserName");
            ele.classList.remove("signUp-error");
            ele.className = " from-input";
        }
        else if(name === "email"){
            setEmail(value);
            setErrorEmail("");
            let ele = document.querySelector("#emptyEmail");
            ele.classList.remove("signUp-error");
            ele.className = " from-input";
        }
    }

    const handleSubmit = (e)=>{ 
        e.preventDefault();       
        if(username.length === 0){
            setErrorUsername("can't be blank");
            let ele = document.querySelector("#emptyUserName");
            ele.classList.remove("from-input");
            ele.className = " signUp-error";
        }
        if(password.length === 0){
            setErrorPassword("Enter password");
            let ele = document.querySelector("#emptyPassword");
            ele.classList.remove("from-input");
            ele.className = " signUp-error";
        }
        if(email.length === 0){
            setErrorEmail("can't be blank");
            let ele = document.querySelector("#emptyEmail");
            ele.classList.remove("from-input");
            ele.className = " signUp-error";
        }
            
    }

    return(
        <div className="container-log">
        <div className="signUp">
            <h1 className="signUp-header text-center">Sign Up</h1>
            <p className="signUp-p text-center">Already a member? <Link className="link" to="/login">Log In</Link></p>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>User Name</label><br />
                    <input type="text" name="username" id="emptyUserName" className="from-input" value={username} onChange={handleOnChange}/>
                    <p className="signUp-error" >{errorUsername}</p>
                </div>
                <div className="form-group">
                    <label>Email</label><br />
                    <input type="email" name="email" id="emptyEmail" className="from-input" value={email} onChange={handleOnChange} />
                    <p className="signUp-error" >{errorEmail}</p>
                </div>
                <div className="form-group">
                    <label>Password</label><br />
                    <input type="password" name="password" id="emptyPassword" className="from-input" value={password} onChange={handleOnChange}/>
                    <p className="signUp-error" >{errorPassword}</p>
                </div>
                <div className="check-btn form-btn">
                    <button style={{width:"100%"}}>Sign Up</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Signup