import ListData from "./components/listdata";
import Userdetials from "./components/userdetials";
import FullDetials from "./components/fulldetials";
import Home from "./components/home";
import Userinfo from "./components/userinfo";
import Editinfo from "./components/edituserinfo";
import LoginIndicator from "./components/loginIndicator";
import Data from "./components/data";
import Items from "./components/items";
import Cart from "./components/cart";
import { Redirect } from "react-router-dom";
import Todo from "./components/todo";
import Range from "./components/range";
import Datetask from "./components/datetask";
import Login from "./components/login";
import Register from "./components/register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
function App() {

  console.log(localStorage.getItem('Authentication'));
  const [islogin, setIsLogin] = useState(localStorage.getItem('Authentication') != null ? true : false);
  console.log("-----islogin---------", islogin);

  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        {islogin ?
          <Switch>
            <Route exact path="/data">
              <Data />
            </Route>
            <Route exact path="/userdata">
              <Userdetials />
            </Route>
            <Route exact path="/fulluserdata">
              <FullDetials />
            </Route>
            <Route exact path="/userinfo">
              <Userinfo />
            </Route>
            <Route exact path="/edituserinfo">
              <Editinfo />
            </Route>
            <Route exact path="/items">
              <Items />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/todo">
              <Todo />
            </Route>
            <Route exact path="/range">
              <Range />
            </Route>
            <Route exact path="/datetask">
              < Datetask />
            </Route>
          </Switch> : (<Redirect to="/" />)}
      </div>
    </Router>

  );
}

export default App;
