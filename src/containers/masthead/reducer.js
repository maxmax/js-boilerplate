//import { fromJS } from 'immutable';

//const initialState = fromJS({
//  count: 0
//});

const initialState = {
  count: 0
};

export function masthead(state = initialState, action) {
  console.log("masthead action", action);
  console.log("masthead state", state);
  switch (action.type) {
    case 'GET_INCREMENT':
      return state.count + 2
    case 'SEND_INCREMENT':
      return state.count + 1
    case 'SEND_DECREMENT':
      return state.count - 1
    default:
      return state;
  }
}
