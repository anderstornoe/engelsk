var runde = 0;
var events_taeller = 0;
var score = 0;
var total_spm = 0;
var playing = false;
var player;
var playtime;
var xmlData;
var stops;

var videoId;
var popudwidth;
var popud_left;
var total_spille_tid;


var akt_runde;
var spm;
var spm_length;
var tekst;
var bol;
var svar_length;
var svar;

var m = 0;

var timestamp_Array = [];
var JsonObj;
//XML SKAL SKIFTES UD MED JSON
function loadData(url) {
    $.ajax({
        url: url,
        // contentType: "application/json; charset=utf-8",  // Blot en test af tegnsaettet....
        // dataType: 'json', // <------ VIGTIGT: Saadan boer en angivelse til en JSON-fil vaere! 
        dataType: 'text', // <------ VIGTIGT: Pga. ???, saa bliver vi noedt til at angive JSON som text. 
        async: true, // <------ VIGTIGT: Sikring af at JSON hentes i den rigtige raekkefoelge (ikke asynkront). 
        success: function(data, textStatus, jqXHR) {


            JsonObj = jQuery.parseJSON(data);

            for (var key in JsonObj) {
                var objkey = Object.keys(JsonObj[key]);
                //console.log("objkey:" + objkey);
                if (objkey == "stops") {
                    console.log("bingo: " + objkey);
                    stops = JsonObj[key].stops;
                    //console.log(stops[0].timestamp);
                } else if (objkey == "video") {
                    videoId = JsonObj[key].video;
                }
                //console.log("Stops: " + stops);
            }
            //total_spille_tid = data.find('video').attr('total_tid');
            var lengde = stops.length; //data.find('runde').length;
            popudwidth = 450;
            popud_left = 0; //(bredde / 2) - (popudwidth / 2);

            for (var i = 0; i < lengde; i++) {
                timestamp_Array.push(stops[i].timestamp); //data.find('runde').eq(i).attr('timestamp'));
            }

            setUpTube();

            //console.log (Stops[key].timestamp);
            //console.log ("svarlenght:" + Stops[key].svar.length);
            // console.log("Key : " + Key + ", overskrift_Array : " + overskrift_Array[Key] ); 
            // console.log("JsonObj : " + JSON.stringify(JsonObj)  ); 
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error!!!\njqXHR:" + jqXHR + "\ntextStatus: " + textStatus + "\nerrorThrown: " + errorThrown);
        }
    });

}

/// PLAYER SCRIPT - SETUP tube
function setUpTube() {
    //console.log("sut");
    var tag = document.createElement('script');
    tag.src = "http://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
    //console.log(videoId);
    $("#overlay").toggle();
    player = new YT.Player('player', {
        videoId: videoId,
        playerVars: {
            'id': 'ytPlayer',
            'enablejsapi': 1,
            'allowScriptAccess': 'always',
            'version': 3,
            'controls': 0,
            'showinfo': 0,
            'modestbranding': 1,
            'autoplay': true,
            wmode: 'transparent',
            allowFullScreen: false

        },
        events: {
            'onStateChange': function(event) {

                if (event.data == YT.PlayerState.PLAYING) {
                    playing = true;
                } else {
                    playing = false;
                }
            },

            'onReady': function(event) {

                //introscreen();

                var minutes = Math.floor(player.getDuration() / 60);
                var seconds = Math.floor(player.getDuration() - minutes * 60);

                total_spille_tid = minutes + ":" + seconds;


                // VI Tjekker hver 200 ms om videoen skal stoppes..: 
                setInterval(function() {

                    var playTime = Math.round(player.getCurrentTime());

                    //console.log("update PT" + window.innerWidth + "playerduration: " + player.getDuration());

                    //Gør overlay og timebar responsive:
                    $("#overlay").css("height", $(".embed-responsive").css("height") - 20); //                    $("#time_bar").css("width", player.getCurrentTime() * 10 + "px");
                    $("#time_bar").css("width", (player.getCurrentTime() / player.getDuration()) * window.innerWidth);

                    //Udregn minutter og sekunder til timebar:
                    var s = playTime - (m * 60);
                    if (s > 59) {
                        m++;
                    }

                    var dec_s = s;
                    if (dec_s < 10) {
                        dec_s = "0" + dec_s;
                    }

                    var tid_min_sek = timestamp_Array[runde] - playTime;

                    var tid_sek = tid_min_sek % 60;

                    if (tid_sek < 10) {
                        tid_sek = tid_sek.toString();
                        tid_sek = "0" + tid_sek;
                    }

                    var tid_min = Math.floor(tid_min_sek / 60);
                    if (playing === true) {
                        $('#time').html(m + ":" + dec_s + "<span style ='color:#bbb'>/" + total_spille_tid + "  </span>(Quiz in " + tid_min + ":" + tid_sek + ")");
                    } else {
                        $('#time').html("Video paused");
                    }
                    //console.log(playTime + "," + timestamp_Array[runde] + ", " + player.getPlaybackRate());
                    if (playTime >= timestamp_Array[runde] && playing === true) {
                        playing = false;
                        poseQuestion();
                    }

                }, 200);
            }
        }
    });

    $(".popud").css("width", popudwidth);
    $(".popud").css("left", popud_left);
}

// 4. The API will call this function when the video player is ready.

function poseQuestion() {
    player.pauseVideo();
    stop_event(runde, 0);
}

function resumeVideo() {
    player.playVideo();
}

function introscreen() {
    player.pauseVideo();

    $("#overlay").fadeIn(1000);
    $("#overlay").append("<div class='intro'><div class='h1'>Begin video quiz</div><div class='introknap'>READY!</div></div>");
    $("#overlay").click(function() {

        $(this).fadeOut(1000, function() {
            $(".intro").remove();
            $("#overlay").unbind();
        });
        resumeVideo();
    });
}


function stop_event(tal, taeller) {

    //Hvis det er første event --> fade overlay ind..!

    if (events_taeller === 0) {
        $("#overlay").fadeIn();
    }

    //opdater variabler for stop_event..
    akt_runde = stops[tal];
    spm = akt_runde.events[taeller];
    spm_length = akt_runde.events.length;
    tekst = spm.tekst;
    bol = spm.korrekt;
    svar_length = spm.svar.length;
    svar = spm.svar;


    /////
    var options_text = "";

    //GENERER SVAR MULIGHEDER --> TWEAK IFT Hvilken type det skal være: 

    var eventtype;

    for (var i = 0; i < svar_length; i++) {
        if (spm.eventtype == "svarknap") {
            options_text = options_text + "<tr id ='" + i + "'> <td><div class='svar_btn'>" + svar[i] + "</div></td></tr>";
        } else if (spm.eventtype == "radio") {
            options_text = options_text + "<tr id ='" + i + "'> <td><img src='images/vid/i_valgt.png'></td> <td><span class='imgspan' ><p>" + svar[i] + "</p></span></td></tr>";
        } else if (spm.eventtype == "info") {
            options_text = "<tr><td><span class='imgspan' ><p>" + svar[i] + "</p></span></td></tr>";
        } else if (spm.eventtype == "checkbox") {
            options_text = options_text + "<tr id ='" + i + "'> <td><input type='checkbox' value='" + i + "'><span class='imgspan' ><p>" + svar[i] + "</p></span></td></tr>";
        }
    }
 
    $(".popud").html("<h4>Question " + (runde + 1) + "/" + stops.length + "&nbsp&nbsp&nbsp&nbsp&nbspCorrect answers: " + score + "<h3>" + tekst + "</h3><table>" + options_text + "</table> ");


    $("tr").click(function() {
        total_spm++;
        events_taeller++;

        //Hvis radio eller svarknap ..... et svar 
        if (spm.eventtype == "svarknap" || spm.eventtype == "radio") {
            $("tr").unbind('click');
            $(this).find("img").attr("src", "images/vid/valgt.png");

            var valgt = $(this).attr("id");

            //Klikker på forkert svar:
            if (valgt != bol) {
                $(this).find($(".svar_btn")).css("background-color", "#AF2B40");
                //$("#runde").html("<h4>Quizrunde " + (runde + 1) + ", spørgsmål " + (events_taeller + 1) + " af " + spm_length + "<br/>Din score: " + score + "</h4>");

                //Klikker på korrekt svar:
            } else {
                $(this).find($(".svar_btn")).css("background-color", "#45664b");
                score++;
                $("#runde").html("<h4>Question " + (runde + 1) + "/" + stops.length + "&nbsp&nbsp&nbsp&nbsp&nbspCorrect answers: " + score);
            }
            //Tween trs... suk..:
            $("tr").each(function() {
                if ($(this).attr("id") != valgt) {
                    $(this).css("opacity", "0");
                }
            });


        }
        //Hvis checkboxes
        else if (spm.eventtype == "checkbox") {

        }

        //tween in feedback: 
        $("table").delay(800).fadeOut(1000, function() {

            $(".popud").append("<div class='feedback'><div class='feed_txt'>" + spm.feedback + "</div><div class ='introknap videre_knap'>Continue</div>");
            $(".feedback").fadeOut(0);
            $(".feedback").fadeIn(1000);


            $("#overlay").click(function() {

                console.log("Clickede overlay");
                console.log("tal: " + tal + " stops.length: " + stops.length);


                // hvis der er flere events tilbage i stoppet:
                if (events_taeller < spm_length) {
                    console.log("events_taeller < spm_length. spmtaeller=" + events_taeller + " spm_length=" + spm_length);

                    $(".feedback").remove();
                    $("#overlay").unbind();

                    setTimeout(function() {
                        stop_event(runde, events_taeller);
                    }, 100);
                } else {
                    console.log("events_taeller >= spm_length  spmtaeller=" + events_taeller + " spm_length=" + spm_length);

                    if (runde >= stops.length - 1) {
                        console.log("tal > timestamp_Array.length - 2 ... tal: " + tal + " stops.length: " + stops.length);

                        //NO MORE STOPS ///
                        console.log("case_slut");
                        slutFeedback();
                    } else {

                        $(this).fadeOut(1000, function() {
                            //console.log("intro??")
                            $(".feedback").remove();
                            $("#overlay").unbind();
                            resumeVideo();
                            events_taeller = 0;
                            runde++;
                        });
                    }
                }
            });

        });

        console.log("clickede på tr..");

        /*$('#overlay').delay(3000).fadeToggle('slow', function() {
            //console.log("fjern overlay");
            resumeVideo();
            events_taeller = 0;
            runde++;
        });*/
    });
}

function slutFeedback() {
    //console.log("slut");

    $(".popud").html("<h3 class = 'forfra'>The quiz is at an end. <br>You answered correctly on " + score + " of " + total_spm + "Questions.</h3><div class='introknap forfra_knap'>Try again</div>");
    $("#overlay").click(function() {
        //console.log ("ost");
        location.reload();
    });
}
