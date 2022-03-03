import "../styles/navbar.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"; 
  import profile from "../images/user.png";
export default function Logout(){ 
    const handleLogout = () =>{
        // user_detials
        localStorage.removeItem('user_detials');
        localStorage.removeItem('current_user'); 
        localStorage.removeItem('Authentication');
        localStorage.removeItem('currentuserEmail')
    }
    return(
        <div>
             <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Data Site</a> 
                    <div className="menus">
                    <Link className='btn btn-danger'  to="/data">Task1</Link> 
                    <Link className='btn btn-danger'  to="/userdata">Task2</Link> 
                    </div>
                   
                    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span> 
                       
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link" to="/" onClick={handleLogout}>Logout</Link>
                        </li>
                        <li class="nav-item">
                           <Link to="/userinfo"><img src={profile} style={{width: "30px",height: "30px",marginTop:"3px"}} /></Link> 
                        </li>
                        


                        
                        
                        </ul>
            </div>
            </nav>
            </div>
        </div>
    )
}