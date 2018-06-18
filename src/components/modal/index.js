// Modal

export const Modal = (props) => {
  const {el, data, template} = props;

  const modalTmp = `<section class="modal" id="${'modal-' + data.id}">
    <div class="modal-content">
      <button class="close modal-close">×</button>
      ${template(data)}
    </div>
  </section>`;

  const element = document.createElement('div');
  element.innerHTML = modalTmp;
  document.body.appendChild(element);

  const close = document.querySelector(".modal-close");
  close.onclick = function() {
    element.parentNode.removeChild(element);
    el.classList.remove('-active');
  };

}
