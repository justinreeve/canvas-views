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
//				console.log(name);
//				console.log(title);
//				console.log(link);

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
						<a href="#" class="ic-app-header__menu-list-link" data-name="' + menuitem.name + '"> \
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
		var newItem = selectedMenu.find('a[data-name="' + menuitem.name + '"]');
		newItem.on('click', openPage);
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

	function selectItem(menuitem)
	{
		var name,
			activeClass = 'ic-app-header__menu-list-item--active';

		if (typeof menuitem === 'object')
			name = menuitem.name;
		else
			name = getNameFromTitle(menuitem);

		if (name)
		{
			// De-select whichever option is currently selected.
			selectedMenu.find('li.' + activeClass).removeClass(activeClass);

			// Select the option.
			selectedMenu.find('li[data-name="' + name + '"]').addClass(activeClass);
		}
	}

	// The name of the page should be stored in "data-name."
	function openPage()
	{
		var name = $(this).data('name'),
			page;

		selectItem(name);

		page = new CV.Page(name);
		page.open();
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