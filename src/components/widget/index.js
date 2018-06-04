import {rqe} from '../../common/req';
import {loading} from '../../components/loading/index';

// const emptyTemplate = () => {
//  const tpl = `<div>
//    <h2>Empty template</h2>
//  </div>`;
//  return tpl;
// }

export const widget = (props) => {

  const { active, id, title, data, tmp, classNames, order, embed, url } = props;
  if (active) {
    const barId = 'bar-' + id;
    const classL = classNames || '';
    const orderL = order ? 'order:' + order + ';' : ""

    const tpl = `<div id="${barId}" class="${'bar ' + classL}" style="${orderL}">
      <section id="${'section-' + barId}" class="body-section">${loading(title + " loading...")}</section>
    </div>`;

    const returnTpl = {
      active: true,
      template: tpl
    }

    // Default data
    if (data) {
      const rqeData = rqe(data);
      rqeData.then(function(res) {
        const elem = document.getElementById('section-' + barId);
        const elmTpl = tmp(res);
        elem.innerHTML = elmTpl;
      });
    }

    // Default embed
    if (embed && url) {
      setTimeout(function(){
        const elem = document.getElementById('section-' + barId);
        const elmTpl = tmp(url);
        elem.innerHTML = elmTpl;
      }, 0);
    }

    return returnTpl.template;
  } else {
    console.log("bar: ", id, " - disabled");
    return "";
  }

}
