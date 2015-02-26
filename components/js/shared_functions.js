// For at undgaa sammenfald i mellem funktionsnavne i concatede .js-filer, saa wrappes
// alle funktioner i en "klasse" som hedder "kvuc_js_class" (navnet er ligegyldigt, det skal bare 
// vaere et unikt navn).
//
// For at anvende en funktion inde i klassen, skal et objektet foerst "instiantieres" fra 
// "klassen" - nedenstaaende linje skal kunskrive een gang:
//
// 				var kvuc = Object.create(kvuc_js_class);
//
// For at anvende funktionen "overlayInfo(title, content, buttontxt)" skrives:
// 
// 				kvuc.overlayInfo(title, content, buttontxt);
//

var kvuc_js_class = {

	// funktion der laver et overlay med information / valg, der forsvinder ved klik hvorsom helst
	// parametre: 
	function overlayInfo(title, content, buttontxt) {}

	//funktion der blander et div_Array

	//funktion der shuffler et Array 

	// Dialog box

	function dialogBox() {

	}

}

