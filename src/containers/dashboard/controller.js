// stored constants
import {widget} from '../../components/widget/index';
import {foo} from '../../components/foo/index';
import {filmTemplate, filmList} from '../../components/ghibli/index'; // ghibli templates
import {thumbYoutube} from '../../components/thumbs/index'; // ghibli templates
import {uploadForm} from '../../components/upload/index'; // upload
import {walletsWr} from '../../components/wallets/index'; // upload

const ghibliapi = "https://ghibliapi.herokuapp.com/films/";
const walletapi = "https://murmuring-plains-29509.herokuapp.com/api/contacts"
const uploadapi = "http://localhost:7070/api/pic/upload";

const components = {
  bar: {
    active: true,
    id: "baseBar",
    classNames: "panel col ghibli-wg",
    title: "Ghibli api",
    data: ghibliapi + "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    tmp: filmTemplate
  },
  bar2: {
    active: false,
    id: "baseBar2",
    classNames: "panel col ghibli-wg",
    title: "Ghibli api 2",
    data: ghibliapi + "12cfb892-aac0-4c5b-94af-521852e46d6a",
    tmp: filmTemplate
  },
  bar3: {
    active: true,
    id: "baseBar3",
    classNames: "panel panel-items col-2 ghibli-wg",
    order: -1,
    title: "Ghibli api films",
    data: ghibliapi,
    option: {
      get: ghibliapi,
      max_score: 94
    },
    tmp: filmList
  },
  bar4: {
    active: true,
    id: "baseBar4",
    classNames: "panel col-2 youtube-embed",
    title: "Youtube",
    embed: true,
    url: "lEEmORyxpho",
    tmp: thumbYoutube
  },
  bar5: {
    active: true,
    id: "baseBar5",
    classNames: "panel col-2",
    title: "upload",
    embed: true,
    url: uploadapi,
    tmp: uploadForm
  },
  bar6: {
    active: true,
    id: "baseBar6",
    classNames: "panel panel-items col-2 wallets",
    title: "wallets",
    data: walletapi,
    option: {
      admin: true,
      post: walletapi,
    },
    tmp: walletsWr
  },
  foo: "Footer widgets description!"
}

// in Select widgets
// const components = widgetsData;
const wdj = widget(components.bar);
const wdj2 = widget(components.bar2);
const wdj3 = widget(components.bar3);
const wdj4 = widget(components.bar4);
const wdj5 = widget(components.bar5);
const wdj6 = widget(components.bar6);
const wdjs = wdj + wdj2 + wdj3 + wdj4 + wdj5 + wdj6;

// global containers
export const dashboardApp = {
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
