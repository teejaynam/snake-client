const {keyActions,keyMessageActions} = require('./constants')
// stores the active TCP connection object
let connection;
let currentKey; //for setting the interval for when movement key is pressed

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("Exiting program ...");
    process.exit();
  }

  if (key in keyMessageActions) {
    keyMessageActions[key](connection);
  } 

  if (key in keyActions) {
    if(currentKey) {
      clearInterval(currentKey); //clears the setInterval from when you press a movement key
    }
    currentKey = keyActions[key](connection); //sets the movement + currentInterval
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