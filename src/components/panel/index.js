import {rqe} from '../../common/req';
import {getEl} from '../../common/helpers';
import {loading} from '../../components/loading/index';

const widgetHeader = (title) => `<header><h2>${title}</h2></header>`;

const widgetEmpty = () => require('./empty.html');

// tplSection({barId, classL, orderL, title})

const tplSection = (props) => {
  const {barId, classL, orderL, title} = props;
  return `<div id="${barId}" class="${ 'section ' + classL}" style="${orderL}">
    ${title
    ? widgetHeader(title)
    : ''}
    <section id="${ 'section-' + barId}" class="body-section">
      ${loading(title + " loading...")}
    </section>
  </div>`;
}

// tplSectionData({data, barId, tmp, option})

const tplSectionData = (props) => {
  const {data, barId, tmp, option} = props;
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

// tplSectionEmbed({barId, tmp, url})

const tplSectionEmbed = (props) => {
  const {barId, tmp, url} = props;
  setTimeout(function() {
    const elem = getEl('section-' + barId);
    const elmTpl = tmp(url);
    elem.innerHTML = elmTpl;
  }, 0);
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

    const tpl = tplSection({barId, classL, orderL, title})

    const returnTpl = {
      active: true,
      template: tpl
    }

    if (data) {
      tplSectionData({data, barId, tmp, option});
    }

    if (embed && url) {
      tplSectionEmbed({barId, tmp, url});
    }

    return returnTpl.template;

  } else {
    console.log("bar: ", id, " - disabled");
    return "";
  }

}
