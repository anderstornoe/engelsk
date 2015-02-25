//alert ("Nu skal vi parse!");

var dataArray = ["Affectionate", "Sensitive", "Condescending", "Confident", "Resolute", "Obstinate", "Submissive", "Courageous", "Extrovert", "Talkative", "Reticent", "Introvert", "Prudent", "Sensible", "Illogical", "Perplexed", "Puzzled", "Devastated", "Distressed", "Enraged", "Infuriated", "Thrilled"];
var transArray = ["Kærlig", "Sensitiv", "Nedladende", "Confident", "Resolute", "Stædig", "Underkastet", "Modig", "Udadvendt", "Snakkesalig", "Tilbageholdende", "Indadvendt", "Forsigtig", "Fornuftig", "Ulogisk", "Perpleks", "Forvirret", "Ødelagt", "Fortvivlet", "Vred", "Rasende", "Begejstret"];
var correct_Array = ["0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "1", "1"];


var attempts = 0;

function init() {


    for (var i = 0; i < dataArray.length; i++) {
        console.log("i:" + i);
        $(".draggable_container").append("<div class='draggable'>" + dataArray[i] + "</div>");
    }

    $(".draggable").draggable({
        revert: true,
        drag: function(event, ui) {
            $(this).css("opacity", 1).addClass("draggable-active");
        },
        stop:function(event, ui) {
            $(this).css("box-shadow","none").removeClass("draggable-active");
            $(this).css("opacity", 0.8);
        }
    });

    $(".btn_switch").mousedown(switch_words);
    $(".btn_switch").mouseup(reset_switch_words);

    $(".btn_tjek").click(tjeksvar);



    $(".droppable").droppable({
        drop: function(event, ui) {

            $(this).fadeTo(50, 0.8, function(){
                $(this).fadeTo(300, 1);
            });

            ui.draggable.attr("value", $(this).attr("value"));

            //alert($(".droppable").eq(0).html());

            //$(this).css("opacity", 0)

            
            //ui.draggable.addClass("dropped_" + $(this).index($(".droppable"));

            var myIndex = $(ui.draggable).index();

            $(".draggable").eq(myIndex).draggable({
                revert: 'invalid'
            });

            //alert("dropped!" + $(this));
            //tjeksvar("hejsa");
        }
    });

}

init();

function tjeksvar() {
    var score = 0;
    attempts++;
    $(".draggable").each(function() {
        var indeks = $(this).index();
        console.log(indeks + "," + $(this).attr("value"));
        if ($(this).attr("value") === correct_Array[indeks] && $(this).attr("value") != "2") {
            $(this).css("background-color", "lightgreen");
            console.log("correct!");
            score++;
        } else {
            $(this).css("background-color", "#ddd");
        }

    });
    $(".correct").html("Correct answers: <b>" + score + "</b> Attempts: <b>" + attempts + "</b>");
}

function switch_words() {
    $(".draggable").each(function() {
        if ($(this).attr("value") != "0" && $(this).attr("value") != "1") {
            var indeks = $(this).index();
            //$(".btn_switch").mousedown(switch_words);
    //$(".btn_switch").unbind(reset_switch_words);
            $(this).fadeOut(indeks * 10, function() {
                $(this).html(transArray[indeks]);
                $(this).fadeIn(indeks * 30);
                $(this).css("background-color", "#bbb").css("color", "white");
            });
        }
    });
}

function reset_switch_words() {
    $(".draggable").each(function() {
        if ($(this).attr("value") != "0" && $(this).attr("value") != "1") {
            var indeks = $(this).index();
            $(this).fadeOut((dataArray.length - indeks) * 10, function() {
                $(this).fadeIn((dataArray.length - indeks) * 20);
                $(this).css("background-color", "#ddd").css("color", "black");
                $(this).html(dataArray[indeks]);
            });
        }
    });
}
