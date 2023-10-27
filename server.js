// Import the necessary modules
const express = require('express');  // Import the Express framework
const app = express();  // Create an Express application
const port = 4000;  // Define the port number on which the server will listen

// Configure and use the body-parser middleware to handle request data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded data
app.use(bodyParser.json()); // Parse JSON data

// Define route handlers for various endpoints

// Root route that responds with "Hello World!" for a GET request to the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Route "/whatever" with a response of "Good Bye!!" for a GET request
app.get('/whatever', (req, res) => {
    res.send("Good Bye!!");
});

// Route "/datarep" with a response of "Welcome to Data Representation & Querying" for a GET request
app.get('/datarep', (req, res) => {
    res.send("Welcome to Data Representation & Querying");
});

// Route "/hello" with a response of "Hello" for a GET request
app.get('/hello', (req, res) => {
    res.send("Hello");
});

// Route "/hello/:name" with a response that includes the name parameter for a GET request
app.get('/hello/:name', (req, res) => {
    res.send("Hello " + req.params.name);
});

// Route "/api/books" with a JSON response containing a list of books for a GET request
app.get('/api/books', (req, res) => {
    const data = [
        // Array of book objects
        // Each object contains book details
    ];
    res.json({
        mybooks: data,
        "Message": "Hello from server.js"
    });
});

// Route "/test" that serves an HTML file for a GET request
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route "/name" that responds with a personalized message based on query parameters
app.get('/name', (req, res) => {
    res.send("Hello " + req.query.fname + ' ' + req.query.sname);
});

// Route "/name" that responds with a personalized message based on JSON data from a POST request
app.post('/name', (req, res) => {
    res.send('Hello ' + req.body.fname + ' ' + req.body.sname);
});

// Start the Express server and listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
