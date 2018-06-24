// Beer Page
import { circularTmpl } from '../../common/canvas';

export const beerTemplate = (props) => {

  const { id, name, tagline, description, abv, ibu, ph, image_url } = props[0];

  const visualization = {
    ph: {id: id + "-myCanvas", text: "PH", val: ph, color: "#28a745"},
    abv: {id: id + "-myCanvas2", text: "ABV", val: abv, color: "#dc3545"},
    ibu: {id: id + "-myCanvas3", text: "IBU", val: ibu, color: "#007bff", divide: 40},
  }

  const tpl = `<article>
    <ul class="${'title-' + id}">
      <li><h4>${name}</h4></li>
      <li><small>${tagline}</small></li>
      <li><small>abv: ${abv} | ibu: ${ibu} | ph: ${ph}</small></li>
      <li><br /><p>${description}</p></li>
      <li class="cover"><img src="${image_url}" alt="${name}" /></li>
    </ul>
    <br />
    <hr />
    <br />
    ${circularTmpl(visualization.ph)}
    ${circularTmpl(visualization.abv)}
    ${circularTmpl(visualization.ibu)}
  </article>`;

  return tpl;
}
