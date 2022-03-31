import "../styles/navbar.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import profile from "../images/user.png";
import cartImage from "../images/cart.png";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export default function Logout() {
    var totoalCartItems = 0;
    const cartListReducer = useSelector((state) => state.cartReducer);
    const cartItems = cartListReducer.itemslist;

    for (var i = 0; i < cartItems.length; i++) {
        totoalCartItems += cartItems[i].count;
    }

    console.log("---------totoalCartItems----------", totoalCartItems);
    const cartCount = cartListReducer.cartListcount;
    // console.log("---------------------cartListReducer.itemslist---------", cartListReducer.itemslist);
    const handleLogout = () => {
        // user_detials
        localStorage.removeItem('user_detials');
        localStorage.removeItem('current_user');
        localStorage.removeItem('Authentication');
        localStorage.removeItem('currentuserEmail')
    }
    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Data Site</a>
                    <div className="menus">
                        <Link className='btn btn-danger' to="/data">Data</Link>
                        <Link className='btn btn-danger' to="/userdata">UserInfo</Link>
                        <Link className='btn btn-danger' to="/items">Items</Link>
                        <Link className='btn btn-danger' to="/todo">Totdo</Link>
                        <Link className='btn btn-danger' to="/range">Range</Link>
                        <Link className='btn btn-danger' to="/datetask">Date</Link>



                    </div>


                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>

                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" to="/" onClick={handleLogout}>Logout</Link>
                            </li>
                            <li class="nav-item cart">
                                <Link to="/cart"><img src={cartImage} style={{ width: "30px", height: "30px", marginTop: "3px", marginRight: "5px" }} /></Link>
                                {cartCount ? <span style={{ marginRight: "2px" }}>{cartCount} </span> : "+"}

                            </li>
                            <li class="nav-item">
                                <Link to="/userinfo"><img src={profile} style={{ width: "30px", height: "30px", marginTop: "3px" }} /></Link>
                            </li>





                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}