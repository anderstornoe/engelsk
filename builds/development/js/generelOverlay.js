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


    ButtonControler_why: '<div id="OverlyContainerWhy">' +
        '<a href="#" id="OverlayWhy" class="OverlayButton btn btn-default"> WHY </a>' +
        '<span class="OverlayBtnText"></span>' +
        '</div>',

    ButtonControler_how: '<div id="OverlyContainerHow">' +
        '<a href="#" id="OverlayHow" class="OverlayButton btn btn-default"> HOW</a>' +
        '<span class="OverlayBtnText"></span>' +
        '</div>',

    OverlayMarkup: '<div class="Overlay"></div>' +
        '<div class="OverlayTextContainer">' +
        '<span class="right glyphicon glyphicon-remove-circle"></span>' +
        '<div class="clear"></div>' +
        '<span class="OverlayTextHeader"></span>' +
        '<div class="OverlayText"></div>' +
        '</div>',

    JsonWhyHow: {
        "stiliseret_soegning": {
            "why_btntext": "Why-button instruction text",
            "why_content": "Skimming and sorting information are both important abilities to have when you study, this assignment helps you practice them. You also gain knowledge about The American Dream.",
            "how_btntext": "How-button instruction text",
            "how_content": "Start med at søge på de ord du forbinder med The American Dream, f.x ordene &quot;The American Dream&quot;, identity, &quot;rags to riches&quot;."
        },
        "vid_set_da": {
            "why_btntext": "Why-button instruction text",
            "why_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
            "how_btntext": "How-button instruction text",
            "how_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
        },
        "vid_shot_da": {
            "why_btntext": "Why-button instruction text",
            "why_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
            "how_btntext": "How-button instruction text",
            "how_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
        },
        "vid_plot_da": {
            "why_btntext": "Why-button instruction text",
            "why_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
            "how_btntext": "How-button instruction text",
            "how_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
        },
        // ------
        "billeddrag_dearamericans_1": {
            "why_btntext": "Why-button instruction text",
            "why_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
            "how_btntext": "How-button instruction text",
            "how_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
        },
        "billeddrag_dearamericans_2": {
            "why_btntext": "Why-button instruction text",
            "why_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
            "how_btntext": "How-button instruction text",
            "how_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
        },
        // ------
        "vid_an": {
            "why_btntext": "Why-button instruction text",
            "why_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
            "how_btntext": "How-button instruction text",
            "how_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
        },
        "billeddrag_antisocial": {
            "why_btntext": "Why-button instruction text",
            "why_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
            "how_btntext": "How-button instruction text",
            "how_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
        },
        "search_american_dream": {
            "why_btntext": "Why-button instruction text",
            "why_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
            "how_btntext": "How-button instruction text",
            "how_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
        },
        "search_social_media": {
            "why_btntext": "Why-button instruction text",
            "why_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
            "how_btntext": "How-button instruction text",
            "how_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
        },
        "berettermodel": {
            "why_btntext": "Why-button instruction text",
            "why_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
            "how_btntext": "How-button instruction text",
            "how_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
        },
        "videoplaylister": {
            "why_btntext": "Why-button instruction text",
            "why_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
            "how_btntext": "How-button instruction text",
            "how_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
        },
        "generisk_videoquiz": {
            "why_btntext": "Why-button instruction text",
            "why_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
            "how_btntext": "How-button instruction text",
            "how_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
        },
        "the_conflict_box": {
            "why_btntext": "Why-button instruction text",
            "why_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>",
            "how_btntext": "How-button instruction text",
            "how_content": "<p>Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.</p><p>Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.</p>"
        }
    },


    ApplyOverlay_why: function(Selector, EleraningObj) {

        $(Selector).before(this.ButtonControler_why);

        var OverlayBtnText = this.JsonWhyHow[EleraningObj].why_btntext;
        $("#OverlyContainerWhy .OverlayBtnText").html(OverlayBtnText);

        var thisObj = this;

        $(window).resize(function() {
            // AKTIVER KUN HVIS OVERLAY SKAL RAMME EN SPECIFIK WRAPPER: 
            // thisObj.ResizeAndPositionOverlayWindow(Selector, ".Overlay");
        });

        $(document).on('click', ".OverlayButton", function(event) {
            event.preventDefault();

            if ($(".Overlay").length === 0) // Ensures that only one overlay is added.
                $(Selector).before(thisObj.OverlayMarkup);

            // AKTIVER KUN HVIS OVERLAY SKAL RAMME EN SPECIFIK WRAPPER:
            // thisObj.ResizeAndPositionOverlayWindow(Selector, ".Overlay");

            // $( ".Overlay" ).slideDown( "fast", function() {
            $(".Overlay").fadeIn("fast", function() {
                $(".OverlayTextContainer").fadeIn("fast");
            });

            var OverlayText, OverlayTextHeader;
            var ButtonId = $(this).prop("id");
            console.log("ButtonId: " + ButtonId);

            OverlayText = thisObj.JsonWhyHow[EleraningObj].why_content;
            OverlayTextHeader = "Why:";

            console.log("ButtonId: " + ButtonId + ", \nOverlayText: " + OverlayText);

            $(".OverlayTextHeader").html(OverlayTextHeader);
            $(".OverlayText").html(OverlayText);
        });

        this.CloseOverlays();

        console.log("FilterCssSelector: " + this.FilterCssSelector(".Overlay"));
    },


    ApplyOverlay_how: function(Selector, EleraningObj) {

        $(Selector).before(this.ButtonControler_how);

        var OverlayBtnText = this.JsonWhyHow[EleraningObj].how_btntext;
        $("#OverlyContainerHow .OverlayBtnText").html(OverlayBtnText);

        var thisObj = this;

        $(window).resize(function() {
            // AKTIVER KUN HVIS OVERLAY SKAL RAMME EN SPECIFIK WRAPPER: 
            // thisObj.ResizeAndPositionOverlayWindow(Selector, ".Overlay");
        });

        $(document).on('click', ".OverlayButton", function(event) {
            event.preventDefault();

            if ($(".Overlay").length === 0) // Ensures that only one overlay is added.
                $(Selector).before(thisObj.OverlayMarkup);

            // AKTIVER KUN HVIS OVERLAY SKAL RAMME EN SPECIFIK WRAPPER:
            // thisObj.ResizeAndPositionOverlayWindow(Selector, ".Overlay");

            // $( ".Overlay" ).slideDown( "fast", function() {
            $(".Overlay").fadeIn("fast", function() {
                $(".OverlayTextContainer").fadeIn("fast");
            });

            var OverlayText, OverlayTextHeader;
            var ButtonId = $(this).prop("id");
            console.log("ButtonId: " + ButtonId);

            OverlayText = thisObj.JsonWhyHow[EleraningObj].how_content;
            OverlayTextHeader = "How:";

            console.log("ButtonId: " + ButtonId + ", \nOverlayText: " + OverlayText);

            $(".OverlayTextHeader").html(OverlayTextHeader);
            $(".OverlayText").html(OverlayText);
        });

        this.CloseOverlays();

        console.log("FilterCssSelector: " + this.FilterCssSelector(".Overlay"));
    },


    CloseOverlays: function() {

        // Naar der klikkes paa overlayet skal overlayet lukke:
        $(document).on('click', ".Overlay", function(event) {
            event.preventDefault();
            $(".OverlayTextContainer").fadeOut("fast", function() {
                // $( ".Overlay" ).slideUp( "fast" );
                $(".Overlay").fadeOut("fast");
            });
        });

        // Naar der klikkes paa overlay-teksten skal overlayet lukke:
        $(document).on('click', ".OverlayTextContainer", function(event) {
            event.preventDefault();
            $(".OverlayTextContainer").fadeOut("fast", function() {
                // $( ".Overlay" ).slideUp( "fast" );
                $(".Overlay").fadeOut("fast");
            });
        });
    },


    FilterCssSelector: function(Selector) {
        return String(Selector).replace(/#/g, '').replace(/\./g, '');
    },


    // Resize overlayet til at matche billedet:
    ResizeAndPositionOverlayWindow: function(WindowSelector, OverlayWindowSelector) {
        var Pos = $(WindowSelector).offset();
        $(OverlayWindowSelector).css({
            position: "absolute",
            top: Pos.top + "px",
            left: Pos.left + "px"
        });
        console.log("Pos.top: " + Pos.top + ", Pos.left: " + Pos.left);

        $(OverlayWindowSelector).width($(WindowSelector).width());
        $(OverlayWindowSelector).height($(WindowSelector).height());
    }

};

var GeneralOverlayObj = Object.create(GeneralOverlayClass);



/// Jeg spammer lige med en footer (Burde ligge i egen fil..):

function footer() {
    $(".container").append("<div class='vuc_footer'><hr><h5>Digitale læringsmaterialer på voksenuddannelser</h5><h6>Udviklet af et produktionsfællesskab mellem otte VUC’er til anvendelse på de deltagende skoler: Hf og VUC Nordsjælland, VUC Hvidovre-Amager VUC Roskilde, VUC Vestegnen, VUF, VUC Storstrøm, VUC Aarhus og Københavns VUC (KVUC). <br/ > Copyright 2015 </h6></div >");
}
