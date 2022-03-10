import { combineReducers } from "redux"; 
import userReducer from "./components/reducers/user";  
import cartReducer from "./components/reducers/cart";
export default combineReducers({
    userReducer,
    cartReducer
})