// bring in express
const express = require('express');

// initialize express (so we can use its methods)
const app = express();
const port = 3000;

// get request, to url/, gwt res -> "send" the req
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Connected on port ${port}!`));
