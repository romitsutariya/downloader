var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public/"));

  
 app.get('/', function (req, res) {
    res.sendFile(__dirname+"/index.html");
 })


 

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})