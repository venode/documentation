// ES5 style
const thorify = require("thorify").thorify;
const Web3 = require("web3");

// const web3 = thorify(new Web3(), "http://localhost:8669");
const web3 = thorify(new Web3(), "http://testnet.venode.io");

web3.eth.getBlock("latest").then(res => console.log(res));
// Best block info will be displayed

// Response
// { number: 447435,
//   id: '0x0006d3cb1adf0c14b01f494c5ff913f43bc17791877f144f8c93e138e260de57',
//   size: 239,
//   parentID: '0x0006d3ca483e6edd28696592c72fc39bc1d7471bab76b555a08f5b1ff76ef802',
//   timestamp: 1534489510,
//   gasLimit: 11874185,
//   beneficiary: '0xb4094c25f86d628fdd571afc4077f0d0196afb48',
//   gasUsed: 0,
//   totalScore: 1395319,
//   txsRoot: '0x45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0',
//   stateRoot: '0xa86b50c144c8a57dfc624ce8d360c16f4b04a40481a207e64602f6ce7f9a3762',
//   receiptsRoot: '0x45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0',
//   signer: '0x1d5b094550fc79f1627451b65b0b123b1c1f06fd',
//   isTrunk: true,