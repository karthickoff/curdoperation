import { useEffect, useState } from "react"; 
import { bindActionCreators } from 'redux'
import { adduserAction } from "./actions/userdata"; 
import {connect} from "react-redux";
console.log(adduserAction);
 function AddUser(props){
   
    var [name,setName]=useState('');    
    const [newarr,setNewArr]=useState([]);

    const handleOnchange =(e) =>{
      
        setName(e.target.value)
    }
    const addUser =() =>{  
        props.addUserName(name);
        setNewArr([...newarr,name])
        // newArr.push("01");
        setName('')    
    }  
    console.log("---------student reducer----", props.userReducer)
    return(
        <>
        <h3>Enter user Name</h3>
           <div className="input-group mb-3">
                <input type="text" name='username' value={name} className="form-control" placeholder="Enter username" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleOnchange}style={{width:"50%"}} />
                <div class="input-group-append">
                    <button className="btn btn-outline-dark" type="button" id="button-addon2" onClick={addUser}>Add</button>
                </div>
            </div>  
        </>
    )
    
}
const mapStateToProps = (state) => { 
    console.log("------------state-----------",state);
    return {
       userReducer:state.userReducer
    };
 };
 const mapDispatchToProps = (dispatch) => {
    // return  {
    //   addUserName:adduserAction,
    // }; 
    return bindActionCreators({ addUserName:adduserAction},dispatch)
 };
const addUserComponent=connect(mapStateToProps, mapDispatchToProps)(AddUser); 
export default addUserComponent;