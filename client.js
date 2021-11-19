const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '192.168.56.1', // IP address here,
    port: 50541 // PORT number here,
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server!");
    conn.write('Name: CIO');

  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = { connect };