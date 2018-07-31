# Documentation

## Connect to venode
```javascript
// ES5 style
const thorify = require("thorify").thorify;
const Web3 = require("web3");

// const web3 = thorify(new Web3(), "http://localhost:8669");
const web3 = thorify(new Web3(), "http://testnet.venode.io");

web3.eth.getBlock("latest").then(res => console.log(res));
// Best block info will be displayed
```

## try the demo
```bash
cd demo
npm i
npm run start
```

### response
```
{ number: 304579,
  id: '0x0004a5c32eb708d8b503c1ad370594921796981efe58d56bb6592b169a8f8f2f',
  size: 239,
  parentID: '0x0004a5c2987ccb6f77a534ff4031a1518f3c56354273b6b484ae603b1d379caf',
  timestamp: 1533060430,
  gasLimit: 10438811,
  beneficiary: '0xb4094c25f86d628fdd571afc4077f0d0196afb48',
  gasUsed: 0,
  totalScore: 967760,
  txsRoot: '0x45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0',
  stateRoot: '0x9b128cfd2e5add21902e12e8bc80036b4e32a02dd3f3aa27c7c666e5070cfd13',
  receiptsRoot: '0x45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0',
  signer: '0xab7b27fc9e7d29f9f2e5bd361747a5515d0cc2d1',
  isTrunk: true,
  transactions: [] }
```