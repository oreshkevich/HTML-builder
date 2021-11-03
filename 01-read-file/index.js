const fs = require("fs");
const path = require("path");
const answer = fs.createReadStream(path.join(__dirname, "text.txt"));
answer.addListener("data", (data) => {
  console.log(data.toString());
});