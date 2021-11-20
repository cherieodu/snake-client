const net = require("net");
const { host, port} = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host, // IP address here,
    port // PORT number here,
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server!");
    conn.write('Name: CIO');
    //moved the move commands to input.js to facilitate constant directional movements.

  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = { connect };