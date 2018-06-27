// import {store} from './store';
import {store} from '../../reducers';
import {getEl} from '../../common/helpers';

//render()
//function render(el) {
//  el.innerHTML = store.getState();
//}
//render(valueEl);

// intEvent
export function defEv(el, type) {
  const getVal = getEl(el);
  store.dispatch({ type: type });
  getVal.innerHTML = store.getState().masthead;
  console.log("store.getState:", store.getState());
}
