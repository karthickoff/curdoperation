import Login from "./components/login";
import ListData from "./components/listdata"; 
import Userdetials from "./components/userdetials"; 
import FullDetials from "./components/fulldetials";
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
             <Login/>
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
