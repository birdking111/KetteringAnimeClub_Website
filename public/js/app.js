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
    '#home-page': {
		title: "Welcome to the KU Anime Club", 
		body: "Greetings fellow lover of Japanimation. Welcome to our club!"
		},
    '#about-page': {
	    title: "About us", 
		section:  [
		  {headline: "Our History at Kettering", article: "Four score and seven years ago..."},
		  {headline: "Our Reputation as a Club", article: "We might not be the most popular, but we are one of the only clubs in Michigan that let's the proper companies know about our public showings, a rule which many clubs neglect."},
		],
		faq:   [
		  {question: "What type of shows do we watch?", response: "We try to have a variety of shows on hand and in the polls."},
		  {question: "How long are the shows we watch?", response: "We will only watch a series that is atmost 26 episodes."},
		  {question: "Can we watch something on Crunchyroll?", response: "We cannot show Crunchyroll due to their terms for public showings."},
		  {question: "Do we watch Hentai?", response: "We do not watch Hentai in club and to clarify matters, judge if an anime is hentai by whether it is or is not worse then Rin: Daughters of Myinosuke."},
		  {question: "At what point will we watch Boku no Pico?", response: "If any of us has Boku no Pico and we vote to watch. Either of which are unlikely."}
		],
	
	},
    '#rules-page' : {
		title: "Club's Rules", 
		body: "Greetings fellow lover of Japanimation. Welcome to our club!"	
	},
    '#showings-page' : {
		title: "What's Playing This Week?", 
		body: "Greetings fellow lover of Japanimation. Welcome to our club!"
	},
    '#recommend-page' : {
		title: "Is There Something You'd Like to See Us Buy?", 
		body: "Greetings fellow lover of Japanimation. Welcome to our club!"
	},
    '#collection-page' : {
		title: "See What Shows We Have In Stock", 
		body: "Greetings fellow lover of Japanimation. Welcome to our club!"
	},
    '#kucon-event' : {
		title: "KU Con", 
		body: "Greetings fellow lover of Japanimation. Welcome to our club!"
	},
    '#animefest-event' : {
		title: "Animefest! Grab Your Pillows!", 
		body: "Greetings fellow lover of Japanimation. Welcome to our club!"
	},
    '#sushinight-event' : {
		title: "Free Sushi Night", 
		body: "Greetings fellow lover of Japanimation. Welcome to our club!"
	},
  };
  
  return contextHash;
};

function constructContent() {
  //Begin declaring helpers
  //Starting with a simple each helper
  
  //Helpers end here
  
  //declare the url hash to a variable
  var currentPage = fetchTemplate();
  
  //in case the current page is an event, change the source
  if (currentPage.contains("-event")) var source = $("event-page").html();
  else var source = $(fetchTemplate()).html();
  
  var template = Handlebars.compile(source);
	  
  //set the template's context from a hash
  //with the same hashvariable used for source
  var contextHash = hashContexts();
  var context = contextHash[currentPage];
  
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
  createNav();
	  
  constructContent();
	  
  window.onhashchange = constructContent;
});