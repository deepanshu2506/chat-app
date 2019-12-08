const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const User = require('../models/user');
const userController = require('../controller/Users');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true })); 

router.get('/', (req,res) => {
	res.sendFile(path.resolve(__dirname+'/../webpages/register-form.html'));
});

router.post('/add_new_user' , (request,response) =>{
    const user = new User(request.body.firstname,request.body.lastname,request.body.username,request.body.password,request.body.email,request.body.mobile);
    var inserted = userController.createNewUser(user);
    inserted.then(()=>{
        response.redirect('/login');
    });
    inserted.catch((error)=>{
        console.log(error);
    })
});
module.exports = router;