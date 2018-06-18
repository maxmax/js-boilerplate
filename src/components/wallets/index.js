// Wallets

function postForm(url, formSelector) {
  const selector = document.querySelector(formSelector);
  selector.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = JSON.stringify({name: selector.name.value, pubkey: selector.pubkey.value})
    fetch(url, {
      method: 'POST',
      accept: 'application/json',
      headers: new Headers({
          'Content-Type': 'application/json',
      }),
      body: formData
    }).then(function(response) {
      console.log('form response', response);
      return response.json();
    }).then(function(data) {
      console.log('Success code goes here', data);
    }).catch(function(err) {
      console.log('Error', err);
    });
  });
}

export const walletsWr = (props, option) => {

  const items = props.map(function(item) {
    const li = `<li id="${'item-' + item.id}" data-target="${item.id}" class="item">
      <div>${item.name}</div>
      <div><small>${item.pubkey}</small></div>
    </li>`;
    return li;
  });

  const tplWallets = `<ul data-tabs>${items.join('')}</ul>`;

  let form = `<div><a href="#">Sign in</a></div>`;
  let adminForm = `<div>
    <form id="newWallet">
      <div class="form-group">
        <label>Name</label>
        <input type="text" name="name" class="form-control" placeholder="Wallet name">
      </div>
      <div class="form-group">
        <label>PubKey</label>
        <input type="text" name="pubkey" class="form-control" placeholder="Wallet address">
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>`;

  const tpl = `<section>
    ${tplWallets}
    <hr />
    <article>${option.admin ? adminForm : form}</article>
  </section>`;

  setTimeout(function(){
    postForm(option.post, 'form#newWallet');
  }, 0);


  return tpl;
}
