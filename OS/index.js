const os = require('os');

console.log(JSON.stringify(os.EOL)); // \n
console.log(os.arch()); // x64

// console.log(os.cpus());

console.log(os.endianness()); // LE


console.log(os.totalmem());
console.log(os.freemem());

console.log(os.getPriority()); // 0
console.log(os.homedir()); // /Users/pavlohuk
console.log(os.hostname()); // MacBook-Pro-Pavlo.local
console.log(os.loadavg()); // [ 2.34326171875, 3.8134765625, 3.89501953125 ]

// console.log(os.networkInterfaces());

console.log(os.platform()); // darwin
console.log(os.release()); // 20.0.0
console.log(os.tmpdir()); // /var/folders/t2/yx0zcst95wxgwqq8b7qxlnzr0000gn/T
console.log(os.type()); // Darwin
console.log(os.uptime()); // 411118
console.log(os.userInfo());
