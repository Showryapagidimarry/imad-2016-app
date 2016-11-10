var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/css/about.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.css'));
});
app.get('/ui/css/grid.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'grid.css'));
});
app.get('/ui/css/ie.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ie.css'));
});
app.get('/ui/css/main.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.css'));
});
app.get('/ui/css/modal.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'modal.css'));
});
app.get('/ui/css/normalize.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'normalize.css'));
});
app.get('/ui/css/owl.corousel.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'owl.corousel.css'));
});
app.get('/ui/js/bootstrap.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.min.js'));
});
app.get('/ui/js/dropdown.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'dropdown.js'));
});
app.get('/ui/js/jquery.validate.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery.validate.js'));
});
app.get('/ui/js/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/js/vendor/modernizer.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'modernizer.js'));
});
app.get('/ui/js/vendor/owl.carousel.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'owl.carousel.min.js'));
});
app.get('/ui/js/vendor/respond.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'respond.min.js'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
