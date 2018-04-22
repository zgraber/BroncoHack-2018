const express = require('express');
var exphbs = require('express-handlebars');

const app = express();
const bodyParser = require('body-parser');
const sqlMethods = require('./sqlMethods.js');
const path = require('path');

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
  db.run(sqlMethods.createTable);
  //db.run(sqlMethods.newUser('1', 'Zak', 'Graber', 'Law', 'asdf', 'path', '1'));
});

db.close();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));



const mentorsRouter = require('./controllers/mentors.js')
app.use('/mentors', mentorsRouter);

app.get('/', function (req, res) {

    res.render('mainPage', {test: "John Smith!!!!"})
});

var data = [
    {
        "ID": 223,
        "FNAME": "Colin",
        "LNAME": "Savior",
        "IMG": "./ayylmoa.jpg"
    },
    {
        "ID": 22123,
        "FNAME": "Cqwolin",
        "LNAME": "Saqwvior",
        "IMG": "./ayyqlmoa.jpg"
    },
    {
        "ID": 2,
        "FNAME": "mett",
        "LNAME": "fukoni",
        "IMG": "./a.jpg"
    },
    {
        "ID": 2231,
        "FNAME": "RE",
        "LNAME": "s",
        "IMG": "./fuck.jpg"
    },
    {
    "ID": 2,
    "FNAME": "William",
    "LNAME": "Henrion",
    "IMG": "./fuck.jpg"
},
{
    "ID": 1234,
    "FNAME": "William",
    "LNAME": "Henrion",
    "IMG": "./fuck.jpg"
}

]

app.get('/mentorList', function (req, res) {

    res.render('mentorList',{data: data});
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
