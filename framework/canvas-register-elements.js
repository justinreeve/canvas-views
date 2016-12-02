function registerElementsForTemplate(template, xmlString)
{
	var templateObjName = CanvasViewUtils.titlecase(template);
	console.log(templateObjName);
	var xml = $(xmlString);
	var xmlDoc = $.parseXML(xmlString);
	var xmlJSON = parseDOMChildren(xmlDoc);

//	console.log('template object: %o', CanvasView[templateObj]);

//	console.log(xmlJSON);

	getChildren(templateObjName, xml);
}

function getChildren(templateObjName, xml, currentIndex)
{
	if (typeof currentIndex === undefined)
		currentIndex = 0;

	console.log(xml);
	xml.each(function(index)
	{
		var obj = $(this),
			elementVarName,
			children,
			jqElement;

		// Only tags with a hyphen are custom.
		if (obj[0].localName.indexOf('-') > -1)
		{
			elementVarName = CanvasViewUtils.hyphenToCamelcase(obj[0].localName);

			// Check that the element has been defined in js/variables.
			if (window.CV[templateObjName][elementVarName])
			{
				// We're working with a jQuery element now that we've defined in js/variables.
				// Append the element to the parent.
				jqElement = window.CV[templateObjName][elementVarName];
			}
		}

		console.log(elementVarName);
		children = obj.children();
		if (children.length > 0)
		{
			children.each(function()
			{
				getChildren(templateObjName, $(this));
			});
		}
	});
}
