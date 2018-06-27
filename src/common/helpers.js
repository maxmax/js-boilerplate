import {documentApp} from '../services/globalService';
// Helprers

const APP = documentApp || document;
// New element

function attr(el, at, value){
	at = {'for': 'htmlFor', 'class': 'class'}[at] || at;
  if(!value){
    return el[at] || el.getAttribute(at) || '';
  }else{
    if(at == 'style'){el.style.cssText = value; return;}
    el[at] = value;
    if (el.setAttribute)	el.setAttribute(at, value);
	}
}

export function newEl(tag = "div", params) {
  params = params || {};
  var elem = APP.createElementNS
    ? APP.createElementNS('http://www.w3.org/1999/xhtml', tag)
    : APP.createElement(tag);

  for (var pr in params) {
    attr(elem, pr, params[pr]);
  }

  return elem;
}

// Append element

export function appendElement(el, where){
	(where || APP.body).appendChild(el);
  // where.appendChild(el);
}

// getEl

export function getEl(id) {
	return APP.getElementById(id);
}
