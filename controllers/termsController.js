var express = require('express');
var router = express.Router();



var terms = require('../models/term');

//needed routers
router.get('/terms',terms.getAll , function (req,ses){

 

function renderIndex(req,res){

    var mustacheVariables ={
        termList : res.locals.terms,   
    }
    res.render('./term.index', mustacheVariables);  
}


   // get all the data from res
    // render the page , pass the data


// router.get()



















module.exports = router;