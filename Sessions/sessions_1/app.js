const express = require('express')
const session = require('express-session');
 
// config for your database
//var sql = require("mssql");
const sql = require("msnodesqlv8")
const co = {
    conn_str : "server=localhost\\SQLEXPRESS;Database=nodejs;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}",
    conn_timeout : 10
};
const app = express()

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
  }))
let sess; 

app.get('/', function (req, res) { 
    sess = req.session;
    sess.someAttribute = "foo";
    if (sess.someAttribute) console.log('sess.someAttribute: '+sess.someAttribute)

    // connect to your database
    sql.open(co, function(err, conn) {
        if (err) console.log(err);
        // create Request object
        conn.query('select * from [_1_Student]', function (err, rows) {
        // query to the database and get the data
            if (err) console.log(err)
            // send data as a response
            res.send(rows);
        });
    });
});

app.get('/sp', function (req, res) {
    // connect to your database
    sql.open(co, function(err, conn) {
        if (err) console.log(err);
        // query to the database and get the data
        conn.query('dbo._1_GetAllStudents', function (err, recordset) {
            if (err) console.log(err);

            var someAttribute = sess.someAttribute;
            console.log(`This will print the attribute I set earlier: ${someAttribute}`);
            // send data as a response
            res.send(recordset);
        });
    });
});

var server = app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});