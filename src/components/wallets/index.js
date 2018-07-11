// Wallets
import {walletsList} from './list';
import {postForm} from './form';

const adminForm = require('./form.html');

const walletsSignIn = () => `<div><a href="#">Sign in</a></div>`;

const walletsSection = (data, option) => `<section>${walletsList({data})}<article>${option.admin ? adminForm : walletsSignIn()}</article></section>`;

export const walletsWr = (data, option) => {

  setTimeout(function(){
    postForm(option.post, 'form#newWallet');
  }, 0);

  return walletsSection(data, option);
}
