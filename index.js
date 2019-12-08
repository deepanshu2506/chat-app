var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var loginRoutes = require('./routes/login-routes.js');
var registerRoutes = require('./routes/register-routes.js');


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('webpages'));
app.use('/login',loginRoutes);
app.use('/register',registerRoutes);


app.set('view engine', 'pug');
app.set('views','./webpages/templates');


app.get('/',(req,res)=>{
	res.redirect('/login');
});

app.get('/chat',(req,res)=>{
	res.render('chat_main',{username: req.body.username});
});
app.listen(3000);

