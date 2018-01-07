function footerPositionieren(){
	var windowHeight = window.innerHeight;
	var footerHeight = document.getElementsByClassName("footer")[0].offsetHeight;

	document.getElementsByClassName("footer")[0].style.marginTop = (windowHeight - footerHeight) + "px";
}

footerPositionieren();
