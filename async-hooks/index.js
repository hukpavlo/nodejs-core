const fs = require('fs');
const util = require('util');
const async_hooks = require('async_hooks');

const debug = (...args) => {
  fs.writeFileSync(1, `${util.format(...args)}\n`, { flag: 'a' });
};

// Return the ID of the current execution context.
const eid = async_hooks.executionAsyncId();

// Return the ID of the handle responsible for triggering the callback of the
// current execution scope to call.
const tid = async_hooks.triggerAsyncId();

const asyncHook = async_hooks.createHook({
  init: (asyncId, type, triggerAsyncId, resource) => {
    debug('init', asyncId, type);
  },
  before: (asyncId) => {
    debug('before', asyncId);
  },
  after: (asyncId) => {
    debug('after', asyncId);
  },
  destroy: (asyncId) => {
    debug('destroy', asyncId);
  },
  promiseResolve: (asyncId) => {
    debug('promiseResolve', asyncId);
  },
});

// Allow callbacks of this AsyncHook instance to call. This is not an implicit
// action after running the constructor, and must be explicitly run to begin
// executing callbacks.
asyncHook.enable();

// Disable listening for new asynchronous events.
// asyncHook.disable();

const run = async () => {
  console.log('running...');
};

run();
