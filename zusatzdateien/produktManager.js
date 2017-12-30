function run(){
	document.title = datenbank[produktID].name;
	document.getElementById("produktName").innerHTML = datenbank[produktID].name;
	document.getElementById("preis").innerHTML = datenbank[produktID].preis;
	document.getElementById("produktDisplay").src = datenbank[produktID].url;
}

function getCookie(cname){
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function einkaufswagen(){
	if (getCookie("produkte").length == 0){
		document.cookie = "produkte=" + "[]" + ";path=/";
	}

	if (JSON.parse(getCookie("produkte")).indexOf(produktID) == "-1"){
		var produkte = JSON.parse(getCookie("produkte"));
		produkte.push(produktID);
		document.cookie = "produkte=" + JSON.stringify(produkte) + ";path=/";
	}
}

run();
