import {combineReducers, createStore} from "redux";
import {counter} from './containers/counter/reducer';
import {masthead} from './containers/masthead/reducer';

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
    counter,
    masthead
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() =>
  //render,
  console.log("counterInt subscribe mount:", store.getState())
)
