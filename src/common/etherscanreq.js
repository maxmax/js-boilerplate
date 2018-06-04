import etherscanapi from 'etherscan-api';

export function etherscanReq(pubKey) {

  const ethapi = etherscanapi.init('YourApiKey');
  const ethbalance = ethapi.account.balance(pubKey);

  console.log("ethapi.account:", ethapi.account);

  ethbalance.then(function(balanceData){
    console.log("ETH balance:", balanceData);
  });

}
