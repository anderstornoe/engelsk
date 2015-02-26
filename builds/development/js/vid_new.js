var runde = 0;
var events_taeller = 0;
var total_score = 0;
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
            options_text = options_text + "<div id ='" + i + "' class='svar_btn'>" + svar[i] + "</div>";
        } else if (spm.eventtype == "checkbox") {
            options_text = options_text + "<div id ='" + i + "' class='svar_btn'>" + svar[i] + "</div>";
        } else if (spm.eventtype == "info") {
            options_text = "";
            //$(".btn_videre").fadeIn().click(feed);
        }
    }
    $(".popud").html("<h4 class='score'>Question " + (runde + 1) + "/" + stops.length + "&nbsp&nbsp&nbsp&nbsp&nbspCorrect answers: <span class='score_num'>" + total_score + "</span></h4><h3>" + tekst + "(" + spm.eventtype + ")</h3><div class ='svarcontainer'>" + options_text + "</div><div class='btn btn-default btn_videre'>Videre</div>");

    $(".btn_videre").hide();

    if (spm.eventtype == "info") {
       // FAULTY CODE:::
       // $(".btn_videre").fadeIn()
        //$(".btn_videre").click(function() {
          //  $("#overlay").fadeOut(1000);
            //next_event();
        //});

    } else {

        $(".svar_btn").click(function() {

            if (spm.eventtype == "svarknap") {
                $(".svar_btn").removeClass("btn_chosen");
                $(this).addClass("btn_chosen");


            } else {
                $(this).toggleClass("btn_chosen");
            }
        });

        $(".btn_videre").fadeIn().click(commit_answers);

    }

}

function commit_answers() {
    var score = 0;
    var fejl = 0;
    $(".btn_videre").hide();

    if (spm.eventtype == "svarknap") {
        var valgt = $(".btn_chosen").attr("id");
        if (valgt == spm.korrekt) {
            console.log("korrekt!");
            total_score++;
            $(".btn_chosen").css("background-color", "green");
            $(".score_num").fadeOut(20, function() {
                $(".score_num").html(total_score);
                $(".score_num").fadeIn(); // Animation complete.
            });
        } else {
            $(".btn_chosen").css("background-color", "red");
        }
    } else {
        var valgt = [];

        $(".btn_chosen").each(function() {
            var indeks = $(this).index();
            var id = $(this).attr("id");
            if (spm.korrekt.indexOf(id) > -1) {
                $(this).css("background-color", "green");
                score++;
                console.log("korrekt!")
            } else {
                fejl++;
                $(this).css("background-color", "red");
                console.log("ikke korrekt: " + $(this).attr("id") + "," + spm.korrekt[1]);
            }
        });
        if (score >= spm.korrekt.length && fejl == 0) {
            console.log("Alt er korrekt... score: " + score + " antal_ svar: " + spm.korrekt.length);
            total_score++;
            $(".score_num").fadeOut(20, function() {
                $(".score_num").html(total_score);
                $(".score_num").fadeIn(); // Animation complete.
            });
        } else {
            console.log("Ikke Alt er korrekt... score: " + score + "fejl : " + fejl + " antal_ svar: " + spm.korrekt.length);

        }
    }

    $(".svar_btn").each(function() {
        if ($(this).hasClass("btn_chosen")) {

        } else {
            $(this).css("opacity", "0");
        }
    });


    feedback();
}

function feedback() {

    //tween in feedback: 
    $(".svarcontainer").delay(800).fadeOut(1000, function() {

        $(".popud").append("<div class='feedback'><div class='feed_txt'>" + spm.feedback + "</div><div class ='introknap videre_knap'>Continue</div>");
        $(".feedback").fadeOut(0);
        $(".feedback").fadeIn(1000);

        $("#overlay").click(next_event);

    });
}


function next_event() {

    total_spm++;
    events_taeller++;
    console.log("next_event");
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
            //console.log("tal > timestamp_Array.length - 2 ... tal: " + tal + " stops.length: " + stops.length);

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
}

/*$('#overlay').delay(3000).fadeToggle('slow', function() {
    //console.log("fjern overlay");
    resumeVideo();
    events_taeller = 0;
    runde++;
});*/



function slutFeedback() {
    //console.log("slut");

    $(".popud").html("<h3 class = 'forfra'>The quiz is at an end. <br>You answered correctly on " + score + " of " + total_spm + "Questions.</h3><div class='introknap forfra_knap'>Try again</div>");
    $("#overlay").click(function() {
        //console.log ("ost");
        location.reload();
    });
}
