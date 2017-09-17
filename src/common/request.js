// "ES7" code, with async/await
//ref XMLHttpRequest on fetch
function httpGet(url) {
  return new Promise(function (resolve, reject) {
    // do the usual Http request
    let request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = function () {
      if (request.status == 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };

    request.onerror = function () {
      reject(Error('Network Error'));
    };

    request.send();
  });
}

async function httpGetJson(url) {
  // check if the URL looks like a JSON file and call httpGet.
  //let regex = /\.(json)$/i;

  //if (regex.test(url)) {
  if (url) {
    // call the async function, wait for the result
    return await httpGet(url);
  } else {
    throw Error('Bad Url Format');
  }
}

export const makeRequest = (url) => {
  httpGetJson(url).then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
}
