const fs = require("fs");
const path = require("path");
const answer = path.join(__dirname, "./secret-folder/");
fs.readdir(
  answer,
  {
    withFileTypes: true,
  },
  (err, files) => {
    for (let i = 0; i < files.length; i++) {
      if (files[i].isFile()) {
        for (let key in files[i]) {
          // console.log(files[i][key]);
          let file = answer + "/" + files[i][key];
          fs.stat(file, callback(file));
        }
      }
    }
  }
);
function callback(file) {
  return function (err, stats) {
    console.log(
      `${file
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, 1)} - ${file.split(".").pop()} - ${stats["size"] / 1000}kb`
    );
  };
}