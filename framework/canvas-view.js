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
	var htmlContainer = $('html'),
		currentTemplate;

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

//	alert('test');
});