//require Modules
var express = require('express');
var bodyParser = require('body-parser');
var path  = require('path');
var pug=require('pug');

//Require other files I created
var index = require('./routes/index.js')
var test = require('./routes/test.js')

//Port Stuff
var app = express();
var port = process.env.PORT || 8080;

//Configure View Engine
app.set("view engine", "pug");
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Where to go depending on the specified URL
app.use('/',index);
app.use('/test',test);


//Create Express Server
app.listen(port);
console.log('Listening on port '+port);