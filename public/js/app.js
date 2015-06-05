$(document).ready(function(){
      
	  Handlebars.registerHelper('list', function(context, options) {
        var ret = "";

        for(var i=0, j=context.length; i<j; i++) {
        ret = ret + options.fn(context[i]);
        }

        return ret;
      });
	  
      var source   = $("#navigation-bar").html();
	  //console.log("Source 1 "  +source);
	  var template = Handlebars.compile(source);
	  
	  var context = {
		  nav: [
		  {url: "http:// ", title: "Home"},
		  {url: "http:// ", title: "About Us"},
		  {url: "http:// ", title: "Club Rules"},
		  {url: "http:// ", title: "Showings"},
		  {url: "http:// ", title: "Events"},
		  {url: "http:// ", title: "Collection"},
		  ]
	  };
	  
	  var el_html = template(context);
	  
	  $("#navigation").html(el_html);

	  source   = $("#entry-template").html();
	  //console.log("Source 2 " + source);
      template = Handlebars.compile(source);
	  
	  context = {title: "My New Post", body: "This is my first post!"};
      el_html = template(context);
	  
	  $("#output").html(el_html);
});