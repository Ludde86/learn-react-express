// bring in express
const express = require('express');

// initialize express (so we can use its methods)
const app = express();

// get request to url/ -> then get res -> "send" the req
app.get('/', (req, res) => res.send('Hello!'));

const port = 3000;

// listen for connections, and returns a http.server
app.listen(port, () => console.log(`Connected on port ${port}!`));
