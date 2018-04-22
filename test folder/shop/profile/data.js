+```javascript
var context = {
    name: "Carter Duncan",
	occupation : "Programmer",
	supporters : "1,000"
};

var templateScript = Handlebars.templates.demo(context);

document.write(templateScript);

/*
var templateScript = $("name").html();


var template = Handlebars.compile(templateScript);



$(document.body).appened(template(context);

*/


/*
+```javascript
var context = {
    "name: Carter Duncan",
	"occupation" : "Programmer"
}

var templateScript = Handlebars.templates.demo(context);

document.write(templateScript);

*/