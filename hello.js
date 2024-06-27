
// ======= Create First Program=========

// // Load HTTP module
// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 8000;

// // Create HTTP server
// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { "Content-Type": "text/plain" });

//   // Send the response body "Hello World"
//   res.end("Hello World\n");
// });

// // Prints a log once the server starts listening
// server.listen(port, hostname, function () {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// ======= Create First Program=========

// const http = require('http');
// http.createServer((req,res)=>{
//     res.write("<h1>Hello Harsh jha</h1>");
//     res.end();
// }).listen(4500);


// ========== Use Of Express =======

// const express = require('express');
// const app =express();


// app.all("/secret", function (req, res, next) {
//     console.log("Accessing the secret section…");
//     next(); // pass control to the next handler
//   });
  
// app.get('/secret',(req,res)=>{
//     res.send("Harsh Jha")
// })

// const PORT= 4500
// app.listen(PORT,()=>{
//     console.log(`Surver is running on port ${PORT}`)
// })

// ===========create own module=========

// const square = require('./square')
// console.log(`The area of square with width of 4 is ${square.area(4)}`);
// console.log(`The perimeter of square with width of 5 is ${square.perimeter(5)}`);


// ======== asynchronous APIs=======

// console.log("first")
// console.log("second")

// setTimeout(()=>{
//     console.log("first")
// },2000);
// console.log("second");





const express = require("express");
const app = express();

// Require router module
const router = require("./wiki");

// Use the router middleware
app.use("/wiki", router); // Mount the router on /wiki path

const PORT = 4500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



