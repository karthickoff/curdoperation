import Logout  from "./logout";  
import AddUser from "./adduser"; 
import ListData from "./listdata";
export default function Data () {
    return(
        <div> 
            <div>
            <Logout/>  

            </div> 
            <div>
            <AddUser/>  

            </div> 
            <div>
            <ListData/>

            </div>


        </div>
    )
}