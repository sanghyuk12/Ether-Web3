const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/0dfb4d2a3e754a8ea7f26c9a89628842');

async function getBalance(address) {
    const result = await web3.eth.getBalance(address);
    console.log(result)

    const weiToEther =  web3.utils.fromWei(result, 'ether');
    console.log(weiToEther);
}

getBalance('0x32b72db056BA43093D59816eD495B255b7c32982');
// result : 2957209069100000000

