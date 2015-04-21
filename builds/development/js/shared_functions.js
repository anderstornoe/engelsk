// TOUCHPUNCH PLUGIN/
! function(a) {
    function f(a, b) {
        if (!(a.originalEvent.touches.length > 1)) {
            a.preventDefault();
            var c = a.originalEvent.changedTouches[0],
                d = document.createEvent("MouseEvents");
            d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d)
        }
    }
    if (a.support.touch = "ontouchend" in document, a.support.touch) {
        var e, b = a.ui.mouse.prototype,
            c = b._mouseInit,
            d = b._mouseDestroy;
        b._touchStart = function(a) {
            var b = this;
            !e && b._mouseCapture(a.originalEvent.changedTouches[0]) && (e = !0, b._touchMoved = !1, f(a, "mouseover"), f(a, "mousemove"), f(a, "mousedown"))
        }, b._touchMove = function(a) {
            e && (this._touchMoved = !0, f(a, "mousemove"))
        }, b._touchEnd = function(a) {
            e && (f(a, "mouseup"), f(a, "mouseout"), this._touchMoved || f(a, "click"), e = !1)
        }, b._mouseInit = function() {
            var b = this;
            b.element.bind({
                touchstart: a.proxy(b, "_touchStart"),
                touchmove: a.proxy(b, "_touchMove"),
                touchend: a.proxy(b, "_touchEnd")
            }), c.call(b)
        }, b._mouseDestroy = function() {
            var b = this;
            b.element.unbind({
                touchstart: a.proxy(b, "_touchStart"),
                touchmove: a.proxy(b, "_touchMove"),
                touchend: a.proxy(b, "_touchEnd")
            }), d.call(b)
        }
    }
}(jQuery);



// OVERLAY TECHNIQUES:
// http://tympanus.net/codrops/2013/11/07/css-overlay-techniques/


// ============================================
//      WHY / HOW tekst fra MAM
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
        '<span class="right glyphicon glyphicon-remove"></span>' +
        '<div class="clear"></div>' +
        '<h1><span class="OverlayTextHeader"></span></h1>' +
        '<div class="OverlayText"></div>' +
        '</div>',

    JsonWhyHow: {
        "stiliseret_soegning": {
            "why_btntext": "Why-button instruction text",
            "why_content": "Skimming and sorting information are both important abilities to have when you study, this assignment helps you practice them. You also gain knowledge about The American Dream.",
            "how_btntext": "How-button instruction text",
            "how_content": "Start by searching the words and phrases you associate with &quot;The American Dream&quot;, for instance &quot;The American Dream&quot;, identity, &quot;rags to riches&quot;."
        },
        "vid_set_da": {
            "why_btntext": "Why-button instruction text",
            "why_content": "This exercise has a double purpose, on the one hand you practice recognizing different aspects of setting on an actual film and get feedback so you can tell if you are on the right track. On the other hand you get a better understanding of this particular film.",
            "how_btntext": "How-button instruction text",
            "how_content": "Watch the film and answer the questions as you go along. Be sure to read the feedback after each answer."
        },
        "vid_shot_da": {
            "why_btntext": "Why-button instruction text",
            "why_content": "This exercise has a double purpose, one the one hand you practice recognizing different aspects of the area of analysis dealing with shot on an actual film and get feedback so you can tell on you are on the right track. On the other hand you get a better understanding of this particular film.",
            "how_btntext": "How-button instruction text",
            "how_content": "Watch the film and answer the questions as you go along. Be sure to read the feedback after each answer."
        },
        "vid_plot_da": {
            "why_btntext": "Why-button instruction text",
            "why_content": "This exercise has a double purpose, one the one hand you practice recognizing different aspects of plot on an actual film and get feedback so you can tell on you are on the right track. On the other hand you get a better understanding of this particular film.",
            "how_btntext": "How-button instruction text",
            "how_content": "Watch the film and answer the questions as you go along. Be sure to read the feedback after each answer."
        },
        // ------
        "billeddrag_dearamericans_1": {
            "why_btntext": "Why-button instruction text",
            "why_content": "In this exercise you work with understanding the two main characters and their development. You also practice descriptive vocabulary.",
            "how_btntext": "How-button instruction text",
            "how_content": "Watch the first half of the film and choose the words you think describe each character best. Then watch the second half of the film and choose the words you think describe the characters best now."
        },
        "billeddrag_dearamericans_2": {
            "why_btntext": "Why-button instruction text",
            "why_content": "In this exercise you work with understanding the two main characters and their development. You also practice descriptive vocabulary.",
            "how_btntext": "How-button instruction text",
            "how_content": "Watch the second half of the film and choose the words you think describe each character best. Then watch the second half of the film and choose the words you think describe the characters best now."
        },
        // ------
        "vid_an": {
            "why_btntext": "Why-button instruction text",
            "why_content": "This exercise has a double purpose, one the one hand you practice recognizing different aspects of film analysis including both SHOT, SET and PLOTon an actual film and get feedback so you can tell on you are on the right track. On the other hand you get a better understanding of this particular film.",
            "how_btntext": "How-button instruction text",
            "how_content": "Watch the film and answer the questions as you go along. Be sure to read the feedback after each answer."
        },
        "billeddrag_antisocial": {
            "why_btntext": "Why-button instruction text",
            "why_content": "In this exercise you work with understanding the two main characters and their development. You also practice descriptive vocabulary.",
            "how_btntext": "How-button instruction text",
            "how_content": "Watch the film and choose the words you think describe each character best."
        },
        "search_american_dream": {
            "why_btntext": "Why-button instruction text",
            "why_content": "Skimming and sorting information are both important abilities to have when you study, this assignment helps you practice them. You also gain knowledge about The American Dream.",
            "how_btntext": "How-button instruction text",
            "how_content": "Start by searching the words and phrases you associate with &quot;The American Dream&quot;, for instance &quot;The American Dream&quot;, identity, &quot;rags to riches&quot;."
        },
        "search_social_media": {
            "why_btntext": "Why-button instruction text",
            "why_content": "Skimming and sorting information are both important abilities to have when you study, this assignment helps you practice them. You also gain knowledge about social media.",
            "how_btntext": "How-button instruction text",
            "how_content": "Begin by searching for the words you associate with &quot;social media&quot; for instance communication, estrangement, network, online friendship, &quot;selfie&quot;. Refine your search as you learn more."
        },
        "berettermodel": {
            "why_btntext": "Why-button instruction text",
            "why_content": "This assignment lets you practice recognizing plot structure.",
            "how_btntext": "How-button instruction text",
            "how_content": "Look at the material about plot structure, choose the correct term in each phase of the Hollywood model."
        },
        "videoplaylister": {
            "why_btntext": "Why-button instruction text",
            "why_content": "Working with film-analysis is part of the subject of English and to do that in a meaningful way you need the proper vocabulary and an understanding of what to look for. The following video will introduce you to the main film techniques.",
            "how_btntext": "How-button instruction text",
            "how_content": "<ul>" +
                "<li>Get an introduction to film analysis</li>" +
                "<li>Get the content as text</li>" +
                "<li>Get an overview of the three main analysis concepts: set, plot, shot</li>" +
                "<li>Read the helpful questions</li>" +
                "<li>Watch the introduction first. Then go into the film techniques in depth</li>" +
                "</ul>"
        },
        "generisk_videoquiz": {
            "why_btntext": "Why-button instruction text",
            "why_content": "Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo.",
            "how_btntext": "How-button instruction text",
            "how_content": "Lorem ipsum dolor sit amet, ut egestas maecenas iaculis dictumst eros. Donec integer ante vel. Dolor nullam ac, lacus augue. Vel eget auctor, hac nec tortor non aliquam suscipit, rhoncus vulputate nulla enim quam elit consequat, luctus wisi tortor, elit pretium dictum nec sit curabitur. Eget mauris hac, sit nec velit ultricies praesent wisi sit, turpis non ut sapien, velit nunc lorem, arcu venenatis consectetuer esse eget non.Lacinia odio felis, nec in est et, mollis egestas, dui est sociis, esse eu. Ante euismod, ac quis dictum libero rerum, mollis morbi sollicitudin luctus. In felis ipsum mi, aliquet purus aute, lectus quidem odio suscipit, facilisis rutrum sed egestas, faucibus justo."
        },
        "the_conflict_box": {
            "why_btntext": "Learn about how to analyze the conflict between characters.",
            "why_content": "This assignment lets you practice recognizing plot structure.",
            "how_btntext": "Click in the box.",
            "how_content": "Follow the different steps in the document."
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

        $(document).on('click', "#OverlayWhy", function(event) {
            event.preventDefault();

            // alert("WHY");

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
            OverlayTextHeader = "Why";

            console.log("ButtonId: " + ButtonId + ", \nOverlayTextHeader: " + OverlayTextHeader + ", \nOverlayText: " + OverlayText);

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

        $(document).on('click', "#OverlayHow", function(event) {
            event.preventDefault();

            // alert("HOW");

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
            OverlayTextHeader = "How";

            console.log("ButtonId: " + ButtonId + ", \nOverlayTextHeader: " + OverlayTextHeader + ", \nOverlayText: " + OverlayText);

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
    $(".container, .container-fluid").append("<div class='vuc_footer'><hr><h5>Digitale læringsmaterialer på voksenuddannelser</h5><h6>Udviklet af et produktionsfællesskab mellem otte VUC’er til anvendelse på de deltagende skoler: <br/> Hf og VUC Nordsjælland, VUC Hvidovre-Amager VUC Roskilde, VUC Vestegnen, VUF, VUC Storstrøm, VUC Aarhus og Københavns VUC (KVUC). <br/ > Copyright 2015 </h6></div >");
}


/// INDLEJRINGS    FUNKTIONALITET  ///////

function embedlink(url, obj) {

    // alert($(".tab").length);

    var embedMoodle = '<iframe height="570" width="820" src="http://eundervisning-wp.dk/pf_eng2015/' + obj.parent().parent().find("a").eq(0).attr("href") + '"></iframe>';
    var embedFronter = '<embed height="670" width="970" src="http://eundervisning-wp.dk/pf_eng2015/' + obj.parent().parent().find("a").eq(0).attr("href") + '"></embed>';

    var embedArray = [embedMoodle, embedFronter];

    var embedwrapping = "<div class='embedToggle'><p>Indsæt dette link i dit LMS eller webside: </p><div class='tabcontainer'><div class='tab_1 tab activetab'>Fronter(embed)</div><div class='tab_2 tab'>Moodle(iframe)</div></div><div class='togglecontainer'><input class='embedtext' type='text' value='" + embedArray[0] + "'></input><a class='MetaDataLink' href='https://www.youtube.com/watch?v=vjh6z6EACqQ'>Hjælp til indlejning (embedding) </a></div></div>";

    var embedWidth;
    var embedHeight;


    // Klik på embedding knapper funktionalitet:

    //Hvis den man klikker på allerede har en parent...: 
    if (obj.parent().parent().find(".embedToggle").length > 0) {
        $(".embedToggle").slideUp(150, function() {

            $(".embedToggle").remove();
            // Animation complete.
        });

    } else {
        if ($(".embedToggle").length > 0) {
            // console.log("indeks: " + obj.parent().parent().index());
            $(".embedToggle").slideUp(150, function() {

                $(".embedToggle").remove();
                // Animation complete.
                obj.parent().parent().append(embedwrapping);
                $(".embedToggle").slideUp(0);
                $(".embedToggle").slideDown("slow");
                $(".tab").click(function() {

                    var indeks = $(this).index();
                    $(".tab").removeClass("activetab");
                    $(this).addClass("activetab");
                    //alert (indeks);
                    changeLink(indeks);
                });

            });
            //

        } else {
            //console.log("indeks: " + obj.parent().parent().index());
            obj.parent().parent().append(embedwrapping);
            $(".embedToggle").slideUp(0);
            $(".embedToggle").slideDown("slow");
            $(".tab").click(function() {

                var indeks = $(this).index();
                $(".tab").removeClass("activetab");
                $(this).addClass("activetab");
                //alert (indeks);
                changeLink(indeks);
            });
        }
        //alert(obj.parent().html());
    }



    function changeLink(indeks) {

        console.log("clickede på noget")

        $(".embedtext").val(embedArray[indeks]);

    }
}




/// INDLEJLRING SLUT !
