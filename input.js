const {keyActions} = require('./constants')
// stores the active TCP connection object
let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("Exiting program ...");
    process.exit();
  }

  if (key in keyActions) {
    keyActions[key](connection);
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

//function export
module.exports = {
  handleUserInput,
  setupInput
};