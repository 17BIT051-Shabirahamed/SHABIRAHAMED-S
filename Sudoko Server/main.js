var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

const port = 3000;

app.use(cors()); //adding middle ware
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));//static files

app.use('/',route);

app.listen(port,()=>{
console.log('server started at port: '+port);
});