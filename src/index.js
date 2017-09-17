import _ from 'lodash';
import {makeRequest} from './common/request';
import {bar} from './components/bar/index';
import {foo} from './components/foo/index';

import {home} from './containers/home';

import './style/index.scss';
import Data from './data/data.xml';

const sayApp = () => {

  console.log("Mount App!");

	const intbar = bar("int bar info!");
	const intfoo = foo("int foo info!");

  home({title: "Home title", components: {intbar, intfoo}});

  console.log("Data", Data);

  //Async await
  makeRequest('https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe');

};

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack', home({title: "Home title"})], ' ');
  element.classList.add('view');

	sayApp();

  return element;
}

document.body.appendChild(component());

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
