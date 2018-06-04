// Tax

const cfTaxonomy = {
  name: "Default",
  global: false,
  jumps: false
};

export const cfVariable = (props) => {
	return props;
}

export function cfWrapper(el) {
  el.__proto__ = cfTaxonomy;

  if (el.global) {
    console.log("cfWrapper", el.name);
  } else {
    console.log("cfWrapper else", el.name);
  }
}
