import _ from 'lodash';
// import {store} from './store';
import {actionFn, actionFnOdd, actionAsync, actionTimeleft, intEvent, defEvent} from './actions';
import {newEl} from '../../common/helpers';


const counterTmp = (props) => {

  const {id, value, actions} = props;

  console.log("props=============props", props);

  const buttons = actions.map(function(item) {
    if (actions) {
      return `<button id="${item.el}">${item.text}</button>`;
    }
  });

  const tmpl = `<section>
    <p class="text-center">
      Clicked: <span id="${id}" class="lead">${value}</span> times
      <br />
      <br />
      <aside class="counter-option text-center">${buttons.join('')}</aside>
    </p>
  </section>`;

  return tmpl;
}

export function counterInt() {

  const option = {
    counter: {
      id: "counterValue",
      value: 0,
      actions: [
        {
          el: "increment",
          text: "+",
          type: "INCREMENT",
          fn: actionFn
        },
        {
          el: "decrement",
          text: "-",
          type: "DECREMENT",
          fn: actionFn
        },
        {
          el: "incrementIfOdd",
          text: "Increment if odd",
          type: "INCREMENT",
          fn: actionFnOdd,
          odd: 2
        },
        {
          el: "incrementAsync",
          text: "Increment async",
          type: "INCREMENT",
          fn: actionAsync,
          timeout: 500
        },
        {
          el: "incrementTimeleft",
          text: "Increment timeleft",
          type: "INCREMENT",
          fn: actionTimeleft,
          timeout: 1000
        }
      ]
    }
  }

  const element = new newEl('section',{class: 'container view-module', id: 'counterWrapper'});
  element.innerHTML = _.join(['', counterTmp(option.counter)], ' ');
  setTimeout(function() {
    intEvent(option.counter);
    defEvent(option.counter.id, "INCREMENT");
  }, 0);
  return element;

}
