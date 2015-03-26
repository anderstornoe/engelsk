

// OVERLAY TECHNIQUES:
// http://tympanus.net/codrops/2013/11/07/css-overlay-techniques/


// ============================================
// 		WHY / HOW tekst fra MAM
// ============================================
// why:
// Skimming and sorting information are both important abilities to have when you study, this assignment helps you
//  practice them.
// You also gain knowledge about The American Dream.


// how:
// Start med at søge på de ord du forbinder med The American Dream, f.x ordene "The American Dream", identity,
//  "rags to riches"
// ============================================


var GeneralOverlayClass = {


	ButtonControler : 	'<div id="OverlyWhyHowContainer">' + 
							'<a href="#" id="OverlayHow" class="OverlayButton btn btn-primary"> HOW / HELP </a>' + 
							'<a href="#" id="OverlayWhy" class="OverlayButton btn btn-primary"> WHY </a>' + 
					 	'</div>',

	OverlayMarkup : '<div class="Overlay"></div>' + 
   					'<div class="OverlayTextContainer">' + 
   						'<span class="right glyphicon glyphicon-remove-circle"></span>' + 
   						'<div class="clear"></div>' + 
   						'<span class="OverlayTextHeader"></span>' +
   						'<div class="OverlayText"></div>' + 
   					'</div>',

	JsonWhyHow : {
					"stiliseret_soegning" : {
							"why" : "Skimming and sorting information are both important abilities to have when you study, this assignment helps you practice them. You also gain knowledge about The American Dream.",
							"how" : "Start med at søge på de ord du forbinder med The American Dream, f.x ordene &quot;The American Dream&quot;, identity, &quot;rags to riches&quot;."
						},
					"berettermodel" : {
							"why" : "",
							"how" : ""
						},
					"drag_and_drop_plot_da" : {
							"why" : "",
							"how" : ""
						}
				},


	ApplyOverlay: function (Selector, EleraningObj){

		$( Selector ).before( this.ButtonControler );

		var thisObj = this;

		$(window).resize(function () {
			// AKTIVER KUN HVIS OVERLAY SKAL RAMME EN SPECIFIK WRAPPER: 
			// thisObj.ResizeAndPositionOverlayWindow(Selector, ".Overlay");
		});

		$(document).on('click', ".OverlayButton", function(event) {
	        event.preventDefault();

			if ( $( ".Overlay" ).length == 0 )  // Ensures that only one overlay is added.
				$( Selector ).before( thisObj.OverlayMarkup );

			// AKTIVER KUN HVIS OVERLAY SKAL RAMME EN SPECIFIK WRAPPER:
			// thisObj.ResizeAndPositionOverlayWindow(Selector, ".Overlay");

			// $( ".Overlay" ).slideDown( "fast", function() {
			$( ".Overlay" ).fadeIn( "fast", function() {
				$( ".OverlayTextContainer" ).fadeIn( "fast" );
			});

			var OverlayText, OverlayTextHeader;
	        var ButtonId = $(this).prop("id");
	        console.log("ButtonId: " + ButtonId);

	        if (ButtonId == "OverlayWhy") {
	        	OverlayText = thisObj.JsonWhyHow[EleraningObj].why;
	        	OverlayTextHeader = "Why:";
	        }
	        if (ButtonId == "OverlayHow") {
	        	OverlayText = thisObj.JsonWhyHow[EleraningObj].how;
	        	OverlayTextHeader = "How:";
	    	}
	        console.log("ButtonId: " + ButtonId + ", \nOverlayText: " + OverlayText);

	        $( ".OverlayTextHeader" ).html( OverlayTextHeader );
	        $( ".OverlayText" ).html( OverlayText );
		});

		// Naar der klikkes paa overlayet skal overlayet lukke:
		$(document).on('click', ".Overlay", function(event) {
	        event.preventDefault();
			$( ".OverlayTextContainer" ).fadeOut( "fast", function() {
				// $( ".Overlay" ).slideUp( "fast" );
				$( ".Overlay" ).fadeOut( "fast" );
			});
		});

		// Naar der klikkes paa overlay-teksten skal overlayet lukke:
		$(document).on('click', ".OverlayTextContainer", function(event) {
	        event.preventDefault();
			$( ".OverlayTextContainer" ).fadeOut( "fast", function() {
				// $( ".Overlay" ).slideUp( "fast" );
				$( ".Overlay" ).fadeOut( "fast" );
			});
		});

		console.log("FilterCssSelector: " + this.FilterCssSelector( ".Overlay" ) );
	},


	FilterCssSelector: function (Selector){
		return String(Selector).replace(/#/g, '').replace(/\./g, '');
	},


	// Resize overlayet til at matche billedet:
	ResizeAndPositionOverlayWindow: function (WindowSelector, OverlayWindowSelector){
		var Pos = $(WindowSelector).offset();
		$( OverlayWindowSelector ).css({ position: "absolute", top: Pos.top+"px", left: Pos.left+"px"});
		console.log("Pos.top: " + Pos.top + ", Pos.left: " + Pos.left);

		$(OverlayWindowSelector).width( $(WindowSelector).width() );
		$(OverlayWindowSelector).height( $(WindowSelector).height() );
	}

}

var GeneralOverlayObj = Object.create( GeneralOverlayClass );