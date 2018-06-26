import {store} from './store';
import {getEl} from '../../common/helpers';

//render()
//function render(el) {
//  el.innerHTML = store.getState();
//}
//render(valueEl);

store.subscribe(() =>
  //render,
  console.log("counterInt subscribe mount:", store.getState())
)

// dispatch
//store.dispatch({ type: 'INCREMENT' })
//store.dispatch({ type: 'INCREMENT' })
//store.dispatch({ type: 'DECREMENT' })
//(function () {
//  store.dispatch({ type: 'INCREMENT' });
// }());

// Default INCREMENT - DECREMENT
export const actionFn = (props) => {
  const {el, type, val} = props;
  el.addEventListener('click', function () {
    store.dispatch({ type: type });
    val.innerHTML = store.getState();
  });
}

// Odd INCREMENT - DECREMENT
export const actionFnOdd = (props) => {
  const {el, type, val, odd} = props;
  el.addEventListener('click', function () {
    if (store.getState() % odd !== 0) {
      store.dispatch({ type: type });
      val.innerHTML = store.getState();
    }
  });
}

// Async INCREMENT - DECREMENT
export const actionAsync = (props) => {
  const {el, type, val, timeout} = props;
  el.addEventListener('click', function () {
    setTimeout(function () {
      store.dispatch({ type: type });
      val.innerHTML = store.getState();
    }, timeout)
  });
}

// Async INCREMENT - DECREMENT
export const actionTimeleft = (props) => {
  const {el, type, val, timeout} = props;
  el.addEventListener('click', function () {
    const timeleft = 10;
    const downloadTimer = setInterval(function(){
      if (store.getState() < 30) {
        store.dispatch({ type: type });
        val.innerHTML = store.getState();
      } else {
        clearInterval(downloadTimer);
      }
      if(timeleft <= 0)
        clearInterval(downloadTimer);
    }, timeout);
  });
}

// intEvent
export function intEvent(props) {
  const {id, actions} = props;
  const valueEl = getEl(id);

  return actions.map(function(item) {
    if (item.fn) {
      const el = getEl(item.el);
      const fn = item.fn;
      const opt = {
        el: el,
        type: item.type,
        val: valueEl,
        odd: item.odd,
        timeout: item.timeout
      };
      fn(opt);
    }
  });

}

// intEvent
export function defEvent(el, type) {
  const getVal = getEl(el);
  store.dispatch({ type: type });
  getVal.innerHTML = store.getState();
}
