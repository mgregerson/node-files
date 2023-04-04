"use strict";

const fsP = require("fs/promises");

/** Accepts an argument path, logs the contents of that txt file to the console.
 * If error: Logs error to the console and exits the process.
 */
async function cat(path) {
  try {
    let contents = await fsP.readFile(path, "utf8");
    console.log(contents);
  } catch (err) {
    console.log("Error fetching ", path);
    console.error(err.message);
    process.exit(1);
  }
}

let fileName = process.argv[2];

cat(fileName);
