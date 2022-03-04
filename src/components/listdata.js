import { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux'

import {connect} from "react-redux";
import {removeuserAction} from "./actions/userdata";
 function ListData(props) { 
    var totatl=[]; 
   
    var [newarr,setNewArr]=useState(props.userReducer.nameList);
    console.log("---------------list------------",props.userReducer.nameList); 
    var nameList=props.userReducer.nameList;
    const deleteItem =(e) =>{
       
        console.log("dele index",e)  
        props.removeUser(e);
        for(var i=0;i<nameList.length;i++){
            if(nameList[i]!=nameList[e]){
                totatl.push(nameList[i])
            }
        } 
        console.log("------------total after change",totatl);  

    }
    return( 
        <div> 
            <div>
                <div><p>Name List :</p></div>
            <div>{nameList.map((entry,index) =>
          <div className='container'> <span>{index+1} </span>{entry} <span> <button type="button" name={index} class="btn  btn-sm" onClick={ () =>deleteItem(index)}><img   src="https://img.icons8.com/windows/50/000000/macos-close.png"/></button> </span></div>
        )}
        </div>
            </div>
        </div>
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
    return bindActionCreators({ removeUser:removeuserAction},dispatch)
 };
 const listUserComponent=connect(mapStateToProps,mapDispatchToProps)(ListData); 
export default listUserComponent;