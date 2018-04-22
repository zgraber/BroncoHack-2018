const express = require('express');
//const app = express();
const fs = require('fs');
const busboy = require('connect-busboy')
const bodyParser = require('body-parser');
const path = require('path');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./main.db');
let sqlMethods = require('../sqlMethods');
const mentorsRouter = express.Router();
module.exports = mentorsRouter;
mentorsRouter.use(bodyParser.json());
/*function getRows() {
  db.all(sqlMethods.allData('MENTORS'), function(err, rows){
    if(err) {
      console.log(err);
    } else {
      return rows.length;
    }
  });
}*/

mentorsRouter.use(busboy());


const saveImage = (req, res, next) => {
  //let filePath;
  console.log(req.body);
  var fstream;
  //console.log(req.busboy);
  req.pipe(req.busboy);
  req.busboy.on('file', function (fieldname, file, filename) {
      console.log("Uploading: " + filename);
      let filePath = __dirname + '/userimages/' + filename;
      console.log(filePath);
      req.body['img'] = filePath;
      fstream = fs.createWriteStream(filePath);
      file.pipe(fstream);
      fstream.on('close', function () {
          console.log('success');
          //req.body.fp = filePath;
          //next();
      });
  });
  req.busboy.on('field', function (fieldname, val) {
      console.log("save name");
      req.body[fieldname] = val;
      console.log(val);
  });

  req.busboy.on('finish', function(){
     next();
   });
}

mentorsRouter.get('/', (req, res, next) => {
  db.all(sqlMethods.allData('MENTORS'), function(err, rows){
    if(err) {
      console.log(err);
    } else {
      res.send(JSON.stringify(rows));
    }
  })
});

mentorsRouter.get('/site/:id', (req, res, next) => {
	let id = req.params.id;
	db.get(sqlMethods.getSite(id), (err, row) =>{
		if(err) {
			console.log('User not found');
			res.status(404).send('User not found');
		} else {
			res.status(200).send(JSON.stringify(row));
		}
	});
});

mentorsRouter.get('/:id', (req, res, next) => {
  let id = req.params.id;
  db.get(sqlMethods.selectRow("MENTORS", id), (err, row) =>{
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

mentorsRouter.post('/', saveImage, (req, res, next) => {
  let id = Math.floor(Math.random() * 10000000000);
  console.log(id);
  //console.log(req.headers);
  var str;
  req.on('data', (data) => {
	  //str = data.toString();
	  console.log(data.toString());
  });
  req.on('end', () => {
	  console.log('ok');
  });
  //console.log(str);
  //let index =
  let body = req.body;
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
  db.run(sqlMethods.newUser(id, fname, lname, category, description, img, username, pword, email, phone));
  console.log('User Added');
  res.status(201).redirect('/');
});

mentorsRouter.put('/public', (req, res, next) => {
  let body = req.body;
  let fname = body.fname;
  let lname = body.lname;
  let category = body.category;
  let description = body.description;
  let img = body.img;
  let id = body.id;
  db.run(sqlMethods.editPublicUser(fname, lname, category, description, img, id));
  console.log('User\'s Public Data Edited');
  res.status(200).send();
});

mentorsRouter.put('/private', (req, res, next) => {
	let body = req.body;
	let pword = body.pword;
	let email = body.email;
	let phone = body.phone;
	let id = body.id;
	db.run(sqlMethods.editPrivateUser(pword, email, phone, id));
	console.log('User\'s Private Data Edited');
	res.status(200).send();
});

mentorsRouter.put('/course', (req, res, next) => {
	let body = req.body;
	let id = body.id;
	let profile = body.profile;
	let name = body.name;
	let category = body.category;
	let cdescription = body.cdescription;
	let cname = body.cname;
	let cmaterial = body.material;
	db.run(sqlMethods.fillSite(id, profile, name, category, cdescription, cname, cmaterial));
});

mentorsRouter.put('/generic', (req, res, next) => {
	let body = req.body;
	let id = body.id;
	let table = body.table;
	let column = body.column;
	let data = body.data;
	db.run(sqlMethods.gEdit(table, id, column, data));
	console.log('Table editted');
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
