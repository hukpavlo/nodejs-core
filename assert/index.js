const assert = require('assert').strict;

const call = (func) => {
  try {
    func();
  } catch (err) {
    if (err instanceof assert.AssertionError) {
      console.log(`Assertion error at ${err.operator}`);
    }
  }
};

call(() => assert.deepStrictEqual([1], [1]));
call(() => assert.deepStrictEqual([1], ['1'])); //error
