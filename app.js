var express = require('express');
var app = express();
const path = require('path');

app.get('./*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(3001, () => {
    console.log('listen port at 3001')
})