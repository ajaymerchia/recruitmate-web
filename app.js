const express 			       	= require('express')
const fs                    = require('fs'); // this engine requires the fs module
const app 			         		= express()

const port                  = process.env.PORT || 3000;

var bodyParser              = require('body-parser');




// Set View Engine
app.set('view engine', 'ejs') // register the template engine
app.set('views', './views') // specify the views directory
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/views'));



app.get('/', function (req, res) {
  res.render('index')
})


app.post('/index', function (req, res) {
  res.render('index')
})


app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!')
})
