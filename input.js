const {keyActions,keyMessageActions} = require('./constants');
// stores the active TCP connection object
let connection;
let previousKey = null;
let previousInterval = null;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("Exiting program ...");
    process.exit();
  }

  if (key in keyMessageActions) {
    keyMessageActions[key](connection);
  }

  //if pressed key is same as previous key, make no changes
  if (key === previousKey) {
    return;
  }
  
  //if pressed key is different, we need to clear the intervals
  if (previousInterval) {
    clearInterval(previousInterval);
    previousInterval = null;
  }

  if (key in keyActions) {
    previousKey = key;
    previousInterval = keyActions[key](connection); // sets the movement + currentInterval
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