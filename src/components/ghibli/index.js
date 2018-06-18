// Ghibli api - ducks
import {rqe} from '../../common/req';
import {Modal} from '../modal';

// listEvents 

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
      selectedLi.classList.remove('-active', '-loading');
    }

    selectedLi = node;
    selectedLi.classList.add('-active');

    if (fn && api) {
      selectedLi.classList.add('-loading');
      let reqData = rqe(api + selectedLi.getAttribute('data-target'));
      reqData.then(function(res) {
        const fnOption = {
          el: selectedLi,
          data: res,
          template: filmTemplate
        };
        fn(fnOption );
        selectedLi.classList.remove('-loading');
      });
    } else if (fn) {
      console.log("highlight fn!");
    }

  }

}

// Film

export const filmTemplate = (props) => {
  const { id, title, director, rt_score, release_date, description } = props;
  const tpl = `<article>
    <ul class="${'title-' + id}">
      <li><h4>${title}</h4></li>
      <li><small>Director: ${director}</small></li>
      <li><small>RT: ${rt_score}</small></li>
      <li><strong><small>${release_date}</small></strong></li>
      <li><br /><p>${description}</p></li>
    </ul>
  </article>`;
  return tpl;
}

// Film List

const listOption = {
  max_score: 0
};

export const filmList = (props, option) => {
  option.__proto__ = listOption;
  const resLi = props.map(function(item) {
    if (item.rt_score >= option.max_score) {
      return `<li id="${'item-' + item.id}" data-target="${item.id}" class="item">${item.title}</li>`;
    }
  });
  if (option.get) {setTimeout(function(){listEvents('[data-tabs]', Modal, option.get);}, 0);}
  return `<ul data-tabs>${resLi.join('')}</ul><article><small>Max score: ${option.max_score}</small></article>`;
}
