import { Link } from "react-router-dom";
import warningImage from "../images/warning2.png";
export default function LoginIndicator(){
return(
   <div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <img src={warningImage}/>
                </div>
                <div class="col">
               <h4>Page not found</h4> 
               <p>We're sorry, we couldn't find the page you requested.</p>
              <p> If you feel something is missing that should be here,</p> <Link to="/">Home</Link>
                </div>
            </div>
    </div> 
   </div>
)
}