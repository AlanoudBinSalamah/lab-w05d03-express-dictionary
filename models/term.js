var db = require('../db/config');
var term = {};
// get all the terms from sql using the req.body  
// add it to the res 
// next()


term.getAll =function(req,res,next){
    db.manyOrNone("SELECT * FROM terms;")
    .then(function(result){
    res.locals.terms =result;

    next();
    })
    
    
}


term.create= function(req,res,next) {
    
    var terms = {
        name : req.body.name,
        definition : req.body.definition,   
    } 
    res.locals.term =result;
}



// console.log(req.body);









module.exports = term;

// db.manyOrNone("SELECT * FROM terms;")
// .then(function(result){
//     res.locals.term = result;

//     next
// })