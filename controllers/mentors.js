const express = require('express');
var db = new sqlite3.Database('./local/main.db');
let sqlMethods = require('./sqlMethods');
const mentorsRouter = express.Router();
module.exports = mentorsRouter;

mentorsRouter.get('/', (req, res, next) => {
  db.get(sqlMethods.getAllMentors, function(err, row){
    if(err) {
      console.log(err);
    } else {
      res.send({

      });
    }
  })
});

mentorsRouter.get('/:id', (req, res, next) => {
  let id = req.params.id;
  
});

mentorsRouter.post('/', (req, res, next) => {

});
