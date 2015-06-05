Theory: I can attempt to use an html file as a handlebars.js context input. By using the different scripts in a page, 
        I could then use each script as a property, passing a content.top as the header and content.bottom as the body.
		Granted, I need a way to determine which template is which in the wrapper page.
		
		
Issues so far: Handlebars looks like it can be pretty flexible with its use of templates, but how can I ensure that the 
		context fits each page? Like wise, I need a way to throw copydecks into the system. I suppose I can control which
		page is which with the wonders of template names, but making that flexible COULD be challenging. And then what happens
		when I make an events page? It's one set template, but a few sources for the input. Am I going to have to make a
		variable in the event template for the event name?