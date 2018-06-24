// visualization collection

export const circleArc = (props) => {
  const { el, val, color } = props;
  const canvas = document.getElementById(el);
  const context = canvas.getContext('2d');
  const x = canvas.width / 2;
  const y = canvas.height / 2;
  const radius = 75;
  const startAngle = 1.1 * Math.PI;
  // var endAngle = 3.08 * Math.PI;
  const endAngle = val * Math.PI;
  const counterClockwise = false;
  context.beginPath();
  context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
  context.lineWidth = 5;
  context.strokeStyle = color;
  context.stroke();
}

// circularTmpl

const circularOption = {
  val: 0,
  divide: 2,
  color: "green"
};

export const circularTmpl = (props) => {
  props.__proto__ = circularOption;
  const { id, text, val, color, divide } = props;
  const tpl = `<div class="circle">
    <canvas id="${id}" width="160" height="160">
      Your browser does not support the HTML5 canvas tag.
    </canvas>
    <div class="outline"></div>
    <div class="text">${text} <strong>${val}</strong></div>
  </div>`;
  setTimeout(function() {
    circleArc({el: id, val: val / divide, color});
  }, 0);
  return tpl;
}
