const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/0dfb4d2a3e754a8ea7f26c9a89628842');

async function generateAddress() {
    try {
        const result = await web3.eth.accounts.create();
        console.log(result);
    } catch (e) {
        console.error(e);
    }
}

generateAddress();


