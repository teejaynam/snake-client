const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf-8");

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: TJN");

    /*
    setInterval(() => {
      conn.write("Move: up");
    }, 50)
    */

  });

  conn.on('data', () => {
    console.log("you ded cuz you idled");
  });

  return conn;
};

module.exports = {
  connect
};