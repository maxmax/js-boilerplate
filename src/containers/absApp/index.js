// absApp -- in dev
import {rqe} from '../../common/req';
import {makeRequest, getRq} from '../../common/request';
import {etherscanReq} from '../../common/etherscanreq';
import {cfWrapper, cfVariable} from '../../components/classification';

import Data from '../../data/data.xml';

export function absApp() {

  console.log("absApp Mount!");
  console.log("Data:", Data); // desc

  // XHR
  // makeRequest('https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe');
  // makeRequest('https://api.etherscan.io/api?module=account&action=balance&address=0x51eD899D9668a2D267c750870c4ac5d4128b9548&tag=latest&apikey=YourApiKeyToken')
  makeRequest('https://api.etherscan.io/api?module=account&action=balance&address=0x51eD899D9668a2D267c750870c4ac5d4128b9548&tag=latest&apikey=YourApiKeyToken');
  // getRq
  getRq('https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe').then(function (response) {
    const {id, title} = JSON.parse(response);
    console.log("getRq:", id, " - ", title);
  }).catch(function (error) {
    console.log("getRq", error);
  });

  // End

  // EtherscanReq - Etherscan Api wallets tests
  etherscanReq('0x51eD899D9668a2D267c750870c4ac5d4128b9548');


  // Sample Request - Fetch
  let getFilm = rqe('https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe');
  // console.log("apiData:", apiTest);
  // promise
  getFilm.then(function(result) {
     console.log("apiData result:", result) //will log results.
  });

  // End

  // Classification
  // Sample Variable

  const taxEl = {
    variable: {
      variable: true,
      privacy: true
    },
    tax1: {
      jumps: true
    },
    tax2: {
      global: true,
      jumps: true
    },
    tax3: {
      name: "Custom name",
      global: true,
      jumps: false
    }
  };

  const nowVariable = cfVariable(taxEl.variable);
  console.log("nowVariable:", nowVariable);

  cfWrapper(taxEl.tax1);
  cfWrapper(taxEl.tax2);
  cfWrapper(taxEl.tax3);
  // End classification
  // reduxBasic();
}
