function registerElementsForTemplate(template, html)
{
	var templateObj = CanvasViewUtils.titlecase(template);
	var xmlDoc = $.parseXML(html);
	var xmlJSON = parseDOMChildren(xmlDoc);

	console.log('template object: %o', CanvasView[templateObj]);

	console.log(xmlJSON);

	$(html).each(function(index)
	{
		console.log($(this));
	});
}
