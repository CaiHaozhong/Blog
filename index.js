function selectBt(listBtId)
{
	document.getElementById(listBtId).style.backgroundColor = "#bbbbbb";	
}
function deselectBt(listBtId)
{
	document.getElementById(listBtId).style.backgroundColor = "#f0f0f0";
}

function show(listId)
{
	var idArray = new Array("list01","list02","list03");
	var btArray = new Array("list01bt", "list02bt", "list03bt");
	for(var i = 0; i < idArray.length; i++)
	{
		var display = document.getElementById(idArray[i]).style.display;
		if(idArray[i] == listId)
		{
			document.getElementById(idArray[i]).style.display = "block";
			selectBt(btArray[i]);			
		}
		else
		{
			document.getElementById(idArray[i]).style.display = "none";
			deselectBt(btArray[i]);
		}
	}
}
