const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true })); 

router.get('/', (req,res) => {
	res.sendFile(path.resolve(__dirname+'/../webpages/register-form.html'));
});

router.post('/add_new_user' , (request,response) =>{
    console.log(request.body)
});
module.exports = router;