// Ghibli films
import {rqe} from '../../common/req';
import {Modal} from '../modal';

// listEvents (element, function, api )

const tabFn = (el, fn, api, selectedTag) => {
  selectedTag.classList.add('-loading');
  let reqData = rqe(api + selectedTag.getAttribute('data-target'));
  reqData.then(function(res) {
    const fnOption = {
      el: selectedTag,
      data: res,
      template: filmTemplate
    };
    fn(fnOption);
    selectedTag.classList.remove('-loading');
  });
}

const listEvents = (el, fn, api, tag) => {
  let selectedTag;
  const elem = document.querySelector(el);

  elem.onclick = function(event) {
    var target = event.target;
    if (target.tagName != tag) return;
    highlight(target);
  };

  function highlight(node) {

    if (selectedTag) {
      selectedTag.classList.remove('-active', '-loading');
    }

    selectedTag = node;
    selectedTag.classList.add('-active');

    if (fn && api) {
      tabFn(el, fn, api, selectedTag);
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
      <li><small>${release_date}</small></li>
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
  if (option.get) {setTimeout(function(){listEvents('[data-tabs]', Modal, option.get, 'LI');}, 0);};
  return `<ul data-tabs>${resLi.join('')}</ul><article><small>Max score: ${option.max_score}</small></article>`;
}
