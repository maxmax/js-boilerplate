// Loading
export const loading = (str) => {
  const tpl = `<div class="loader-container">${str || 'Loading...'}</div>`;
	return tpl;
}
