var express = require('express');
var bodyParser = require('body-parser');
var Users = require('../database-mongo');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));

app.get('/Users', function (req, res) {
  Users.allUsers(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/user', function (req, res){
	console.log(req.body)
	Users.saveUsers(req.body)
});

var port = 2000
app.listen(port, function() {
  console.log('listening on port ' + port + '!');
});

