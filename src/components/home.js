import Login from "./login"; 
import Register from "./register"; 
import "../styles/home.css";
import { useState } from "react";
export default function Home (){ 
    const [newUser,setNewUser]=useState(false);
    const handleToggle = () =>{
setNewUser(!newUser);
    }
return(
    <div className="container-fluid"> 
    <div className="conatiner">  
    <div className="New-user"> 
    {!newUser?
    <span>New User Register Here   <button className="btn btn-secondary" onClick={handleToggle}>Register</button></span>:
    <span> Alredy User Login Here   <button className="btn btn-primary" onClick={handleToggle}>Login</button></span>}

    </div>
    </div>
      
        {!newUser?<div> 
            <Login/>
        </div> :<div>
        <Register/> 
        </div>}

    </div>
)
}