const test = (data) => {
  throw new Error('test');
  return `${data} - test`;
};

console.log(test('hello'));
