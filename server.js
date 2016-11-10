var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});

app.get('/img/slide-1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'slide-1.jpg'));
});
app.get('/img/slide-2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'slide-2.jpg'));
});
app.get('/img/slide-3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'slide-3.jpg'));
});
app.get('/img/hero.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img', 'hero.jpg'));
});

app.get('/img/v2/iphone-bg-lg.min.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img/v2', 'iphone-bg-lg.min.png'));
});
app.get('/img/v2/iphone6.min.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/img/v2', 'iphone6.min.png'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/css/about.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'about.css'));
});
app.get('/css/grid.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'grid.css'));
});
app.get('/css/ie.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'ie.css'));
});
app.get('/css/main.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'main.css'));
});
app.get('/css/modal.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'modal.css'));
});
app.get('/css/normalize.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'normalize.css'));
});
app.get('/css/owl.carousel.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'owl.carousel.css'));
});
app.get('/js/bootstrap.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'bootstrap.min.js'));
});
app.get('/js/dropdown.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'dropdown.js'));
});
app.get('/js/jquery.validate.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'jquery.validate.js'));
});
app.get('/js/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'main.js'));
});
app.get('/js/vendor/modernizr.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js/vendor', 'modernizr.js'));
});
app.get('/js/vendor/owl.carousel.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js/vendor', 'owl.carousel.min.js'));
});
app.get('/js/vendor/respond.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js/vendor', 'respond.min.js'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
