// XMLHttpRequest 

function httpGet(url) {
  return new Promise(function (resolve, reject) {
    // do the usual Http request
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = function () {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        // reject(Error(xhr.statusText));
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function () {
      reject(Error('Network Error'));
    };

    xhr.send();
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

// Default req

export const getRq = (url) => {
  if (url) {
    return httpGet(url);
  } else {
    throw Error('Bad Url Format');
  }
}
