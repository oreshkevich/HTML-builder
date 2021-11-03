const fs = require("fs");
const path = require("path");
const { stdin, stdout } = require("process");

stdout.write("Write something \n");

stdin.addListener("data", (data) => {
  if (data.toString().trim() == "exit") {
    console.log("Bye!");
    process.exit();
  }

  fs.appendFile(path.join(__dirname, "text.txt"), data, (err) => {
    if (err) throw new Error(err);
  });
});

process.addListener("SIGINT", function () {
  console.log("Bye!");
  process.exit();
});