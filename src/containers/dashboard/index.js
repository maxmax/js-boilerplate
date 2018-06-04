const homeProps = {
  active: false,
  title: "",
  components: {
    bar: ``,
    foo: ``
  }
};

export function containerDashboard(el) {

  el.__proto__ = homeProps;
  const {active, title, components} = el;

  const head = `<h1>${title}</h1>`;
  const aside = `<section class="container container-widgets">${components.bar}</section>`;
  const footer = `<footer>${components.foo}</footer>`;

  const tmpl = `<div class="row ${active ? "active" : "hidden"}">
    <div class="col">
      ${head}
    </div>
    <div class="col">
      ${aside}
    </div>
    <div class="col">
      ${footer}
    </div>
  </div>`;

  return tmpl;
}
