const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sqlMethods = require('./sqlMethods.js');
const path = require('path');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./main.db');

db.serialize(function() {
  db.run(sqlMethods.createMentorTable());
  db.run(sqlMethods.createMentorDataTable());
  db.run(sqlMethods.createSiteDataTable());
  //db.run(sqlMethods.newUser('1', 'Zak', 'Graber', 'Law', 'asdf', 'path', '1'));
});

db.close();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'pages')));



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '\\pages\\prelog\\prelog.html'));
});

app.get('/form/:file', function(req, res) {
  res.sendFile(path.join(__dirname + '\\pages\\form\\form.html'));
});
app.get('/categories/:file', function(req, res) {
  res.sendFile(path.join(__dirname + '\\pages\\categories\\categories.html'));
});



const mentorsRouter = require('./controllers/mentors.js');
app.use('/mentors', mentorsRouter);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
