/**
 * Prüft ob Internet Explorer <= 11 genutzt wird
 *
 * @returns {boolean}
 */
function msieversion() {

	let ua = window.navigator.userAgent;
	let msie = ua.indexOf("MSIE ");

	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
		// If Internet Explorer, return version number
		//alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));

		return true;
	}

	return false;
}

$( document ).ready(function() {

	let footer_style = "<style>\n" +
		".ie_footer {\n" +
		"   position: fixed;\n" +
		"   left: 0;\n" +
		"   minHeight: 84px;" +
		"   bottom: 0;\n" +
		"   width: 100%;\n" +
		"   background: #13306a;\n" +
		"   border-bottom: 3px solid #fff;\n" +
		"   color: white;\n" +
		"   text-align: center;\n" +
		"}\n" +
		"</style>\n";

	let footer = "<div class=\"ie_footer\">\n" +
		"<a id=\"ie_footer-button\" role=\"button\" data-toggle=\"collapse\" href=\"\" aria-expanded=\"false\" aria-controls=\"ie_footer\"><b style=\"position: absolute;right: 20px;\"><i class=\"fas fa-times\" aria-hidden=\"true\"></i></a>\n" +
		"</b><b>Verwendung von nicht kompatiblen Browsern</b><br><br>" +
		"Liebe Besucher*innen,<br>"+
		"Sie scheinen unsere Seite mit dem Internet Explorer zu besuchen. Da dieser Browser nicht mehr aktuellen Standards entspricht, kann es passieren, dass Teile der Seite falsch oder gar nicht angezeigt werden. <br>" +
		"Bitte benutzen Sie einen aktuellen Browser wie Firefox, Chrome, Edge, Opera oder Safari um die Seite fehlerfrei anzuzeigen." +
		"</div>";


	if(msieversion()) {
		let div = document.createElement( "div" );
		div.innerHTML = footer_style;
		document.querySelector("#page" ).appendChild( div.firstChild );
		div.innerHTML = footer;
		document.querySelector("#page" ).appendChild( div.firstChild );
	}

	$("#ie_footer-button").on("click", function() {
		$(".ie_footer").remove();
	})
});