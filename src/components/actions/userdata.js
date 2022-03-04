const ADD_USER='ADD_USER'
const REMOVE_USER='REMOVE_USER'

export function adduserAction (name) {  
  console.log("-----------action--------",name);
  return (dispatch) =>{
    dispatch({type:ADD_USER ,payload: name })
  }
}; 
export function removeuserAction (index) {  
  console.log("-----------action--------",index);
  return (dispatch) =>{
    dispatch({type:REMOVE_USER ,payload: index })
  }
}; 
