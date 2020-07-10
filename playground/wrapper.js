const util = require('util');
const fs = require('fs');
const { resolve } = require('path');

// Wrapping file system fs module's method with util.promisify()
// Create an argument with all methods needed to be accessed then wrapped.
const args = {
    writeFile: util.promisify(fs.writeFile),
    readFile: util.promisify(fs.readFile),
    appendFile: util.promisify(fs.appendFile),
    unlink: util.promisify(fs.unlink)
};

// Write new file
function writeTheFile(fileName, text) {
    return new Promise((resolve, reject) => {
        args.writeFile(fileName, text, (error, data) => {
            error ? reject(error) : resolve(data);
        });
    });
}

// Read an existing file
function readTheFile(fileName) {
    return new Promise((resolve, reject) => {
        args.readFile(fileName, (error, data) => {
            error ? reject(error) : resolve(data);
        });
    });
}

// Update a file
function updateTheFile(fileName, updates) {
    return new Promise((resolve, reject) => {
        args.appendFile(fileName, updates, (error, data) => {
            error ? reject(error) : resolve(data);
        });
    });
}

// Delete a file 
function deleteTheFile(fileName){
    return new Promise((resolve, reject)=>{
        args.unlink(fileName, (error, data)=>{
            error ? reject(error) : resolve(data);
        });
    });
}

//calling 
writeTheFile('file.txt', 'new file created.');
readTheFile('file.txt');
updateTheFile('file.txt', 'write your new updates..');
deleteTheFile('file.txt');