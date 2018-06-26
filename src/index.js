import _ from 'lodash';
import {app, dashboardApp} from './services/globalService';
import {componentsApp} from './services/beerService';
import {uiApp} from './services/uiService';
import {containerDashboard} from './containers/dashboard/index';
import {moduleWrapper} from './containers/module/index';
import {counterInt} from './containers/counter/index';
import {newEl, appendElement} from './common/helpers';
//import {routerInit} from './router/index';
import './style/index.scss';
// import {absApp, runApp} from './containers/absApp/index';
// absApp(); // dev
// import Data from './data/data.xml';
// const app = document.getElementById('main');

function component() {
  //const element = document.createElement('div');
  const element = new newEl('section',{class: 'container view', id: 'dashboardPanels'});
  element.innerHTML = _.join(['Dashboard', containerDashboard(dashboardApp.dashboard)], ' ');
  return element;
}

//app.appendChild(component());
appendElement(component(), app);
appendElement(moduleWrapper({id: "testBeerModule", label: "Test module", component: componentsApp.component_1}), app);
appendElement(moduleWrapper({id: "testUiTemplate", label: "UI", component: uiApp.component_1}), app);
appendElement(counterInt(), app);
// router();
//(function () {
//  router();
//}());
//routerInit();

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
  // runApp();
}
