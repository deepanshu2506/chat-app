var express = require('express');
var router = express.Router();
const path = require('path');
router.get('/',(req,res)=>{
	//res.sendFile(path.resolve(__dirname+'/../webpages/login_page.html'));
	res.render('login_page');
});

router.get('/authenticate');
module.exports = router;