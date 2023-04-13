// It should take two command line arguments:

// a URL
// a local file path
// It should download the resource at the URL to the local path on your machine. Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.

// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html

const input = (process.argv.slice(2, process.argv.length)); //Take in console input from user
             
const fs = require('fs');                     //Import 'fs' for file writing
const request = require('request');           //Import 'request' for http request


if (input.length !== 2) {
  console.log("Incorrect Input: Provide just a URL and file for data storage (node fetcher.js <URL> <FILE>)")
  return;
}

const URL = input[0]
const FILE = input[1]
// console.log(URL, FILE);

//TRY THIS: RUNNING THE REQUEST FUNCTION IN THE FILE WRITE FUNCTIONS PARAMS/ARGS.  IN REQUEST, RETURN body
//ALSO: maybe index file has to exist first?! >> Not necissary, if file exists it will just be over written
//MAYBE: return the body so it can be used in the writeFile func?


request(URL, (error, response, body) => {
  if (error === true) {
    console.log(error);
  }
  if (response.statusCode !== 200){
    console.log('Failed with statusCode:', response && response.statusCode);
  }
  fs.writeFile(FILE, body, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${FILE}`);
  })
})




// fs.writeFile(FILE, content, err => {
//   if (err) {
//     console.error(err);
//   }
//   // file written successfully
// });