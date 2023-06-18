const net = require("net");
const { IP, PORT, NAME } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf-8");

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${NAME}`);
  });

  conn.on('data', () => {
    console.log("you ded cuz you idled");
  });

  return conn;
};

// function export
module.exports = {
  connect
};