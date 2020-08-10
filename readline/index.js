const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', () => {
  console.log('----------------------');
  console.log(`new line`);
  console.log('----------------------');

  rl.prompt();

  rl.question('> ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();
  });
});
