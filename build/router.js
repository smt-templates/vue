var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    console.log(req.query)
    res.send("hello get");
})
router.post('/', function(req, res){
    console.log(req.body)
    res.send("hello post");
})
module.exports = router;