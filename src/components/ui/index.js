import {uiButtons} from '../button/index';
import {uiForms} from '../forms/index';
// UI Page

export const uiTemplate = (props) => {

  const { id, name, tagline, description, abv, ibu, ph, image_url } = props[0];

  const tpl = `<article>
    <h4>Typography:</h4>
    <ul class="${'title-' + id}">
      <li><h4>${name}</h4></li>
      <li class="cover"><br /><img src="${image_url}" alt="${name}" width="60" /></li>
      <li><small>${tagline}</small></li>
      <li><small>abv: ${abv} | ibu: ${ibu} | ph: ${ph}</small></li>
      <li><br /><p>${description}</p></li>
    </ul>
    <br />
    <hr />
    <br />
    ${uiButtons()}
    <br />
    <hr />
    <br />
    <br />
    ${uiForms()}
    <br />
    <br />
  </article>`;

  return tpl;
}
