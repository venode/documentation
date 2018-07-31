```javascript
// ES5 style
const thorify = require("thorify").thorify;
const Web3 = require("web3");

// const web3 = thorify(new Web3(), "http://localhost:8669");
const web3 = thorify(new Web3(), "http://testnet.venode.io");

web3.eth.getBlock("latest").then(res => console.log(res));
// Best block info will be displayed
```