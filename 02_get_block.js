const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/0dfb4d2a3e754a8ea7f26c9a89628842');

async function getBlock(blockNumber, includeTxs = false) {
    const result = await web3.eth.getBlock(blockNumber, includeTxs);
    console.log(result)
}

getBlock(57291, true);
// include txs
// getBlock(57291, true);

