function getNavBar(){
		
		//Create an iterator helper for lists
		Handlebars.registerHelper('list', function(context, options) {
          var ret = "";

          for(var i=0, j=context.length; i<j; i++) {
            ret = ret + options.fn(context[i]);
            }

          return ret;
        });
	    //recognize the source template
        var source   = $("#navigation-bar").html();
	    //console.log("Source 1 "  +source);
	    var template = Handlebars.compile(source);
	  
	    //set the template's context
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
		//create an insert variable
		var el_html = template(context);
				
		$("#navigation").html(el_html);
		
		//quickly insert a placeholder for the submenu, hide it
		//$("<div id='events'></div>").attr('hidden', true).insertAfter(".dropdown-button");
		$("<div id='events'></div>").insertAfter(".dropdown-button");
		
		//insert a hover event
		//$(".dropdown-button").hover(function(){
		//	$("#events").removeAttr('hidden');
		//},
		//function(){
		//	$("#events").attr('hidden',true);
		//});
		
		//repeat steps for declaring submenu
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
      
	  //create navigation bar
	  var navigation = getNavBar()
	  
	  //compile the body
	  var source   = $("#entry-template").html();
	  //console.log("Source 2 " + source);
      var template = Handlebars.compile(source);
	  
	  var context = {title: "My New Post", body: "This is my first post!"};
      var el_html = template(context);
	  
	  $("#output").html(el_html);
});