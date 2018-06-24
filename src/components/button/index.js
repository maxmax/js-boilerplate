// UI Buttons

export const uiButtons = () => {
  const tpl = `<section>
    <h4>Buttons:</h4>
    <button type="button">Button default</button>
    <button type="button" class="button button-primary">Button primary</button>
    <button type="button" class="button button-secondary">Button secondary</button>
    <button type="button" class="button button-success">Button success</button>
    <button type="button" class="button button-warning">Button warning error danger</button>
    <a href="#" class="button button-link">Button link</a>
    <br />
    <button type="button">Click Me!</button>
  </section>`;
  return tpl;
}
