const fs = require("fs");
const readline = require("readline");
async function wordsCharLine() {
        /* Read stream and interface */
        const inputStream = fs.createReadStream('task1/' + process.argv[2]);
        const lineReader = readline.createInterface({
          input: inputStream,
          terminal: false,
        });
       
        /* Push each line to a new array. */
        const results = [];
        for await (const line of lineReader) {
            results.push(line);
        }
        var name = results[0].split(' ');
        console.log("Words: " + name[0] + ", Characters: " + name[1] + ", lines: " + name[2]);
        /* Return a new array, reversed. */
       }
       
       /* Do something with the result. */
       wordsCharLine();