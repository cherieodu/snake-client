const connect = require('./client');

// establishes a connection with the game server


console.log("Connecting ...");
connect();

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);
  return stdin;
};

setupInput();