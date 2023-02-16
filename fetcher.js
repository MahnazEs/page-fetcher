const request = require('request');
const fs = require("fs");

const path = './index.html';
const domain = 'http://www.example.edu/';

request(domain, (error, response, body) => {
  if (error) {
    console.log('errrrrrrror:', error);
  }
  fs.writeFile(`${path}`, body, function(error) {
    if (error) {
      console.log("errrrrrrror:", error);
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`);
    }
  });
});