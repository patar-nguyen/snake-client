const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  console.log('connected to server!');

  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });

  conn.on('connect', () => {
    conn.write('Name: Pat');
    //conn.write('Move: up');

  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};



console.log("Connecting ...");
connect();

module.exports = connect;