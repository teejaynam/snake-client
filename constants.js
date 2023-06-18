const IP = "localhost";
const PORT = 50541;
const NAME = process.argv[2];

const keyActions = {
  w: (connection) => setInterval(() => connection.write("Move: up"), 50),
  a: (connection) => setInterval(() => connection.write("Move: left"), 50),
  s: (connection) => setInterval(() => connection.write("Move: down"), 50),
  d: (connection) => setInterval(() => connection.write("Move: right"), 50),
};

const keyMessageActions = {
  b: (connection) => connection.write("Say: BANANA!!"),
  n: (connection) => connection.write("Say: NUTELLA!!"),
};

module.exports = {
  IP,
  PORT,
  NAME,
  keyActions,
  keyMessageActions
};