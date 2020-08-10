const path = require('path');

console.log(path.basename('/test/index.js/')); //index.js
console.log(path.basename('/test/index.js/', '.js')); //index

console.log(process.env.PATH.split(path.delimiter));

console.log(path.dirname('/test/index.js/')); // /test

console.log(path.extname('index.coffee.md')); // .md

console.log(
  path.format({
    dir: 'pavlo/huk',
    ext: '.js',
    name: 'index',
  }),
); // pavlo/huk/index.js

console.log(path.isAbsolute('/foo/../../..')); // true
console.log(path.isAbsolute('./')); // false

console.log(path.join('/foo/', '/bar/', 'baz/asdf', 'quux', '../..')); // /foo/bar/baz

console.log(path.normalize('/foo/bar//baz/..')); // /foo/bar

console.log(path.parse('/home/user/dir/file.txt')); // { root: '/', dir: '/home/user/dir', base: 'file.txt', ext: '.txt', name: 'file' }

console.log(path.relative('/pavlo/huk/index.js', '/pavlo')); // ../..

console.log(path.resolve('/pavlo', '/huk')); // /huk
console.log(path.resolve('/pavlo', 'huk', './test', '../')); // /pavlo/huk
