function run(){
	document.title = datenbank[produktID].hersteller + " " + datenbank[produktID].name;
	document.getElementById("produktName").innerHTML = datenbank[produktID].hersteller + " " + datenbank[produktID].name;
	document.getElementById("preis").innerHTML = datenbank[produktID].preis;
	document.getElementById("produktDisplay").src = datenbank[produktID].url;
	document.getElementById("uhrIcon").href = "../bilder/" + datenbank[produktID].bild;

	var splitText = '<iframe src="../zusatzdateien/footer.html" scrolling="no" class="footer"></iframe>';
	var body = document.getElementsByTagName("body")[0];
	var splitHTML = body.innerHTML.split(splitText);
	splitHTML[0] +="Quelle: " + datenbank[produktID].url;
	var joinedHTML = splitHTML.join(splitText);
	body.innerHTML = joinedHTML;

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
		document.cookie = "produkte=" + "[]" + ((window.location.hostname.length > 0) ? ";path=/sites/ClockShop" : ";path=/");
	}
	if (JSON.parse(getCookie("produkte")).indexOf(produktID) == "-1"){
		var produkte = JSON.parse(getCookie("produkte"));
		produkte.push(produktID);
		document.cookie = "produkte=" + JSON.stringify(produkte) + ((window.location.hostname.length > 0) ? ";path=/sites/ClockShop" : ";path=/");
	}
}

run();
