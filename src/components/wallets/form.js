// POST

export function postForm(url, formSelector) {
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
