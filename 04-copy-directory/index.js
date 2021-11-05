const fs = require("fs");
const path = require("path");
const fCopy = path.resolve("04-copy-directory", "files-copy");
const file = path.resolve("04-copy-directory", "files");

fs.access(fCopy, (err) => {
  if (err) {
    copy(file, fCopy);
  } else {
    fs.promises.rm(fCopy, { recursive: true });
    copy(file, fCopy);
  }
});

let child = require("child_process");
function copy(was, become) {
  was = was.replace(/\//gim, "\\");
  become = become.replace(/\//gim, "\\");
  child.exec('xcopy /y /q "' + was + '\\*" "' + become + '\\"');
}
