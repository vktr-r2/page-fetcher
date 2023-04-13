const input = (process.argv.slice(2, process.argv.length)); //Take in console input from user
             
const fs = require('fs');                     //Import 'fs' for file writing
const request = require('request');           //Import 'request' for http request


if (input.length !== 2) {                     //Handle improper inputs
  console.log("Incorrect Input: Provide just a URL and file for data storage (node fetcher.js <URL> <FILE>)");
  return;
}

const URL = input[0];                          //Store proper inputs in URL and FILE variable
const FILE = input[1];

request(URL, (error, response, body) => {     //Make HTTP request to URL.  cb function will take error, response, body params
  if (error === true) {                       //If an error is passed as a param, log the error
    console.log(error);
  }
  if (response.statusCode !== 200) {           //If response (object) has statusCode value other than 200, log failure with code
    console.log('Failed with statusCode:', response && response.statusCode);
  }
  fs.writeFile(FILE, body, err => {           //If request works and body is passed into cb function, use fs.writeFile to write to FILE var
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${FILE}`);    //Log success message showing bytes (based on character count)
  });
});
