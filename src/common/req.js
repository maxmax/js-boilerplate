// App req

// function checkStatus(response) {
//  if (response.status >= 200 && response.status < 300) {
//    return response
//  } else {
//    var error = new Error(response.statusText)
//    error.response = response
//    throw error
//  }
// }

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function parseJSON(response) {
  return response.json()
}

export const rqe = (url) => {
  return fetch(url)
    .then(checkStatus)
    .then(parseJSON)
    .then(function(response) {
      // console.log('request succeeded with JSON response', response);
      return response;
    }).catch(function(error) {
      // console.log('request failed', error);
      return {status: "error", statusText: error};
    })
}
