const express = require('express');
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const secret = require('./config/secret');  
const sql = require('seriate');
sql.setDefaultConfig(secret);


// Init app
const app = express();
 
// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Set Public folder: to images, Css, files
app.use(express.static(path.join(__dirname, 'public')));
 
// Body Parser Middleware - To handle HTTP POST request in Express.js version 4 and above, you need to install middleware module called body-parser. body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


//Home route
app.get('/', function(req, res){
    sql.execute({
        query: sql.fromFile('./sql/artykuly')
    }).then( function(results){
        res.render('index', {
            tytul:'Artykuły', 
            artykuly: results
        });
    }, function (err){
        console.log ('Coś się stało:', err);
    });
});

// Get single Articles
app.get('/artykul/:id', function(req, res){
    sql.execute({
        query: sql.fromFile('./sql/artykul'),
        params: {
            id: {	type: sql.INT, val: req.params.id }
        }
    }).then( function(results){
        res.render('artykul', {
            artykul: results[0]
        });
    }, function (err){
        console.log ('Coś się stało:', err);
    });
});

// Add route
app.get('/artykul/dodaj', function(req, res){
    res.render('artykulDodaj', {
        tytul: 'Dodaj Artykuł'
    });
});

// Add Submit POST Route
app.post('/artykul/dodaj', function(req, res){
    sql.execute({
        query: sql.fromFile('./sql/artykulDodaj'),        // query: 'insert nodejs.dbo.[_b_Articles](tytul,autor,cialo) select tytul,autor,cialo from @tabela',
        params: {
            tabela: {
                val: [{   tytul: req.body.tytul, 
                            autor: req.body.autor, 
                            cialo: req.body.cialo }],
                asTable: {
                    tytul:     sql.NVARCHAR(50),
                    autor:    sql.NVARCHAR(50),
                    cialo:     sql.NVARCHAR(50)
                }
            }
        }
    }).then( function(results){
        res.redirect('/');
    }, function (err){
        console.log ('Coś się stało:', err);
    });
});
    

// UPDATE form
app.get('/artykul/edycja/:id', function(req, res){
    Article.findById(req.params.id, function(err, article){
        res.render('artykulEdycja', {
            title:'Edit Article',
            article:article
        });
    });
});
  
// Update Submit POST Route
app.post('/artykul/edit/:id', function(req, res){
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
            res.redirect('/');
        }
    });
});

app.delete('/artykul/:id', function(req, res){
    let id = {id:req.param.id}

    sql.execute({
        query: sql.fromFile('./sql/artykulUsun'),
        params: {
            id: {
				type: sql.INT,
                nullable: false,
                val: id
            }
        }
    }).then( function(results){
        res.send('Success');
    }, function (err){
        console.log ('Coś się stało:', err);
    });
});
    
 
/// Start server
app.listen(port, function(){
    console.log('Example app listening on port 3000!');
});
