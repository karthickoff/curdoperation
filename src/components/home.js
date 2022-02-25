import Login from "./login"; 
import Register from "./register"; 
import "../styles/home.css";
export default function Home (){
return(
    <div className="container-fluid">
        <div className="row"> 
        <div className="col-6">
            <Login/>
        </div> 
        <div className="col-6">
            <Register/>
        </div>

        </div>

    </div>
)
}