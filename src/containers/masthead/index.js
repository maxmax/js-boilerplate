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
