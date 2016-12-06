function registerElementsForTemplate(template, xmlString)
{
	var templateObjName = CanvasViewUtils.titlecase(template);
	console.log(templateObjName);
	var xml = $(xmlString);
	var xmlDoc = $.parseXML(xmlString);
	var xmlJSON = parseDOMChildren(xmlDoc);

//	console.log('template object: %o', CanvasView[templateObj]);

//	console.log(xmlJSON);

	getChildren(templateObjName, xml, 0);
}

function getChildren(templateObjName, xml, currentIndex, rootObj)
{
	if (typeof currentIndex === 'undefined')
		currentIndex = 0;

//	console.log(currentIndex);
//	console.log(xml);
	xml.each(function(index)
	{
		var obj = $(this),
			elementVarName,
			children,
			jqElement;

		if (typeof rootObj === 'undefined' && currentIndex == 0)
		{
			rootObj = obj;
			rootObj = $('form#login_form');
			rootObj.html('');
			console.log('root obj: %o', rootObj);
		}

		// Only tags with a hyphen are custom.
		if (obj[0].localName.indexOf('-') > -1)
		{
			// The first tag in the template is the "root" object, and we won't need to do anything to it
			// right now, but the children will append to it. If we're on the root, just skip this part.
			if (currentIndex > 0)
			{
				elementVarName = CanvasViewUtils.hyphenToCamelcase(obj[0].localName);

				// Check if the element has been defined in js/variables.
				if (window.CV[templateObjName][elementVarName])
				{
					// We're working with a jQuery element now that we've defined in js/variables.
					// Append the element to the parent.
					jqElement = window.CV[templateObjName][elementVarName];
					jqElement = $(jqElement.selector);
	
					console.log(jqElement);
					jqElement.clone().appendTo(rootObj);
				}
			}
		}

//		console.log(elementVarName);

		children = obj.children();
		if (children.length > 0)
		{
			children.each(function()
			{
				getChildren(templateObjName, $(this), currentIndex + 1, rootObj);
			});
		}
	});
}
