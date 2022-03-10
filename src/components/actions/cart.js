const ADD_ITEM='ADD_ITEM'; 
const DELETE_ITEM='DELETE_ITEM'; 

export function additemAction (name) {  
    console.log("-----------action---cart-----",name);
    return (dispatch) =>{
      dispatch({type:ADD_ITEM ,payload:name})
    }
  }; 
  export function deleteitemAction (name) {  
    console.log("-----------action---cart-----",name);
    return (dispatch) =>{
      dispatch({type:DELETE_ITEM ,payload:name})
    }
  }; 