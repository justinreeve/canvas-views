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
			selectedMenu,
			menuName,
			items;
	
		initMenu(menu);

		function initMenu(menu)
		{
			menuName = menu;

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
					title = $(this).text().trim();
					name = getNameFromTitle(title);
					link = $(this).find('a').attr('href');
//					console.log(name);
//					console.log(title);
//					console.log(link);

					// Add the attributes to the <li> to make later operations either.
					$(this).attr('data-name', name);
					$(this).attr('data-title', title);
				});
			}
		}

		function getNameFromTitle(title)
		{
			return title.replace(/\s+/g, '-').toLowerCase();
		}

		function addItem(menuitem)
		{
			var html = '',
				icon = '';

			if (typeof menuitem !== 'object')
				return;
	
			console.log(menuitem);

			if (typeof menuitem.icon !== 'undefined')
				icon = menuitem.icon;

			if (menuName == 'mainmenu')
			{
				html = '<li class="menu-item ic-app-header__menu-list-item" data-name="' + menuitem.name + '" data-title="' + menuitem.title + '"> \
							<a class="ic-app-header__menu-list-link" href="#"> \
								<div class="menu-item-icon-container" aria-hidden="true"> \
								' + icon + ' \
								</div> \
								<div class="menu-item__text"> \
								' + menuitem.title + ' \
								</div> \
							</a> \
						</li>';
			}
			else if (menuName = 'sectionmenu')
			{
			}

			selectedMenu.append(html);
		}

		// This function accepts either the menuitem object defined in config, or the title.
		function removeItem(menuitem)
		{
			var name;

			if (typeof menuitem === 'object')
				name = menuitem.name;
			else
				name = getNameFromTitle(menuitem);

			selectedMenu.find('li[data-name="' + name + '"]').each(function(index)
			{
				$(this).remove();
			});
		}

		// Public functions
		this.getMainMenu = function()
		{
			return mainMenu;
		}

		this.getSectionMenu = function()
		{
			return sectionMenu;
		}

		this.getSelectedMenu = function()
		{
			return selectedMenu;
		};

		this.addItem = function(data)
		{
			return addItem(data);
		}

		this.removeItem = function(data)
		{
			return removeItem(data);
		}
	}





	var htmlContainer = $('html'),
		currentTemplate;

	// Process menus.
	if (typeof CVConfig.menus !== 'undefined')
	{
		for (var menuname in CVConfig.menus)
		{
			var menu = new CV.Menu(menuname);

			for (var i = 0; i < CVConfig.menus[menuname].length; i++)
			{
				var menuitem = CVConfig.menus[menuname][i];
				if (menuitem.action == 'add')
				{
					menu.addItem(menuitem);
				}
				else if (menuitem.action == 'remove')
				{
					menu.removeItem(menuitem);
				}
				console.log(menuitem);
			}
		}
	}

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