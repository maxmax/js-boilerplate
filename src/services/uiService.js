// Beer Service
import {panel} from '../components/panel/index';
import {uiTemplate} from '../components/ui/index';

const beersapi = "https://api.punkapi.com/v2/beers";

const components = {
  option: {
    active: true,
    id: "uiModules",
    classNames: "col-12",
    title: "components",
    data: beersapi + "/54",
    tmp: uiTemplate
  }
}

// in Select widgets

export const uiApp = {
  component_1: {
    active: true,
    title: `UI Container`,
    components: {
      bar: panel(components.option),
    }
  }
};
