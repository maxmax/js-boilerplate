// Ghibli api - ducks
import {rqe} from '../../common/req';
import {Modal} from '../modal';

// Ex Events

const listEvents = (el, fn, api) => {
  let selectedLi;
  const elem = document.querySelector(el);

  elem.onclick = function(event) {
    var target = event.target;
    if (target.tagName != 'LI') return;
    highlight(target);
  };

  function highlight(node) {

    if (selectedLi) {
      selectedLi.classList.remove('-active');
      selectedLi.classList.remove('-loading');
    }

    selectedLi = node;
    selectedLi.classList.add('-active');

    if (fn && api) {
      selectedLi.classList.add('-loading');
      let reqData = rqe(api + selectedLi.getAttribute('data-target'));
      reqData.then(function(res) {
        fn(selectedLi, res);
      });
    } else if (fn) {
      console.log("fn!!!!!!!");
    }

  }

}

// Templates

export const filmTemplate = (props) => {
  const { id, title, director, rt_score, release_date, description } = props;
  const tpl = `<div>
    <ul class="${'title-' + id}">
      <li><h4>${title}</h4></li>
      <li><small>Director: ${director}</small></li>
      <li><small>RT: ${rt_score}</small></li>
      <li><strong>${release_date}</strong></li>
      <li><br /><p>${description}</p></li>
    </ul>
  </div>`;
  return tpl;
}

const api = 'https://ghibliapi.herokuapp.com/films/';

export const filmList = (props) => {
  const resLi = props.map(function(item) {
    return `<li id="${'item-' + item.id}" data-target="${item.id}" class="item">${item.title}</li>`;
  });
  setTimeout(function(){listEvents('[data-tabs]', Modal, api);}, 0);
  return `<ul data-tabs>${resLi.join('')}</ul>`;
}

export const thumbYoutube = (str) => {
  return `<div><embed width="420" height="315" style="max-width: 100%;" src="${'https://www.youtube.com/embed/' + str}" /></div>`;
}
