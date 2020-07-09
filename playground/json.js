const fs = require("fs")
const book = {
    title: "The power of now",
    author: "Eckhart"
}

// stringify() takes a string and convert it to JSON Obj
const bookJSON = JSON.stringify(book)
console.log("This is the json object: "+ bookJSON)

// parse() takes a JSON Obj and convert it to string 
const bookParse = JSON.parse(bookJSON)
console.log("This is the string of json object: "+ bookParse.title)

//to write a file that contain the json object
fs.writeFileSync("1-json.json",bookJSON)
//to read and print a file that contain the json object:

//1- Read it and strore it
//2- Convert it from Binary to String
//3- Parse it using JSON (from json Object to string)
const dataBuffer = fs.readFileSync("json.json")
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title+" , "+data.author)
//4- to Change values we need to overwrite our origin data

data.title = "Fangirl"
data.author = "Rainbow"

const newBook = JSON.stringify(data)
fs.writeFileSync("1-json.json",newBook)
console.log(data.title+" , "+data.author)

