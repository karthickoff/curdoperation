const intialState = {
    cartListcount: 0,
    shampoCount: 0,
    perfumeCount: 0,
    shoesCount: 0,
    watchCount: 0,
    itemslist: []
}


const cartReducer = (state = intialState, action) => {
    console.log("------------action,payload----------", action.payload);
    switch (action.type) {

        case 'ADD_ITEM':
            return {
                ...state,
                cartListcount: state.cartListcount + 1,
                [action.payload.count]: state[action.payload.count] + 1,
                itemslist: [...state.itemslist, action.payload]
            };
        case 'DELETE_ITEM':
            return {
                ...state,
                cartListcount: state.cartListcount - 1,
                [action.payload]: state[action.payload] - 1
            };
        case 'UPDATE_ITEM':
            return {
                ...state,
                itemslist: action.payload
            };
        default:
            return state

    }
}
export default cartReducer;