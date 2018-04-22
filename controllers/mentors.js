const express = require('express');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./main.db');
let sqlMethods = require('../sqlMethods');
const mentorsRouter = express.Router();
module.exports = mentorsRouter;

mentorsRouter.get('/', (req, res, next) => {
  db.get(sqlMethods.allMentors, function(err, row){
    if(err) {
      console.log(err);
    } else {
      res.send(row);
    }
  })
});

/*mentorsRouter.get('/:id', (req, res, next) => {
  let id = req.params.id;

});*/

mentorsRouter.post('/', (req, res, next) => {
  let body = req.body;

  let id = body.id;
  let fname = body.fname;
  let lname = body.lname;
  let category = body.category;
  let description = body.description;
  let img = body.img;
  let tier = body.tier;

  db.run(sqlMethods.newUser(id, fname, lname, category, description, img, tier));
  res.status(201).redirect('/');
});
