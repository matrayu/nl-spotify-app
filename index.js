require('dotenv').config();
const express = require('express');
const app = express();
const port = 8888;
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;
// app.METHOD(PATH, HANDLER)


app.get('/', (req, res) => {
    res.send('Hello World HELLO')
});

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});