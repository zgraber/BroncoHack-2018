const express = require('express');
//const app = express();
const bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./main.db');
let sqlMethods = require('../sqlMethods');
const mentorsRouter = express.Router();
module.exports = mentorsRouter;
//app.use(bodyParser.json());
mentorsRouter.get('/', (req, res, next) => {
  db.all(sqlMethods.allMentors, function(err, rows){
    if(err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  })
});

mentorsRouter.get('/:id', (req, res, next) => {
  let id = req.params.id;
  db.get(sqlMethods.mentor(id), (err, row) =>{
    if(err) {
      console.log('User Not Found');
      res.status(404).send('User Not Found');
    } else {
      res.status(200).send(row);
    }
  });
});

mentorsRouter.post('/', (req, res, next) => {
  let body = req.body;
  //console.log(req.body);
  let id = body.id;
  let fname = body.fname;
  let lname = body.lname;
  let category = body.category;
  let description = body.description;
  let img = body.img;
  let tier = body.tier;
  //console.log(sqlMethods.newUser(id, fname, lname, category, description, img, tier));
  db.run(sqlMethods.newUser(id, fname, lname, category, description, img, tier));
  console.log('User Added');
  res.status(201).redirect('/');
});

mentorsRouter.put('/:id', (req, res, next) => {
  let body = req.body;
  let id = req.params;
  let fname = body.fname;
  let lname = body.lname;
  let category = body.category;
  let description = body.description;
  let img = body.img;
  let tier = body.tier;
  db.run(sqlMethods.editUser(fname, lname, category, description, img, tier, id));
  console.log('User Edited');
  res.status(200).send();
});
