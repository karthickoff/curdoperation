const intialState={
    cartListcount:0,
    shampoCount:0, 
    perfumeCount:0, 
    shoesCount:0, 
    watchCount:0,

}


const cartReducer =(state=intialState,action) =>{ 
    switch(action.type){

        case 'ADD_ITEM':
            return{
                ...state,
                cartListcount:state.cartListcount+1,
                [action.payload]:state[action.payload]+ 1
            };
        case 'DELETE_ITEM':
            return{
                ...state,
                cartListcount:state.cartListcount-1,
                [action.payload]:state[action.payload]- 1
            }; 
        default:
            return state

    }
} 
export default cartReducer;