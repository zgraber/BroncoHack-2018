+```javascript
var context = {
    "name: Carter Duncan",
	"occupation" : "Programmer"
};

var templateScript = $("name").html();
var secondTemplateScript = $("occupation").html();

var template = Handlebars.compile(templateScript);
var secondTemplate = Handlebars.compile(templateScript);


$(document.body).appened(template(context);




/*
+```javascript
var context = {
    "name: Carter Duncan",
	"occupation" : "Programmer"
}

var templateScript = Handlebars.templates.demo(context);

document.write(templateScript);

*/