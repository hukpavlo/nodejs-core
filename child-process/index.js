const cp = require('child_process');

const spawn = cp.spawn('echo', ['executed']);

spawn.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

const exec = cp.exec('echo exec done');

exec.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});
