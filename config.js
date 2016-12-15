console.log(ENV);

var CV = new Object();

// When we're adding menu items, the "name" needs to match the filename of the view.
var CVConfig = {
	"host": "https://canvasassets.wsd.net/development/",
    "pages": [{
        "name": "login",
        "path": "/login/canvas",
	    "template": "login",
    }],
    "menus": {
    	"mainmenu": [
    	{
    		"name": "evolve",
    		"title": "Evolve",
    		"action": "add",
    		"icon" : '<svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--courses" version="1.1" x="0" y="0" viewBox="0 0 280 259" enable-background="new 0 0 280 259" xml:space="preserve"><path d="M226.2 259H32.3c-5.9 0-10.8-4.8-10.8-10.8v-43.5H10.8C4.8 204.8 0 199.9 0 194c0-6 4.8-10.8 10.8-10.8h10.8v-21.6H10.8c-5.9 0-10.8-4.8-10.8-10.8s4.8-10.8 10.8-10.8h10.8v-21.6H10.8c-5.9 0-10.8-4.8-10.8-10.8 0-6 4.8-10.8 10.8-10.8h10.8V75.4H10.8C4.8 75.4 0 70.6 0 64.7s4.8-10.8 10.8-10.8h10.8V10.8c0-6 4.8-10.8 10.8-10.8h193.9c5.9 0 10.8 4.8 10.8 10.8v21.6h32.3c5.9 0 10.8 4.8 10.8 10.8v172.4c0 6-4.8 10.8-10.8 10.8H237v21.9C237 254.2 232.2 259 226.2 259zM43.1 237.4h172.4V21.6H43.1v32.3h10.7c5.9 0 10.8 4.8 10.8 10.8s-4.8 10.8-10.8 10.8H43.1V97h10.7c5.9 0 10.8 4.8 10.8 10.8 0 6-4.8 10.8-10.8 10.8H43.1v21.6h10.7c5.9 0 10.8 4.8 10.8 10.8s-4.8 10.8-10.8 10.8H43.1v21.6h10.7c5.9 0 10.8 4.8 10.8 10.8 0 6-4.8 10.8-10.8 10.8H43.1V237.4zM237 204.8h21.5v-21.6H237V204.8zM237 161.7h21.5v-21.6H237V161.7zM237 118.5h21.5V97H237V118.5zM237 75.4h21.5V53.9H237V75.4zM172.2 129.3H96.9c-5.9 0-10.8-4.8-10.8-10.8V64.7c0-6 4.8-10.8 10.8-10.8h75.3c5.9 0 10.8 4.8 10.8 10.8v53.9C183 124.5 178.2 129.3 172.2 129.3zM107.7 107.8h53.8V75.4h-53.8V107.8z"></path></svg>',
		},
		{
			"name": "commons",
			"action": "remove",
		},
		{
			"name": "help",
			"action": "remove",
		},
		{
			"name": "calendar",
			"action": "remove",
		},
		{
			"name": "0-inbox",
			"action": "remove",
		}],
		"sectionmenu": [
		{
		}],
    },
};