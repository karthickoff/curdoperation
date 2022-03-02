import { useState } from "react";
import "../styles/register.css";
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

export default function Register(){ 
    const [name,setName]=useState(''); 
    const [email,setEmail] =useState(''); 
    const [password,setPassword] =useState(''); 
    const[nameErr,setNameErr]=useState(false);  
    const [emailErr,setEmailErr] =useState(false); 
    const [emailFormatErr,setEmailFormatErr] =useState(false); 
    const [passwordFormatErr,setPasswordFormatErr]=useState(false);
    const history = useHistory();




    const [passwordErr,setPasswordErr] =useState(false);
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    const specialChar=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    const errCode={
        color:"red"
    };
    // onclick  
    const handleOnclick = () =>{
        console.log('---')

          

        if(!name){
            console.log("enter name");
            setNameErr(true);
        } 
        if(!email){ 
            setEmailErr(true); 
            setEmailFormatErr(false)
        } 
        else if(!regex.test(email)){
            setEmailFormatErr(true);
        } 
        else{
            setEmailErr(false);
            setEmailFormatErr(false);
        } 
        if(!password){ 
            console.log("enter password");
            setPasswordErr(true);
            
        } 
        else if(!(specialChar).test(password) && password.length<8){

            setPasswordFormatErr(true); 
        }  
        else{
            setPasswordFormatErr(false); 
            setPasswordErr(false);
        } 
        console.log("error list",nameErr , emailFormatErr, passwordFormatErr);
        if(!passwordErr && !passwordFormatErr && !emailErr && !emailFormatErr && !nameErr && name && email && password ){
            swal('Registration','succesfully Done','success');
            const data ={
                userName:name, 
                Emailaddress:email, 
                password:password,
            } 
            const usersList= localStorage.getItem('usersList') ? JSON.parse(localStorage.getItem('usersList')):[]; 
            console.log("----------------usersList------before--------",usersList);
            usersList.push(data); 
            console.log("----------------usersList------after--------",usersList);

            localStorage.setItem('usersList',JSON.stringify(usersList)) 
            localStorage.setItem('New_user', JSON.stringify(data)) 
            async function d(){
                await(localStorage.setItem('Authentication',true))
               }; 
            d();

            history.push('/data'); 
        } 
        
       
       
    } 
    // onchange 
    const handleOnchange = (e) =>{
        switch(e.target.name){
            case 'username':
                setName(e.target.value);   
                setNameErr(false)
                break; 
            case 'Email':
                setEmail(e.target.value);  
                setEmailErr(false) 
                console.log((regex.test(email)));
               
                break; 
            case 'Password':
                setPassword(e.target.value);  
                setPasswordErr(false); 
               if(!(specialChar).test(password) && password.length<8){
                   setPasswordFormatErr(true);
               } 
               else{
                   setPasswordFormatErr(false);
               }
               
                break;
        }
    }

    return(
        <div className="conatiner"> 
        <div className="register-area">
                <h2  style={{textAlign:"center"}}>Register</h2> 
                <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">User Name</label>
                    <input type="text" class="form-control" name="username" aria-describedby="emailHelp" value={name} onChange={handleOnchange} /> 
                   {nameErr ?<span style={errCode}>Enter Name</span> :''}
                 
                </div> 
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" name="Email" aria-describedby="emailHelp" value={email} onChange={handleOnchange}/>
                    {emailErr?<span style={errCode}>Enter Email</span>:''}
                    {!regex.test(email) && email.length>0 ?<span style={errCode}>Enter correct Email</span>:'' }

                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" name="Password"  value={password} onChange={handleOnchange}/>
                    {passwordErr?<span style={errCode}>Enter password</span>:''} 
                    { passwordFormatErr?<span style={errCode}>weak password</span> :''}

                </div> 
                <div className="submit-btn">
                <button type="button" class="btn btn-primary" onClick={handleOnclick}>Submit</button>

                </div>
               
                </form>
        </div>
               
        </div>
    )
}