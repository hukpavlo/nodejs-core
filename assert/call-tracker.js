const assert = require('assert').strict;

//create tracker object
const tracker = new assert.CallTracker();

const test = () => {
  console.log('test');
};

//create function wrapper
const testWrapper = tracker.calls(test, 2);

//show all tracker functions information
console.log(tracker.report());

testWrapper();
testWrapper();

tracker.verify();
