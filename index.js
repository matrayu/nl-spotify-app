require('dotenv').config();
const express = require('express');
const querystring = require('querystring');
const app = express();
const port = 8888;
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;
// app.METHOD(PATH, HANDLER)


app.get('/', (req, res) => {
    res.send('Hello World HELLO')
});

app.get('/login', (req, res) => {
    const queryParams = querystring.stringify({
        client_id: CLIENT_ID,
        response_type: 'code',
        redirect_uri: REDIRECT_URI
    })
    res.redirect(`http://accounts.spotify.com/authorize?${queryParams}`);
})

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});