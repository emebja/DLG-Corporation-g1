
function reset() {
	totalSum = 0;
	document.getElementById('txtOrder').value = '';
	document.getElementById('showSum').value = ''; 
}



 

function showForm(counter) {
	if (counter == 0)
	{
		if (!document.getElementById('txtOrder').value == '')
		{
			document.getElementById('skicka').setAttribute('style', 'display: inline;');
			document.getElementById('coverBackground').setAttribute('style', 'display: inline;');
			var ORDER = document.getElementById('txtOrder').value; 
			document.getElementById('txtFinalOrder').value = ORDER; 
			document.getElementById('finalSum').value = totalSum + ' kr';
		}
		else
		{
			window.alert('Du måste ha beställt något.');
		}
	}
	else if (counter == 1)
	{
		document.getElementById('skicka').setAttribute('style', 'display: none;'); 
		document.getElementById('coverBackground').setAttribute('style', 'display: none;');
	}
	
}

var totalSum = 0; 




function order(component, price) {
	document.getElementById('txtOrder').value += component + '\t' + price + ' kr\r\n';
	totalSum = totalSum + price;
	document.getElementById('showSum').value = totalSum + ' kr'; 
}


//Det här är räknare. Heter lite konstigt efter att jag provade en sak som inte fungerade,
//men har inte orkat byta tillbaka så nu heter de såhär  
	var infoModerbord = 0; 
	var infoCpu = 0; 
	var infoGraphics = 0; 
	var infoRam = 0; 
	var infoSsd = 0; 
	var infoPsu = 0; 

	

function showInfo(divName) {

	if (divName == "infoModerbord"){
		if (infoModerbord == 0)
		{
			document.getElementById(divName).setAttribute('style', 'display: block;');
			infoModerbord++;
		}
		else if (infoModerbord == 1)
		{
			document.getElementById(divName).setAttribute('style', 'display: none;'); 
			infoModerbord--;
		}
	}
	
	else if (divName == 'infoCpu'){
			if (infoCpu == 0)
		{
			document.getElementById(divName).setAttribute('style', 'display: block;');
			infoCpu++;
		}
		else if (infoCpu == 1)
		{
			document.getElementById(divName).setAttribute('style', 'display: none;'); 
			infoCpu--;
		}
	}
	
	else if (divName == 'infoGraphics'){
		if (infoGraphics == 0)
		{
			document.getElementById(divName).setAttribute('style', 'display: block;');
			infoGraphics++;
		}
		else if (infoGraphics == 1)
		{
			document.getElementById(divName).setAttribute('style', 'display: none;'); 
			infoGraphics--;
		}
	}
	
	else if (divName == 'infoRam'){
		if (infoRam == 0)
		{
			document.getElementById(divName).setAttribute('style', 'display: block;');
			infoRam++;
		}
		else if (infoRam == 1)
		{
			document.getElementById(divName).setAttribute('style', 'display: none;'); 
			infoRam--;
		}
	}
	
	else if (divName == 'infoSsd'){
		if (infoSsd == 0)
		{
			document.getElementById(divName).setAttribute('style', 'display: block;');
			infoSsd++;
		}
		else if (infoSsd == 1)
		{
			document.getElementById(divName).setAttribute('style', 'display: none;'); 
			infoSsd--;
		}
	}
	
	else if (divName == 'infoPsu'){
		if (infoPsu == 0)
		{
			document.getElementById(divName).setAttribute('style', 'display: block;');
			infoPsu++;
		}
		else if (infoPsu == 1)
		{
			document.getElementById(divName).setAttribute('style', 'display: none;'); 
			infoPsu--;
		}
	}	
}

/* Krockar med mailto. 
function validate(){
	
	if (document.getElementById('firstName').value == "")
	{
		document.getElementById('firstName').setAttribute('style', 'border: 1px solid green;'); 
	}

	else
	{
		alert('Det blev else'); 
	}
}
*/