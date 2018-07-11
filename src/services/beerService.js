// Beer Service
import {panel} from '../components/panel/index';
import {beerTemplate} from '../components/beer/index';

const beersapi = "https://api.punkapi.com/v2/beers";

const components = {
  option: {
    active: true,
    id: "beersRandom",
    classNames: "panel beer-cover fl-col-12",
    title: "Beer random",
    data: beersapi + "/random",
    tmp: beerTemplate
  }
}

// in Select widgets

export const componentsApp = {
  component_1: {
    active: true,
    title: `Beer Container`,
    components: {
      bar: panel(components.option),
    }
  }
};
