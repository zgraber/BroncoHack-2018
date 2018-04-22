const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sqlMethods = require('./sqlMethods.js');
const path = require('path');

var exphbs=require('express-handlebars');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./main.db');

var hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {

        grouped_each: function (every, context, options) {
             var out = "", subcontext = [], i;
             if (context && context.length > 0) {
         for (i = 0; i < context.length; i++) {
            if (i > 0 && i % every === 0) {
                out += options.fn(subcontext);
                subcontext = [];
            }
            subcontext.push(context[i]);
        }
        out += options.fn(subcontext);
    }
    return out;
}
    }
});

app.engine('handlebars',hbs.engine);
app.set('view engine', 'handlebars');

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

app.use(express.static('views'));
app.use(express.static(path.join(__dirname, 'pages')));




app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '\\pages\\prelog\\prelog.html'));
    //res.render('')
});

app.get('/form/:file', function(req, res) {
  res.sendFile(path.join(__dirname + '\\views\\form.html'));
});
app.get('/categories', function(req, res) {
  res.sendFile(path.join(__dirname + '\\views\\categories.html'));
});

//app.get('/categories', function(req, res) {
//  res.render('categories');
//});


const mentorsRouter = require('./controllers/mentors.js');
app.use('/mentors', mentorsRouter);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
