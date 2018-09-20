const express = require('express');
const router = express.Router();

// Bring in Article Model
let Article = require('../models/article');


// Add Route
router.get('/add', function(req, res){
  res.render('add_article', {
    title:'Add Article'
  });
});

// Add Submit POST Route
router.post('/add',
//  [
//   check('title').not().isEmpty().withMessage('Title is required'),
//   check('author').not().isEmpty().withMessage('Author is required'),
//   check('Body').not().isEmpty().withMessage('Body is required')
// ],
function(req, res){
  req.checkBody('title','Title is required').notEmpty();
  req.checkBody('author','Author is required').notEmpty();
  req.checkBody('body','Body is required').notEmpty();

  // Get error
  let errors = req.validationErrors();
  if (errors) {
    res.render('add_article', {
      title: 'Add Article',
      errors: errors
    });
  }
  else {
    let article = new Article();
    article.title = req.body.title;
    article.author = req.body.author;
    article.body = req.body.body;

    article.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {
        req.flash('success', 'Article Added');
        res.redirect('/');
      }
    });
  }
});



// UPDATE form
router.get('/edit/:id', function(req, res){
  Article.findById(req.params.id, function(err, article){
    res.render('edit_article', {
      title:'Edit Article',
      article:article
    });
  });
});

// Update Submit POST Route
router.post('/edit/:id', function(req, res){
  let article = {};
  article.title = req.body.title;
  article.author = req.body.author;
  article.body = req.body.body;

  let query = {_id:req.params.id};

  Article.update(query, article ,function(err){
    if(err){
      console.log(err);
      return;
    } else {
      req.flash('success', 'Article Updated');
      res.redirect('/');
    }
  });
});

// Delete Article
router.delete('/:id', function(req, res){
  let query = {_id:req.params.id};
  console.log('id:'+query);
  // collecion.remove is deprecated. Use deleteOne, deleteMany or BulkWrite instead.
  Article.deleteOne(query, function(err){
    if (err) {
     console.log(err);
    }
    req.flash('success', 'Article Deleted');
    res.send('Success');
  });
});


// Get single Articles
router.get('/:id', function(req, res){
  Article.findById(req.params.id, function(err, article){
    res.render('article', {
      article:article
    });
  });
});



module.exports = router;
