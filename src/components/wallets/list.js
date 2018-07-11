export const walletsList = (props) => {
  const {data} = props;
  const items = data.map(function(item) {
    const li = `<li id="${'item-' + item.id}" data-target="${item.id}" class="item">
      <div>${item.name}</div>
      <div><small>${item.pubkey}</small></div>
    </li>`;
    return li;
  });
  return `<ul data-tabs>${items.join('')}</ul>`;
}
