import _ from 'lodash';
import {newEl} from '../../common/helpers';

// Option
const moduleOption = {
  active: false,
  components: {
    bar: ``,
  }
};

const containerModule = (el) => {
  el.__proto__ = moduleOption;
  const {title, active, components} = el;

  const head = `<h1>${title}</h1>`;
  const section = `<section class="container container-module">${components.bar}</section>`;

  const tmpl = `<section class="section ${active ? "active" : "hidden"}">
    <section>
      ${head}
    </section>
    <section>${section}</section>
  </section>`;

  return tmpl;
}

export function moduleWrapper(props) {
  const {id, label, component} = props;
  const element = new newEl('section',{class: 'container view-module', id: id});
  element.innerHTML = _.join([label, containerModule(component)], ' ');
  return element;
}
