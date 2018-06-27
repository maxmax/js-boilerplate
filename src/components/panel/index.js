import {rqe} from '../../common/req';
import {getEl} from '../../common/helpers';
import {loading} from '../../components/loading/index';

const widgetHeader = (title) => {
  return `<header>
    <h2>${title}</h2>
  </header>`;
}

const widgetEmpty = () => {
  return `<article class="text-center">
    <br />
    <br />
    <div>Unknown error, Panel empty!</div>
  </article>`;
}

export const panel = (props) => {

  const {
    active,
    id,
    title,
    data,
    tmp,
    classNames,
    order,
    embed,
    url,
    option
  } = props;

  if (active) {
    const barId = 'bar-' + id;
    const classL = classNames || '';
    const orderL = order
      ? 'order:' + order + ';'
      : ""

    const tpl = `<div id="${barId}" class="${ 'section ' + classL}" style="${orderL}">
      ${title
      ? widgetHeader(title)
      : ''}
      <section id="${ 'section-' + barId}" class="body-section">
        ${loading(title + " loading...")}
      </section>
    </div>`;

    const returnTpl = {
      active: true,
      template: tpl
    }

    if (data) {
      const rqeData = rqe(data);
      rqeData.then(function(res) {
        const elem = getEl('section-' + barId);
        if (res.status === "error") {
          // const elem = getEl('section-' + barId);
          const elmTpl = widgetEmpty();
          elem.innerHTML = elmTpl;
        } else {
          // const elem = getEl('section-' + barId);
          const elmTpl = tmp(res, option);
          elem.innerHTML = elmTpl;
        }
      });
    }

    if (embed && url) {
      setTimeout(function() {
        const elem = getEl('section-' + barId);
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
