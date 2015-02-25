var runde = 0;
var spm_taeller = 0;
var score = 0;
var total_spm = 0;
var playing = false;
var player;
var playtime;
var xmlData;

var videoId;
var popudwidth;
var popud_left;
var total_spille_tid;

var m = 0;

var timestamp_Array = [];

//XML SKAL SKIFTES UD MED JSON
$.ajax({

    type: "GET",
    url: "../data/vid.xml",
    dataType: "xml",
    success: function(xml) {
        xmlData = xml;
        var tal = 1;
        var data = $(xmlData);
        videoId = data.find('video').attr('videoId');
        //total_spille_tid = data.find('video').attr('total_tid');
        var lengde = data.find('runde').length;
        popudwidth = 450;
        popud_left = 0; //(bredde / 2) - (popudwidth / 2);
        //alert("pul" + popud_left);
        for (var i = 0; i < lengde; i++) {
            timestamp_Array.push(data.find('runde').eq(i).attr('timestamp'));
        }
        setUpTube();

    },
    error: function() {
        //alert("error loading xml");
    }
});


/// PLAYER SCRIPT - SETUP tube
function setUpTube() {
    //alert("sut");
    var tag = document.createElement('script');
    tag.src = "http://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
    //alert(videoId);
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
                    ////////alert ("pølse");
                } else {
                    playing = false;
                    ////////alert ("pølse");
                }
                //  var hallo = player.getCurrentTime();
                ////////alert(hallo);
            },
            'onReady': function(event) {

                introscreen();

                var minutes = Math.floor(player.getDuration() / 60);
                var seconds = Math.floor(player.getDuration() - minutes * 60);

                total_spille_tid = minutes + ":" + seconds;

                setInterval(function() {

                    var playTime = Math.round(player.getCurrentTime());

                    console.log("update PT" + window.innerWidth + "playerduration: " + player.getDuration());

                    $("#overlay").css("height", $(".embed-responsive").css("height") - 20); //                    $("#time_bar").css("width", player.getCurrentTime() * 10 + "px");


                    $("#time_bar").css("width", (player.getCurrentTime() / player.getDuration()) * window.innerWidth);

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
                        $('#time').html("Video on ze halt");
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
    init(runde, spm_taeller);
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


function init(tal, taeller) {

    //alert("runde:" + tal + "spm_taeller" + taeller );

    if (spm_taeller === 0) {
        $("#overlay").fadeToggle();
    }
    $('.popud').fadeIn();
    var data = $(xmlData);


    var runder = data.find('runde').length;

    var akt_runde = data.find('runde').eq(tal);

    var spm = akt_runde.find('spm').eq(taeller);

    var spm_length = akt_runde.find('spm').length;

    var tekst = spm.attr('tekst');

    var bol = spm.attr('korrekt');

    //alert ("bol:" + bol)

    var svar_length = spm.find('svar').length;

    var svar = spm.find('svar');

    var options_text = "";

    //var popud_height = 130 + (svar_length * 30);
    //alert (popud_height);

    //$(".popud").css("height", popud_height);

    for (var i = 0; i < svar_length; i++) {
        options_text = options_text + "<tr id ='" + i + "'> <td><div class='svar_btn'>" + svar.eq(i).attr("value") + "</div></td></tr>";
    }
    //$("#runde").html("<h4>Spørgsmål " + (runde + 1) + "/" + runder + "&nbsp&nbsp&nbsp&nbsp&nbspKorrekte svar: " + score);

    $(".popud").html("<h4>Question " + (runde + 1) + "/" + runder + "&nbsp&nbsp&nbsp&nbsp&nbspCorrect answers: " + score + "<h3>" + tekst + "</h3><table>" + options_text + "</table> ");



    $("tr").click(function() {
        $("tr").unbind('click');
        total_spm++;
        var valgt = $(this).attr("id");

        if (valgt != bol) {
            $(this).find($(".svar_btn")).css("background-color", "#AF2B40");
            //$("#runde").html("<h4>Quizrunde " + (runde + 1) + ", spørgsmål " + (spm_taeller + 1) + " af " + spm_length + "<br/>Din score: " + score + "</h4>");

        } else {

            $(this).find($(".svar_btn")).css("background-color", "#45664b");
            score++;
            $("#runde").html("<h4>Question " + (runde + 1) + "/" + runder + "&nbsp&nbsp&nbsp&nbsp&nbspCorrect answers: " + score);
        }
        $("tr").each(function() {
            if ($(this).attr("id") != valgt) {
                $(this).css("opacity", "0");
            }
        });
        spm_taeller++;



        //feedback: 
        $("table").delay(800).fadeOut(1000, function() {
            //alert("pøllepostejlig!");
            $(".popud").append("<div class='feedback'><div class='feed_txt'>" + spm.attr('feedback') + "</div><div class ='introknap videre_knap'>Continue</div>");
            $(".feedback").fadeOut(0);
            $(".feedback").fadeIn(1000);
            $("#overlay").click(function() {
                if (tal > timestamp_Array.length - 2) {
                    console.log("case_slut");
                    slutFeedback();
                } else {

                    $(this).fadeOut(1000, function() {
                        //console.log("intro??")
                        $(".feedback").remove();
                        $("#overlay").unbind();
                        resumeVideo();
                        spm_taeller = 0;
                        runde++;
                    });
                }

            });

        });

        console.log("case_næste runde");

        /*$('#overlay').delay(3000).fadeToggle('slow', function() {
            //alert("fjern overlay");
            resumeVideo();
            spm_taeller = 0;
            runde++;
        });*/
    });
}

function slutFeedback() {
    //alert("slut");

    $(".popud").html("<h3 class = 'forfra'>The quiz is at an end. <br>You answered correctly on " + score + " of " + total_spm + "Questions.</h3><div class='introknap forfra_knap'>Try again</div>");
    $("#overlay").click(function() {
        //alert ("ost");
        location.reload();
    });
}
