const intialState={
    nameList:[]
}
const userReducer =(state=intialState,action) =>{
    console.log("reducer--------------",action.payload)
    switch (action.type){
        case 'ADD_USER':
            return{
                ...state,nameList:[...state.nameList,action.payload]
            }; 
        case 'REMOVE_USER':
            return{
                ...state,nameList: [
                    ...state.nameList.slice(0, action.payload),
                    ...state.nameList.slice(action.payload + 1)
                ]
            };   
        default :
            return state;
    }

} 
export default userReducer;