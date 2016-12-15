function registerElementsForTemplate(template, xmlString)
{
	var templateObjName = CanvasViewUtils.titlecase(template),
		xml,
		xmlDoc,
		xmlJSON,
		rootObj;

	console.log(templateObjName);

	prepareObj(templateObjName);

	xml = $(xmlString);
	xmlDoc = $.parseXML(xmlString);
	xmlJSON = parseDOMChildren(xmlDoc);

//	console.log('template object: %o', CanvasView[templateObj]);

//	console.log(xmlJSON);

	var obj = getChildren(templateObjName, xml, 0);
	console.log(obj[0].outerHTML);
}

function prepareObj(templateObjName)
{
	if (window.CV[templateObjName])
	{
		var obj = window.CV[templateObjName];
		for (var property in obj)
		{
			if (obj.hasOwnProperty(property))
			{
//				obj[property].html('');
			}
		}
	}
}

function getChildren(templateObjName, xml, currentIndex, parentObj)
{
	var xmlObj = $(xml[0]),
		elementVarName,
		children,
		jqElement;

	console.log(xmlObj);

	if (typeof currentIndex === 'undefined')
		currentIndex = 0;

	// Only tags with a hyphen are custom.
	if (xmlObj[0].localName.indexOf('-') > -1)
	{
		elementVarName = CanvasViewUtils.hyphenToCamelcase(xmlObj[0].localName);

		// Check if the element has been defined in js/variables.
		if (window.CV[templateObjName][elementVarName])
		{
			// We're working with a jQuery element now that we've defined in js/variables.
			// Append the element to the parent.
			jqElement = window.CV[templateObjName][elementVarName];

			// Add any text that was included between the tags.
//			console.log('text content: %o', obj[0].textContent);
			if (typeof xmlObj[0].textContent !== undefined)
				if (xmlObj[0].textContent != '')
					jqElement.text(xmlObj[0].textContent);

//			console.log(jqElement);

//			parentObj.append(jqElement);
//			jqElement.appendTo(rootObj);
		}
	}

	// Standard HTML is just appended to the root object.
	else
	{
//		parentObj.append(obj[0]);
	}

//	console.log(elementVarName);
	children = xmlObj.children();
	if (children.length > 0)
	{
		children.each(function()
		{
			console.log(children.html());
			return getChildren(templateObjName, children, currentIndex + 1);
		});
	}

	return xmlObj;
}
