//get the current template from the #href
function fetchTemplate() {
  var hash = window.location.hash || '#home-page';
  return hash.replace(/[/!]/g, '');
};

//created a list of hashes
function hashContexts() {
  //define the context map
  var contextHash = {
    //declare context
    '#home-page': {title: "Welcome to the KU Anime Club", body: "Greetings fellow lover of Japanimation. Welcome to our club!"},
    '#about-page': {},
    '#rules-page' : {},
    '#showings-page' : {},
    '#recommend-page' : {},
    '#collection-page' : {},
    '#kucon-event' : {},
    '#animefest-event' : {},
    '#sushinight-event' : {},
  };
  
  return contextHash;
};

function constructContent() {
  //declare the url hash to a variable
  var currentPage = fetchTemplate();
  
  //in case the current page is an event, change the source
  if (currentPage.contains("-event")) var source = $("event-page").html();
  else var source = $(fetchTemplate()).html();
  
  console.log("Source = " + source);
  console.log("currentPage = " + currentPage);
  
  var template = Handlebars.compile(source);
	  
  //set the template's context from a hash
  //with the same hashvariable used for source
  var contextHash = hashContexts();
  var context = contextHash[currentPage];
  
  console.log("Context = " + contextHash[currentPage]);
  
  //create an insert variable
  var el_html = template(context);
  //place into the context area
  $("#content").html(el_html);
};

function createNav(){
		
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
		    {anchor: "<a href='#home-page'>", title: "Home"},
		    {anchor: "<a href='#about-page'>", title: "About Us"},
		    {anchor: "<a href='#rules-page'>", title: "Club Rules"},
		    {anchor: "<a href='#showings-page'>", title: "Showings"},
		    {anchor: "<a href='#recommend-page'>", title: "Recommend Anime"},
			{anchor: "<a href='#collection-page'>", title: "Collection"},
		    {anchor: "<a class='dropdown-button' href='#!'>", title: "Events"},
		  ]
	    };
		//create an insert variable
		var el_html = template(context);
				
		$("#navigation").html(el_html);
		
		//repeat steps for declaring submenu
		source   = $("#navigation-subbar").html();
		template = Handlebars.compile(source);
		context  = {
			nav: [
			  {anchor: "<a href='!#'>", title: "Events"},
			  {anchor: "<a href='#kucon-event'>", title: "KU Con"},
			  {anchor: "<a href='#animefest-event'>", title: "Anime Fest"},
			  {anchor: "<a href='sushinight-event'>", title: "Sushi Night"},
			]
		}
		
		el_html = template(context);
		
		//console.log(el_html);
		
		//insert the template instead of rendering it in a div tag.
		$(el_html).insertAfter(".dropdown-button");
	};
	  

$(document).ready(function(){
      
	  //create navigation bar
	  var navigation = createNav()
	  
	  constructContent();
});