const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const TOTAL_ITEMS = 'TOTAL_ITEMS';

export function additemAction(data) {
  console.log("-----------action---cart-----", data);
  return (dispatch) => {
    dispatch({ type: ADD_ITEM, payload: data })
  }
};
export function deleteitemAction(name) {
  console.log("-----------action---cart-----", name);
  return (dispatch) => {
    dispatch({ type: DELETE_ITEM, payload: name })
  }
};
export function updateitemAction(data) {
  console.log("-----------action---cart-----", data);
  return (dispatch) => {
    dispatch({ type: UPDATE_ITEM, payload: data })
  }
};
export function totoalcartAction(data) {
  console.log("-----------action---cart-----", data);
  return (dispatch) => {
    dispatch({ type: TOTAL_ITEMS, payload: data })
  }
}; 