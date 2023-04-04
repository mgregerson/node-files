"use strict";

const fsP = require("fs/promises");
const axios = require("axios");

/** Accepts an argument path, logs the contents of that txt file to the console.
 * If error: Logs error to the console and exits the process.
 */
async function cat(path) {
  try {
    const contents = await fsP.readFile(path, "utf8");
    console.log(contents);
  } catch (err) {
    console.log("Error fetching ", path);
    console.error(err.message);
    process.exit(1);
  }
}

/** Accepts an argument, url, logs the contents of that axios request to the console.
 * If error: Logs error to the console, and exits the process.
 */
async function webCat(url) {
  try {
    const resp = await axios.get(url);
    console.log(resp.data);
  } catch (err) {
    console.log("Error fetching ", url);
    console.error(err.message);
    process.exit(1);
  }
}

const fileName = process.argv[2];

if (fileName.startsWith("http")) {
  webCat(fileName);
} else {
  cat(fileName);
}
