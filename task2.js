var fs = require('fs');
async function searchFilesInDirectoryAsync(file, txt) {
    fs.readFile(file, {encoding: 'utf-8'}, function(err, data) {
        try {
            let dataArray = data.split('\n'); // convert file data in an array
            const searchKeyword = txt; // we are looking for a line, contains, the phrase in the file
            let lastIndex = -1; // phrase not found
            let indexPos = 0;
            for (let index=0; index<dataArray.length; index++) {
                if (dataArray[index].includes(searchKeyword)) { // check if a line contains the phrase
                    lastIndex = index; // found a line includes a phrase keyword
                    indexPos = dataArray[index].indexOf(searchKeyword);
                    break; 
                }
            }
            if (lastIndex == -1) {
                console.log("'" + txt + "' not found");
            } else {
                console.log("'" + txt + "' found at line " + lastIndex + ", starting character position " + indexPos);
            }
        } catch (error) {
            console.log("The file " + file + "doesn't exist.");
        }
    });
}

searchFilesInDirectoryAsync("task2/" + process.argv[2], process.argv[3]);