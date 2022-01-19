const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  console.log('Connected to server!');
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    conn.write('Name: Pat');
    //conn.write('Move: up');
  });

  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });

  // interpret incoming data as text

  return conn;
};

module.exports = connect;