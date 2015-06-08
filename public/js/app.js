function getNavBar(){
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
		    {anchor: "<a href=''>", title: "Home"},
		    {anchor: "<a href=''>", title: "About Us"},
		    {anchor: "<a href=''>", title: "Club Rules"},
		    {anchor: "<a href=''>", title: "Showings"},
		    {anchor: "<a href=''>", title: "Recommend Anime"},
			{anchor: "<a href=''>", title: "Collection"},
		    {anchor: "<a class='dropdown-button' href='#!'>", title: "Events"},
		  ]
	    };
		var el_html = template(context);
		  
		$("#navigation").html(el_html);
		
		$("<div id='events'></div>").insertAfter(".dropdown-button");
		
		source   = $("#navigation-subbar").html();
		template = Handlebars.compile(source);
		context  = {
			nav: [
			  {anchor: "<a href=''>", title: "KU Con"},
			  {anchor: "<a href=''>", title: "Anime Fest"},
			  {anchor: "<a href=''>", title: "Sushi Night"},
			]
		}
		
		el_html = template(context);
		
		$("#events").html(el_html);
	};
	  

$(document).ready(function(){
      
	  var navigation = getNavBar()
	  
	  var source   = $("#entry-template").html();
	  //console.log("Source 2 " + source);
      var template = Handlebars.compile(source);
	  
	  var context = {title: "My New Post", body: "This is my first post!"};
      var el_html = template(context);
	  
	  $("#output").html(el_html);
});