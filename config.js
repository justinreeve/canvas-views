console.log(ENV);

var CV = new Object();

// When we're adding menu items, the "name" needs to match the name of the view.
var CVConfig = {
	"host": "https://canvasassets.wsd.net/development/",
    "pages": [{
        "name": "login",
        "path": "/login/canvas",
	    "template": "login",
    }],
    "menus": [{
    	"mainmenu": [
    	{
    		"name": "evolve",
    		"title": "Evolve",
    		"action": "add",
		},
		{
			"name": "commons",
			"title": "Commons",
			"action": "remove",
		}]
    }],
};