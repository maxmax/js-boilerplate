import _ from 'lodash';
// import {dashboardApp, componentsApp} from './containers/dashboard/controller';
import {app, dashboardApp} from './services/globalService';
import {componentsApp} from './services/beerService';
import {containerDashboard} from './containers/dashboard/index';
import {moduleWrapper} from './containers/module/index';
import {newEl, appendElement} from './common/helpers';
import './style/index.scss';
// import {absApp, runApp} from './containers/absApp/index';
// absApp(); // dev
// import Data from './data/data.xml';
// const app = document.getElementById('main');

function component() {
  //const element = document.createElement('div');
  const element = newEl();
  element.innerHTML = _.join(['Dashboard', containerDashboard(dashboardApp.dashboard)], ' ');
  element.classList.add('view');
  return element;
}

//app.appendChild(component());
appendElement(component(), app);
appendElement(moduleWrapper({label: "Test module", component: componentsApp.component_1}), app);

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
  // runApp();
}
