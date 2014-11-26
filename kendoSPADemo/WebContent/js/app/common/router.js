var router = new kendo.Router({
	routeMissing: function(e) {
		router.navigate("#404");
	}
});

router.route("/", function() {
	router.navigate("#login");	
});

router.route("login", function() {
	templateLoader.loadExtTemplate("views/login.tmpl.html", "content");
});

router.route("admin", function() {
	templateLoader.loadExtTemplate("views/admin/admin.tmpl.html", "content");
});

router.route("main", function() {
	templateLoader.loadExtTemplate("views/main/main.tmpl.html", "content");
});

router.route("/tree(/:name)", function(name) {
	var data = {text : name};
	templateLoader.loadExtTemplateWithData("views/main/treenode.tmpl.html", "wrapper", data);

});

router.route("404", function() {
	templateLoader.loadExtTemplate("views/404.tmpl.html", "content");
});


$(function() {
	router.start();
});