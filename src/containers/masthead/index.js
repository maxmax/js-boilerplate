import _ from 'lodash';
import { List, Seq } from 'immutable';
import {newEl} from '../../common/helpers';
import {defEv} from './actions';

const mastheadContent = (props) => {
  const {name, className} = props;
  const tmpl = `<section class="${className}">
    <p class="text-center">masthead Content - ${name}</p>
    <div class="text-center" id="masthead-content"></div>
  </section>`;
  return tmpl;
}

export class Masthead {
  constructor(props) {
    // super(props);
    this.state = {
      name: props.name,
      className: props.className,
      url: props.url
    };
  }

  // list test
  returnImmutable() {
    // immutable
    let list1 = List.of(1, 2);
    let list2 = list1.push(3, 4, 5);
    let list3 = list2.unshift(0);
    let list4 = list1.concat(list2, list3);
    console.log("list1==============================", list1);
    console.log("list2==============================", list2);
    console.log("list3==============================", list3);
    console.log("list4==============================", list4);
    //
    var oddSquares = Seq.of(1,2,3,4,5,6,7,8)
      .filter(x => x % 2)
      .map(x => x * x);
    console.log("oddSquares==============================", oddSquares.get(1));
    // end immutable
  }

  initContent() {

    // console.log("initContent", this);
    const {name, className} = this.state;
    const element = new newEl('section',{class: "container view-module " + className, id: 'mastheadWrapper'});
    element.innerHTML = _.join(['', mastheadContent({name, className})], ' ');
    setTimeout(function() {
      defEv("masthead-content", "GET_INCREMENT");
    }, 0);
    return element;
  }
}
