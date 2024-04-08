const fs = require("fs");

// readFromDatabase will read the content of posts.txt
// and return it as a string
export function readFromDatabase() {
    const data = fs.readFileSync("posts.txt", {encoding: "utf-8"});
    return data;
}