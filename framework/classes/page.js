CV.Page = function(pageName)
{
	var htmlContainer = $('html'),
		name = pageName,
		currentTemplate;

	function initData()
	{
	}

	function openTemplate()
	{
		console.log(name);

		htmlContainer.addClass('loading');

		// Load dependencies before everything else.
		// Load the template.
		$.ajax({
			url: CVConfig.host + 'views/' + name + '.html',
			method: 'GET',
			cache: false,
		}).done(function(data)
		{
//			var obj = registerElementsForTemplate(name, data);
//			CV.Common.content.html(obj[0].outerHTML);
			var templateObjName = CanvasViewUtils.titlecase(name),
				templateHtml;

			templateHtml = $('#' + name + '-template').html();
			console.log(templateHtml);

			htmlContainer.removeClass('loading');
		}).fail(function()
		{
			htmlContainer.removeClass('loading');
		});
	}

	// Public functions
	this.open = function()
	{
		return openTemplate();
	}
}