

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
   						'<a href="#"><span class="right glyphicon glyphicon-remove"></span></a>' + 
   						'<div class="clear"></div>' + 
   						'<span class="OverlayTextHeader"></span>' +
   						'<div class="OverlayText"></div>' + 
   					'</div>',


// billeddrag_antisocial.html - Her er <link rel="stylesheet" href="css/billeddrag.css" type="text/css" /> også inkluderet på visningssitet - skal den være det?

	JsonWhyHow : {
					"stiliseret_soegning" : {
							"why" : "Skimming and sorting information are both important abilities to have when you study, this assignment helps you practice them. You also gain knowledge about The American Dream.",
							"how" : "Start med at søge på de ord du forbinder med The American Dream, f.x ordene &quot;The American Dream&quot;, identity, &quot;rags to riches&quot;."
						},
					"vid_set_da" : {
							"why" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
							"how" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
						},
					"vid_shot_da" : {
							"why" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
							"how" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
						},
					"vid_set_da" : {
							"why" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
							"how" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
						},
					"vid_plot_da" : {
							"why" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
							"how" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
						},
// ------
					"billeddrag_dearamericans_1" : {
							"why" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
							"how" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
						},
					"billeddrag_dearamericans_2" : {
							"why" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
							"how" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
						},
// ------
					"vid_an" : {
							"why" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
							"how" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
						},
					"billeddrag_antisocial" : {
							"why" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
							"how" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
						},
					"search_american_dream" : {
							"why" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
							"how" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
						},
					"search_social_media" : {
							"why" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
							"how" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
						},
					"berettermodel" : {
							"why" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
							"how" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
						},
					"videoplaylister" : {
							"why" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
							"how" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
						},
					"generisk_videoquiz" : {
							"why" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
							"how" : "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
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
	        	OverlayTextHeader = "<h1>WHY</h1>";
	        }
	        if (ButtonId == "OverlayHow") {
	        	OverlayText = thisObj.JsonWhyHow[EleraningObj].how;
	        	OverlayTextHeader = "<h1>HOW</h1>";
	    	}
	        console.log("ButtonId: " + ButtonId + ", \nOverlayText: " + OverlayText);

	        $( ".OverlayTextHeader" ).html( OverlayTextHeader );
	        $( ".OverlayText" ).html( "<h4>" + OverlayText + "</h4>" );

   	        var ButtonLeft = $(this).css("left");
   	        var ButtonTOP = $(this).css("top");
   	        console.log("top: "+ButtonTOP+" left: "+ButtonLeft);

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