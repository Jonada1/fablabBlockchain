const path = require('path');
const fs = require('fs');
const solc = require('solc');

const tokenPath = path.resolve(__dirname, '', 'token.sol');
const source = fs.readFileSync(tokenPath, 'UTF-8');

// module.exports = solc.compile(source, 1).contracts[':Token'];

console.log(solc.compile(source,1).contracts[':Token']);