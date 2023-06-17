const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("Exiting program ...");
    process.exit();
  }
};

const setupInput = function() {
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