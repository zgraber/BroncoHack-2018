const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sqlMethods = require('./sqlMethods.js');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./main.db');

db.serialize(function() {
  db.run(sqlMethods.createTable);
});

db.close();

ap.use(bodyParser.json());

const mentorsRouter = require('./controllers/mentors.js')
app.use('/mentors', mentorsRouter);

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
