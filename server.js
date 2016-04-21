var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var posts = require('./posts.js')

app.use('/medium/posts', posts);
app.listen(port);
console.log('Listening on :' + port);
