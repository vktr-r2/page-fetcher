// It should take two command line arguments:

// a URL
// a local file path
// It should download the resource at the URL to the local path on your machine. Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.

// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html

const input = (process.argv.slice(2, process.argv.length)); //Take in console input from user
             
const fs = require('fs');                     //Import 'fs' for file writing
const request = require('request');           //Import 'request' for http request


if (input.length > 2) {
  console.log("Incorrect Input: Please provide just a URL and file for data storage (http://www.example.edu/ ./index.html)")
}

const URL = input[0]
const FILE = input[1]
console.log(URL, FILE);
let content;



request(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  content = body
});



fs.writeFile(FILE, content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});