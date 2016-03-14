'use strict';
var fs=require('fs');
const express = require('express');

// Constants
const PORT = 8080;
var path=require('path');
// App
const app = express();
app.set('views',__dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/start', function(req,res) {
    res.sendFile(__dirname + '/views/index.html');
});
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);