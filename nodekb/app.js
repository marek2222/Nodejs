const express = require('express');
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;

// Check connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});

// Check for Db errors
db.on('error', function(err){
  console.log(err);
});

// Init app
const app = express();

// Bring in Models
let Article = require('./models/article');

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home route
app.get('/', function(req, res){
  let articles = Article.find({}, function(err, articles){
    if(err){
      console.log(err);
    }
    else {
      res.render('index', {
        title: 'Articles',
        articles: articles
      });
    }
  });
});

// Add route
app.get('/articles/add', function(req, res){
  res.render('add_article', {
    title: 'Add Article'
  });
});

/// Start server
app.listen(port, function(){
  console.log('Example app listening on port 3000!');
});
