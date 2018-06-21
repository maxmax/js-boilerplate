// Beer Page
export const beerTemplate = (props) => {
  const { id, name, tagline, description, abv, ibu, image_url } = props[0];
  const tpl = `<article>
    <ul class="${'title-' + id}">
      <li><h4>${name}</h4></li>
      <li><small>${tagline}</small></li>
      <li><small>abv: ${abv} | ibu: ${ibu}</small></li>
      <li><br /><p>${description}</p></li>
      <li class="cover"><img src="${image_url}" alt="${name}" /></li>
    </ul>
  </article>`;
  return tpl;
}
