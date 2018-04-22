(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['demo'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<!--========= demo.handlebars ==========-->\n<div>\n  My name is "
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + ". I am a "
    + alias3(((helper = (helper = helpers.occupation || (depth0 != null ? depth0.occupation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"occupation","hash":{},"data":data}) : helper)))
    + ".	\n</div>";
},"useData":true});
})();
