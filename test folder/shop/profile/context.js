+```javascript
var context = {
	"First Name":"Carter",
	"Last Name":"Duncan",
	"occupation" : "Programmer"
}

var templateScript = Handlebars.templates.demo(context);

document.write(templateScript);
