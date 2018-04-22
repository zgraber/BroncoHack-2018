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
  db.all(sqlMethods.allData('MENTORS'), function(err, rows){
    if(err) {
      console.log(err);
    } else {
      res.send(JSON.stringify(rows));
    }
  })
});

mentorsRouter.get('/:id', (req, res, next) => {
  let id = req.params.id;
  db.get(sqlMethods.selectRow("MENTOR", id), (err, row) =>{
    if(err) {
      console.log('User Not Found');
      res.status(404).send('User Not Found');
    } else {
      res.status(200).send(JSON.stringify(row));
    }
  });
});

mentorsRouter.get('/categories/:category', (req, res, next) => {
  let category = req.params.category;
  db.all(sqlMethods.selectCategories(category), function(err, rows){
    if(err) {
      res.status(404).send('Nothing found');
    } else {
      res.status(200).send(JSON.stringify(rows));
    }
  });
})

mentorsRouter.post('/', (req, res, next) => {
  let body = req.body;
  //console.log(req.body);
  let id;
  db.run(sqlMethods.countUser('MENTORS', function(err, result){
    id = result + 1000;
  }));
  let fname = body.fname;
  let lname = body.lname;
  let category = body.category;
  let description = body.description;
  let img = body.img;
  let username = body.username;
  let pword = body.pword;
  let email = body.email;
  let phone = body.phone;
  //console.log(sqlMethods.newUser(id, fname, lname, category, description, img));
  db.run(sqlMethods.newUser("MENTORS", id, fname, lname, category, description, img, username, pword, email, phone));
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
  db.run(sqlMethods.editUser("MENTORS", fname, lname, category, description, img, id));
  console.log('User Edited');
  res.status(200).send();
});

mentorsRouter.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  db.run(sqlMethods.delUser('MENTORS', id), function (err, result) {
    if(err) {
      res.status(404).send('Not Found');
    } else {
      console.log('User Deleted');
      res.send('User Deleted');
    }
  });
})
