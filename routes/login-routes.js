var express = require('express');
var router = express.Router();
const path = require('path');
var bodyParser = require('body-parser');
const userController = require('../controller/Users');
const sha256 = require('js-sha256').sha256;

router.use(bodyParser.json()); 
router.use(bodyParser.urlencoded({ extended: true })); 

router.get('/',(req,res)=>{
	//res.sendFile(path.resolve(__dirname+'/../webpages/login_page.html'));
	res.render('login_page');
});


router.post('/authenticate' , (request,response)=>{
	console.log(request.params.password);
	const uAuth = userController.authenticate({username: request.body.username, password: sha256(request.body.password)});	
	uAuth.then(()=>{
		response.redirect('/chat');
	});

	uAuth.catch((errors)=>{
		if(errors.queryExecuted && !errors.passwordMatched){
			response.render('login_page',{error: 'Password not matched'});
		}else if(errors.queryExecuted && !errors.usernameFound){
			response.render('login_page',{error: 'Username not found'});
		}
		else{
			response.render('login_page',{error:'could not process request'});
		}
	});
});
router.get('/authenticate');
module.exports = router;