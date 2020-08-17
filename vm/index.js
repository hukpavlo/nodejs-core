const fs = require('fs');
const vm = require('vm');

const script = new vm.Script(fs.readFileSync('test.js'), { filename: 'test.js' });

console.log(script.runInThisContext());
