import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "../styles/login.css";
import truckImg from "../images/truck.png";
import buildImg from "../images/buildings.png";
import userIcon from "../images/usericon.png";
import emailIcon from "../images/emailicon.png";
import Logo from "../images/elearning.png";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleOnchange = (e) => {
        console.log(e.target.name, e.target.value);
        if (e.target.name == "emailid") {
            setEmail(e.target.value);
            console.log("emaild", e.target.value)
        }
        else {
            setPassword(e.target.value)
        }
    }

    const handleOnclick = () => {
        const usersList = JSON.parse(localStorage.getItem('usersList'));
        var userExist = 0;
        for (var i = 0; i < usersList.length; i++) {
            if (usersList[i].Emailaddress == email && password == usersList[i].password) {
                userExist += 1;
            }
        }
        if (userExist == 0) {
            alert("Incorrect detials")
        }
        else {
            async function d() {
                await (localStorage.setItem('Authentication', true))
                await (localStorage.setItem('currentuserEmail', email));
            };
            d();

            history.push('/data');
        }




    }
    return (
        <div className='container login'>
            <div className='Loginarea'>
                <div className='logoarea'>
                    <img src={Logo} />
                </div>
                <h3 style={{ textAlign: "center" }}>Login </h3>

                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label> <img className='icons' src={userIcon} />
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="emailid" value={email} onChange={handleOnchange} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label> <img className='icons' src={emailIcon} />
                        <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={password} onChange={handleOnchange} />
                    </div>

                    <button type="button" class="btn btn-secondary" onClick={handleOnclick}>submit</button>
                    <div>
                        <span> New User Regsiter Here -</span> <Link to="/register" className='btn btn-outline-primary'>Register</Link>
                    </div>

                </form>
            </div>
            <div className='animation'>
                <img src={truckImg} />
            </div>
            <div className='animation1'>
                <img src={buildImg} />
            </div>

        </div>
    )
}
export default Login;