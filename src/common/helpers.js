// Helprers

// New element
//const element = newEl('section',{
//	class: 'hello',
//	id: 'tratotui',
//	style: 'border: 1px solid red'
//});

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
  var elem = document.createElementNS
    ? document.createElementNS('http://www.w3.org/1999/xhtml', tag)
    : document.createElement(tag);

  for (var pr in params) {
    attr(elem, pr, params[pr]);
  }

  return elem;
}

// Append element

export function appendElement(el, where){
	(where || document.body).appendChild(el);
}
