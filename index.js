var server = require('express');
var request = require('request');
var port = process.env.PORT || 3500;
var app = server();
var path = require('path');

app.use(server.static(__dirname + '/public'));
app.use(server.static(__dirname + '/node_modules'));
app.use(server.static(__dirname + '/js'));
app.use(server.static(__dirname + '/client'));


app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({
  extended: true
}));
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));


app.get('/', function(req, res) {
  var fileName = path.join(__dirname, '/client/index.html');
  res.sendFile(fileName, function(err) {
    if (err) {
      console.log(err + " ERROR. ");
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
});



app.listen(port, function() {
  console.log('Ready: ' + port);
});
