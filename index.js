var fs = require('fs');
var path = require('path');

var filePath = path.resolve('test');
var allFilePath = [];

function ReadAllFiles(filePath) {
    allFilePath = [];
    fs.readdirSync(filePath).forEach(file => {
        if (fs.lstatSync(path.resolve(filePath, file)).isDirectory()) {
            var newFilePath = path.resolve(filePath + "/" + file);
            // console.log(newFilePath);
            allFilePath.push(ReadAllFiles(newFilePath))
        } else {
            // console.log(filePath + file);
            allFilePath.push(filePath + "/" + file);
        }
    });
    return allFilePath;
}

allFilePath = ReadAllFiles(filePath);

// console.log(allFilePath);
module.exports = allFilePath;
