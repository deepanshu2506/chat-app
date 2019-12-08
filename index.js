var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var loginRoutes = require('./routes/login-routes.js');
var registerRoutes = require('./routes/register-routes.js');
var session = require('express-session');
var cookieParser = require('cookie-parser');
app.use(session({
	secret:"kdfghjfgd445sdf243",
	cookie: {expires: 600000}
}));

app.use(cookieParser());

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('webpages'));
app.use('/login',loginRoutes);
app.use('/register',registerRoutes);


app.set('view engine', 'pug');
app.set('views','./webpages/templates');


app.get('/',(req,res)=>{
	if(req.cookies.user){
		return res.redirect('/chat');
	}
	res.redirect('/login');
});
app.get('/logout',(req,res)=>{
	res.clearCookie('user');
	res.redirect('/login');
})

app.get('/chat',(req,res)=>{
	if(req.cookies.user){
		res.render('chat_main',{username: req.cookies.user});	
	}else{
		res.redirect('/login');
	}
	
});
app.listen(3000);

