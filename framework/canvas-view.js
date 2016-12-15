function getTemplateNameForPath(path)
{
	var arr = CVConfig.pages;
	for (var i = 0; i < arr.length; i++)
	{
		if (arr[i].hasOwnProperty('path'))
		{
			if (arr[i].path == path)
			{
				return arr[i].template;
			}
		}
	}
	return null;
}

$(function()
{
	CV.Menu = function(menu)
	{
		var mainMenu = $('.ic-app-header__main-navigation ul#menu'),
			sectionMenu = $('#left-side ul#section-tabs'),
			items;
	
		initMenu(menu);
	
		function initMenu(menu)
		{
			var selectedMenu;
	
			if (menu == 'mainmenu')
				selectedMenu = mainMenu;
			else if (menu == 'sectionmenu')
				selectedMenu = sectionMenu;
	
			if (selectedMenu)
			{
				// Retrieve all existing items.
				selectedMenu.find('li').each(function(index)
				{
					var name, title, link;
					console.log($(this).text().trim());
				});
			}
		}
	
		function addItem(data)
		{
		}
	
		function removeItem(title)
		{
		}
	}





	var htmlContainer = $('html'),
		currentTemplate;

	// Process menus.
	var menu = new CV.Menu('mainmenu');
	console.log(menu);

	// Check if the current path is in the config.
	currentTemplate = getTemplateNameForPath(window.location.pathname);
	if (currentTemplate !== null)
	{
		htmlContainer.addClass('loading');

		// Load dependencies before everything else.
		// Load the template.
		$.ajax({
			url: CVConfig.host + 'views/' + currentTemplate + '.html',
			method: 'GET',
			cache: false,
		}).done(function(data)
		{
			registerElementsForTemplate(currentTemplate, data);
			htmlContainer.removeClass('loading');
		}).fail(function()
		{
			htmlContainer.removeClass('loading');
		});
	}
});