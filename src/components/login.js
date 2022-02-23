import React, { useState } from 'react';
import  { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Login(){  
    const [email,setEmail]=useState(""); 
    const [password,setPassword]=useState("");  
    const history = useHistory();
    const handleOnchange =(e) =>{
        console.log(e.target.name,e.target.value); 
        if(e.target.name=="emailid"){
            setEmail(e.target.value);
            console.log("emaild",e.target.value) 
        } 
        else{
            setPassword(e.target.value)
        }
    } 
    const handleOnclick =() =>{
       if(email =="karthickrvpm@gmail.com" && password=="1234"){
        history.push('/data');
    
       }  
       else{
        alert("enter correct detials"); 
        // <Redirect to='/data'/> 
        // console.log("---redirect ");
       }
    }
    return(
        <div className='container'> 
            <div>
                <h3>Login here</h3>
            </div>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="emailid" value={email} onChange={handleOnchange}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name="password" value ={password} onChange={handleOnchange}/>
                </div>
        
                <button type="button" class="btn btn-secondary" onClick={handleOnclick}>submit</button>
            </form> 
            <div class="mb-3"> 
            <h4>Task2</h4> 

                <Link className='btn btn-danger'  to="/userdata">Click here</Link>

            </div>
        </div>
    )
} 
export default Login;