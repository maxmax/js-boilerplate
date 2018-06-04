// stored constants
import {widget} from '../components/widget/index';
import {foo} from '../components/foo/index';
import {filmTemplate, filmList, thumbYoutube} from '../components/ghibli/index'; // ghibli templates

const widgetsData = {
  bar: {
    active: true,
    id: "baseBar",
    classNames: "panel col ghibli-wg",
    title: "Ghibli api",
    data: "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe",
    tmp: filmTemplate
  },
  bar2: {
    active: false,
    id: "baseBar2",
    classNames: "panel col ghibli-wg",
    title: "Ghibli api 2",
    data: "https://ghibliapi.herokuapp.com/films/12cfb892-aac0-4c5b-94af-521852e46d6a",
    tmp: filmTemplate
  },
  bar3: {
    active: true,
    id: "baseBar3",
    classNames: "panel panel-items col-2 ghibli-wg",
    order: -1,
    title: "Ghibli api films",
    data: "https://ghibliapi.herokuapp.com/films",
    tmp: filmList
  },
  bar4: {
    active: true,
    id: "baseBar4",
    classNames: "panel col-2 ghibli-wg",
    title: "Youtube thumb",
    embed: true,
    url: "lEEmORyxpho",
    tmp: thumbYoutube
  },
  foo: "Footer widgets description!"
}

// in Select widgets
const components = widgetsData;
const wdj = widget(components.bar);
const wdj2 = widget(components.bar2);
const wdj3 = widget(components.bar3);
const wdj4 = widget(components.bar4);
const wdjs = wdj + wdj2 + wdj3 + wdj4;

// global containers
export const globalData = {
  dashboard: {
    active: true,
    title: `Widget Containers`,
    components: {
      bar: wdjs,
      foo: foo(components.foo)
    }
  },
  telemetry: {
    active: false,
    title: `Telemetry`,
  }
};
