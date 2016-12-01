function getTemplateNameForPath(path)
{
	var arr = config.pages;
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

$(document).ready(function()
{
	var htmlContainer = $('html'),
		currentTemplate;

	// Check if the current path is in the config.
	currentTemplate = getTemplateNameForPath(window.location.pathname);
	if (currentTemplate !== null)
	{
		htmlContainer.addClass('loading');

		// Load the template.
		$.ajax({
			url: config.host + 'views/' + currentTemplate + '.html',
			method: 'GET',
		}).done(function(data)
		{
			registerElementsForTemplate(currentTemplate, data);
		});
	}

	$('html').removeClass('loading');
//	alert('test');
});