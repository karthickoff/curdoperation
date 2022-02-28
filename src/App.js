import ListData from "./components/listdata"; 
import Userdetials from "./components/userdetials"; 
import FullDetials from "./components/fulldetials"; 
import Home from "./components/home"; 
import Userinfo from "./components/userinfo";
import Editinfo from "./components/edituserinfo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
  
    <Router>
        <div className="App"> 
            
     
          <Switch>
           <Route exact path="/">
             <Home/>
           </Route>
           <Route exact  path="/data">
             <ListData/>
           </Route>
           <Route exact  path="/userdata">
            <Userdetials/>
           </Route>
           <Route exact  path="/fulluserdata">
            <FullDetials/>
           </Route>
           <Route exact  path="/userinfo">
           <Userinfo/>
           </Route>
           <Route exact  path="/edituserinfo">
           <Editinfo/>
           </Route>
{/* 
          <Route exact path="/" element={<Login/>} />
           <Route exact  path="/detials" element={<ListData/>} /> 
                 */}
          
          </Switch>
          </div>
    </Router>
   
  );
}

export default App;
