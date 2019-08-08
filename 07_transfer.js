const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/0dfb4d2a3e754a8ea7f26c9a89628842');

async function transfer(to, value) {
    let tx = {
        to,
        value,
        gas: 2000000
    };//이더리움을 전송하기위한 transaction data
    try {
        let account = await web3.eth.accounts.privateKeyToAccount('0x0cb8d7b42b223a5aa349ab6fac94dbab2cdb25a4181ba11db8e13581039e05ec');// privateKetToAccount - private Key를 입력하면 account object 로 전송
        console.log(account);
        const result = await account.signTransaction(tx);//signTransaction 은 gas,to,value를 입력받는다. tx에 서명
        console.log(result);
	
	const txid = await web3.eth.sendSignedTransaction(result.rawTransaction);
   	console.log(txid);
     } catch (e) {
        console.error(e);
    }
}
const amount = '0.1';
const etherToWei = web3.utils.toWei(amount);
//console.log(etherToWei);
transfer('0x8C931e887B5b5da75e600A877206244207AEb8Cd', etherToWei);

