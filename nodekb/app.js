const express = require('express');
const port = 3000;
const path = require('path');

// Init app
const app = express();

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home route
app.get('/', function(req, res){
  res.render('index');
});

/// Start server
app.listen(port, function(){
  console.log('Example app listening on port 3000!');
});
