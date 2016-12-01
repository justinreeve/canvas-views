var CanvasViewUtils = {
	titlecase : function(str)
	{
		return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	},

	inArrayOfObjects : function(key, value, arr)
	{
		for (var i = 0; i < arr.length; i++)
		{
			if (arr[i].hasOwnProperty(key))
			{
				if (arr[i][key] == value)
					return true;
			}
		}
		return false;
	}

};
