const fsP = require("fs/promises");

async function cat(path) {
  try {
    let contents = await fsP.readFile(path, "utf8");
    console.log(contents);
  } catch (err) {
    console.error(err);
  }
}

let fileName = process.argv[2];

cat(fileName);
