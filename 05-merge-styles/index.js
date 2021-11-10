const path = require("path");
const fs = require("fs");
const { readdir } = require("fs/promises");
const styles = path.join(__dirname, "styles");
const createCSS = fs.createWriteStream(
  path.join(__dirname, "project-dist", "bundle.css")
);
async function bundleCSS() {
  try {
    const files = await readdir(styles.toString(), { withFileTypes: true });
    for (const file of files) {
      const build = path.extname(file.name);
      if (file.isFile() && build === ".css") {
        let str = fs.createReadStream(
          path.join(__dirname, "styles", file.name),
          "utf8"
        );
        str.on("data", function (chunk) {
          createCSS.write(chunk.toString() + "\n");
        });
      }
    }
  } catch (err) {
    console.error(err);
  }
}

bundleCSS();
