import _ from 'lodash';
import {dashboardApp} from './store/index';
import {containerDashboard} from './containers/dashboard/index';
// import {absApp} from './containers/absApp/index';
// absApp(); // dev
import './style/index.scss';
// import Data from './data/data.xml';

function component() {
  const element = document.createElement('div');
  // Containers
  element.innerHTML = _.join(['Dashboard', containerDashboard(dashboardApp.dashboard)], ' ');
  element.classList.add('view');
  return element;
}

document.body.appendChild(component());

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
