const cannedMessage = ['Hello!', 'wyd?', 'hisss', 'Bye!'];
const keyLogs = [];
let connection;
let moveCount = 0;



const handleUserInput = (key) => {
  let movingUp;
  let movingLeft;
  let movingDown;
  let movingRight;

  const stopInterval = () => {
    if (keyLogs.length > 1) {
      let check = keyLogs[moveCount - 2];
      if (check !== keyLogs[moveCount - 1]) {
        if (check === 'w') {
          clearInterval(movingUp);
        } else if (check === 'a') {
          clearInterval(movingLeft);
        } else if (check === 's') {
          clearInterval(movingDown);
        } else if (check === 'd'){
          clearInterval(movingRight);
        }
      }
      
      
    }
  }
  
  if (key === '\u0003') {
    process.exit();
  } else {
    if (key === '\u0077') {
      keyLogs.push(key);
      moveCount ++;
      movingUp = setInterval(() => {
        connection.write('Move: up');
        stopInterval();
      }, 400);
    } else if (key === '\u0061') {
      keyLogs.push(key);
      moveCount ++;
      movingLeft = setInterval(() => {
        connection.write('Move: left');
        stopInterval();
      }, 400);
    } else if (key === '\u0073') {
      keyLogs.push(key);
      moveCount ++;
      movingDown = setInterval(() => {
        connection.write('Move: down');
        stopInterval();
      }, 400);
    } else if (key === '\u0064') {
      keyLogs.push(key);
      moveCount ++;
      movingRight = setInterval(() => {
        connection.write('Move: right');
        stopInterval();
      }, 400);
    } else if (key === '\u0068') {
      connection.write(`Say: ${cannedMessage[0]}`);
    } else if (key === '\u007a') {
      connection.write(`Say: ${cannedMessage[1]}`);
    } else if (key === '\u006a') {
      connection.write(`Say: ${cannedMessage[2]}`);
    } else if (key === '\u0062') {
      connection.write(`Say: ${cannedMessage[3]}`);
    }
  } console.log(keyLogs);

  
};


const setupInput = function (conn) {


  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);
  return stdin;
};




module.exports = { setupInput };