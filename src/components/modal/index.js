// Modal

export const Modal = (el, data) => {
  console.log("Modal active data!", el);
  console.log("Modal active data!", data);
  setTimeout(function(){el.classList.remove('-loading')}, 500); // function on active
}
