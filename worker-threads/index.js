const { workerData, parentPort, isMainThread, Worker } = require('worker_threads');

if (isMainThread) {
  console.log('main thread');

  const worker = new Worker(__filename, {
    workerData: 'Hello World!',
  });

  worker.on('message', (message) => {
    console.log(message);

    worker.postMessage('Hi!');
  });

  worker.on('error', (err) => {
    console.error('error', err.message);
  });
} else {
  console.log('child thread');

  parentPort.postMessage(`${workerData} from your child`);

  parentPort.on('message', console.log);
}
