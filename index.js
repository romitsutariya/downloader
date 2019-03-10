var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var MongoClient = require('mongodb').MongoClient;
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public/"));

 //this is for  loading first page   
 app.get('/', function (req, res) {
    res.send("hello world");
 })

const port = process.env.PORT || 3000;
//server configuration file
var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
