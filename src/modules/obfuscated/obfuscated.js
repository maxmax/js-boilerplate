// Test fn
function functionTestOne(el, q) {
  console.log("function assign Mount!");
  if (el && q) {
    console.log("ffunction assign Mount! el, q:", el, q);
  } else if (el) {
    console.log("ffunction assign Mount! el:", el);
  } else {
    console.log("ffunction assign Mount!");
  }
}

function functionTestTwo(el, q) {
  console.log("function assign Mount!");
  if (el && q) {
    console.log("ffunction assign Mount! el, q:", el, q);
  } else if (el) {
    console.log("ffunction assign Mount! el:", el);
  } else {
    console.log("ffunction assign Mount!");
  }
}

functionTestTwo("Default Mount!");

// Assign global fn - global scope

Object.assign(window, {
  functionTestOne: functionTestOne,
  functionTestTwo: functionTestTwo,
})
