import "../styles/navbar.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"; 
export default function Logout(){ 
    const handleLogout = () =>{
        window.localStorage.clear();
    }
    return(
        <div>
             <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Data Site</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link" to="/" onClick={handleLogout}>Logout</Link>
                        </li>
                        
                        
                        </ul>
            </div>
            </nav>
            </div>
        </div>
    )
}