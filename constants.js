const IP = "localhost";
const PORT = 50541;
const NAME = process.argv[2];

const keyActions = {
  w: (connection) => connection.write("Move: up"),
  a: (connection) => connection.write("Move: left"),
  s: (connection) => connection.write("Move: down"),
  d: (connection) => connection.write("Move: right"),
  b: (connection) => connection.write("Say: BANANA!!"),
  n: (connection) => connection.write("Say: NUTELLA!!"),
};

module.exports = {
  IP,
  PORT,
  NAME,
  keyActions
}