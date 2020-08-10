const querystring = require('querystring');

console.log(querystring.parse('name=Pavlo&surname=Huk')); // { name: 'Pavlo', surname: 'Huk' }
console.log(querystring.parse('name=Pavlo_surname=Huk', '_')); // { name: 'Pavlo', surname: 'Huk' }
console.log(querystring.parse('name->Pavlo&surname->Huk', '&', '->')); // { name: 'Pavlo', surname: 'Huk' }
console.log(
  querystring.parse('name->Pavlo&surname->Huk&test->test', '&', '->', {
    decodeURIComponent: querystring.unescape(),
    maxKeys: 2,
  }),
); // { name: 'Pavlo', surname: 'Huk' }

console.log(
  querystring.stringify({
    name: 'Pavlo',
    surname: 'Huk',
  }),
); // name=Pavlo&surname=Huk

console.log(
  querystring.stringify(
    {
      name: 'Pavlo',
      surname: 'Huk',
    },
    '_',
    '->',
  ),
); // name->Pavlo_surname->Huk
