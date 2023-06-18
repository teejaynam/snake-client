// stores the active TCP connection object
let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("Exiting program ...");
    process.exit();
  }


  if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  } else if (key === 'b') {
    connection.write("Say: BANANA!!")
  } else if (key === 'n') {
    connection.write("Say: NUTELLA!!")
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