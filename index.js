var express = require('express');
var app = express();

var loginRoutes = require('./routes/login-routes.js');
var registerRoutes = require('./routes/register-routes.js');


app.use(express.static('webpages'));
app.use('/login',loginRoutes);
app.use('/register',registerRoutes);

app.get('/',(req,res)=>{
	res.redirect('/login');
});
app.listen(3000);

