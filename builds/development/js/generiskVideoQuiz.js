//######################################################################################
// 								Video loader
//###################################################################################### 


// FALLBACK MARK 14:34

var VideoObj = {};

var VideoClass = {
    startFrameTitle: null,
    startButtonTitle: null,
    EmbedURL: null,
    WatchURL: null,
    BasicYoutubeEmbedStr: 'https://www.youtube.com/embed/',
    BasicYoutubeWatchStr: 'https://www.youtube.com/watch?v=',
    DefaultNoVideoImg: 'https://iec2014.intel.com/fancybox/gallery/2012/photo/no-video.jpg',
    QustionObj: {},
    AddVideoProp: function(URL) {
        this.EmbedURL = URL;
    },
    DeleteSelections: function() {
        this.startFrameTitle = null;
        this.startButtonTitle = null;
        this.EmbedURL = null;
        $("#video_startFrameTitle").val("");
        $("#video_startButtonTitle").val("");
        $("#video_width").val("");
        $("#video_height").val("");
        $("#video_url").val("");
        $("#PlayerVideoView").attr("src", this.DefaultNoVideoImg);
    },
    LoadDefaultVideo: function() {
        this.startFrameTitle = "Game of Thrones";
        this.startButtonTitle = "Play the video";
        this.EmbedURL = this.BasicYoutubeEmbedStr + "s7L2PVdrb_8";
        this.WatchURL = this.BasicYoutubeWatchStr + "s7L2PVdrb_8";
        $("#video_startFrameTitle").val(this.startFrameTitle);
        $("#video_startButtonTitle").val(this.startButtonTitle);
        $("#video_width").val(this.Width);
        $("#video_height").val(this.Height);
        $("#video_url").val(this.EmbedURL);
    },
    LoadVideo: function() {
        this.startFrameTitle = $("#video_startFrameTitle").val();
        this.startButtonTitle = $("#video_startButtonTitle").val();
        var TempURL = $("#video_url").val();
        this.EmbedURL = this.BasicYoutubeEmbedStr + this.ReturnYoutubeVidId(TempURL);
        this.WatchURL = this.BasicYoutubeWatchStr + this.ReturnYoutubeVidId(TempURL);
        $("#PlayerVideoView").attr("src", this.EmbedURL);
    },
    DisplayJsonML: function() {
        $("#output").html(JSON.stringify(this));
    },
    LoadDefaultNoVideoImgIfNoVideoIsChosen: function(){
        if ( (this.EmbedURL === null) || (this.EmbedURL === "") ){
            $("#PlayerVideoView").prop('src', this.DefaultNoVideoImg);
        } 
    },
    ReturnYoutubeVidId: function(url) {
        var UrlParts = (url.indexOf("?v=") !== -1) ? url.split("?v=") : url.split("/");
        return UrlParts[UrlParts.length - 1];
    }

};



//######################################################################################
// 								User interface
//###################################################################################### 



// QuestionField
var QuestionField = '<div class="QuestionField">' +
    '<input type="text" class="TextField w25" placeholder="Svarmulighed" name="Question"/>' +
    '<input type="radio" name="Rsvar" class="Rsvar"/>' +
    '<input type="checkbox" name="Csvar" class="Csvar"/>' +
    ' (korrekt svar) ' +
    '<a class="addfield ml10" href="#"> Tilf&oslash;j svarmulighed </a> <a class="removefield ml10" href="#"> Fjern svarmulighed </a>' +
    '</div>';

// EventForm  -  NOTE: "Event" er det tidligere "Runde"
var EventForm = '<form class="EventForm">' +
    '<b class="ml10"> Sp&oslash;rgsm&aring;l 1</b>' +
    ' <a class="removeform ml10" href="#"> Fjern sp&oslash;rgsm&aring;l  </a><a class="addform ml10 " href="#"> Tilf&oslash;j et ekstra sp&oslash;rgsm&aring;l </a>' +
    '<div class="clear"></div> <br/>' +
    // '<input type="text" class="TextField w25" name="EventHeader" placeholder="Eventoverskrift" /> <br/>' +
    '<textarea rows="4" class="TextField w25" name="EventInfo" placeholder="Sp&oslash;rgsm&aring;l"></textarea> <br/>' +
    '<div class="QuestionWrapperButton p10 bgc-E0E0E0 b-blue"><span class="glyphicon glyphicon-chevron-right"></span> Svar og feedback  </div>' +
    '<div class="QuestionWrapper bgc-E0E0E0 b-blue dhide">' +
    '<input type="radio" name="valg" value="radiobutton" checked="checked"/> En svarmulighed <br/>' +
    '<input type="radio" name="valg" value="checkbox"/> Flere svarmuligheder' +
    '<div class="QuestionFieldWrapper">' +
    QuestionField +
    QuestionField +
    '</div>' +
    '<textarea rows="4" class="TextField w25" name="EventFeedback" placeholder="Giv feedback til kursisten"></textarea> <br/>' +
    '</div>' +
    '</form>';

// TimestampForm  -  NOTE: "Timestamp" er synonym med "Stop"
var TimeStampForm = '<div class="TimeStampForm">' +
    '<form class="class_TimeStampForm p10">' +
    '<b> Stop 1 : </b>' +
    // GenerateNumberSelect(0, 24, "tt", "SelectHour") + " : " +
    GenerateNumberSelect(0, 60, "mm", "minutter", "SelectMin") + " : " +
    GenerateNumberSelect(0, 60, "ss", "sekunder", "SelectSec") +
    // ' eller <input type="text" placeholder="tt:mm:ss" />' +
    '</form>' +
    '<a class="remove_TimeStampForm ml10" href="#"> Fjern stop </a> <a class="add_TimeStampForm ml10" href="#"> Tilf&oslash;j et ekstra stop </a> ' +
    EventForm +
    '</div>';


function InitHTML(Selector, HtmlToBeAdded) {
    $(Selector).append(HtmlToBeAdded);
    SetDualSwitchState(Selector + " .EventForm ");
}


function UpdateNumbersInFormHeaders(){

    $(".class_TimeStampForm > b").each(function(index1, element1) {
        $(this).html("Stop " + (index1 + 1).toString() + " : ");
        var ParentObj = $(this).closest(".TimeStampForm");
        $(".EventForm > b", ParentObj).each(function(index2, element2) {
            $(this).html("Sp&oslash;rgsm&aring;l " + (index2 + 1).toString() );
        });
    });
}


// VIGTIGT: Chromium tillader ikke default argumentet Max at blive angivet som "Max = false". 
function AddElement(Selector, HtmlToBeAdded, Max) {
    $(document).on('click', Selector, function(event) {
        event.preventDefault();
        var ParentClassName = $(this).parent().attr("class");
        var NumOfParents = $(this).parent().siblings("." + ParentClassName).length + 1;
        console.log("NumOfParents : " + NumOfParents + ", ParentClassName: " + ParentClassName);
        if ((Max > NumOfParents) || (Max === false)) {
            $(this).parent().after(HtmlToBeAdded);

            // The following two lines "breaks" the generality of this function: 
            var NextParent = $(this).parent().next();
            CheckEventFormPosition(NextParent); // Sets the state: "radio button" or "checkbox".
        } else {
            alert("Det største antal tilladte elementer er " + Max);
        }

        // The following two lines "breaks" the generality of this function: 
        UpdateNumbersInFormHeaders();
        if (Selector == ".add_TimeStampForm") CheckTimeStopValues();
    });
}

// VIGTIGT: Chromium tillader ikke default argumentet Min at blive angivet som "Min = false". 
function RemoveElement(Selector, Min) {
    $(document).on('click', Selector, function(event) {
        event.preventDefault();
        var ParentClassName = $(this).parent().attr("class");
        var NumOfParents = $(this).parent().siblings("." + ParentClassName).length + 1;
        console.log("NumOfParents : " + NumOfParents + ", ParentClassName: " + ParentClassName);
        if ((Min < NumOfParents) || (Min === false)) {
            $(this).parent().remove();
        } else {
            alert("Det mindste antal elementer skal være " + Min);
        }

        UpdateNumbersInFormHeaders();
    });
}


// VIGTIGT: Der er en bedre metode til at fylde variable ind i objekter - se: 
// 			JQuerys funktion ".serializeArray()" :
// 			http://api.jquery.com/serializearray/
function GetFormsData(Selector_FormContainer) {
    var JSONarray = [];
    var FormObj = {};
    $(Selector_FormContainer + " .TimeStampForm").each(function(index, element) {
        FormObj.Index = index; // Only for testing
        FormObj.TimeStamp = $(" form.class_TimeStampForm", this).serializeArray();
        console.log("element : " + $(" form.class_TimeStampForm", this).get(0).tagName);
        var EventFormArray = [];
        $(" form.EventForm", this).each(function(index2, element2) {
            EventFormArray.push($(element2).serializeArray());
        });
        FormObj.EventForm = EventFormArray;
        JSONarray.push(FormObj);
        console.log("FormObj : " + JSON.stringify(FormObj));
        FormObj = {};
    });
    console.log("JSONarray : " + JSON.stringify(JSONarray));

    return JSONarray;

    // $("#JsonOutput").html( JSON.stringify( JSONarray, null, 4 ) );
}


function CheckTimeStopValues(){
    // $('select').on('change', function() {  
        var NumOfTimestamps = $(".class_TimeStampForm").length;
        var TimestampObj = {};
        $(".class_TimeStampForm").each(function(index, element) {
            var mmssObj = {mm : null, ss : null};
            mmssObj.mm = $("select[name='mm']", element).val();
            mmssObj.ss = $("select[name='ss']", element).val();
            console.log("mm : " + JSON.stringify(mmssObj.mm) + ", ss : " + JSON.stringify(mmssObj.ss) );
            TimestampObj[index] = mmssObj;
        });
        console.log("TimestampObj : " + JSON.stringify(TimestampObj) );
    // });
}


function GenerateNumberSelect(MinNum, MaxNum, NameVal, UserVal, ClassSelector) {
    var HTML = '<select name="' + NameVal + '" class="' + ClassSelector + '">';
    HTML += (UserVal !== false) ? '<option selected disabled>' + UserVal + '</option>' : '';
    for (var i = MinNum; i <= MaxNum; i++) {
        HTML += '<option value="' + i + '">' + i + '</option>';
    }
    HTML += '</select>';

    return HTML;
}


function SetDualSwitchState(this_obj) {
    if ($('input[value=radiobutton]', this_obj).is(':checked')) {
        $('.Csvar', this_obj).hide();
        $('.Rsvar', this_obj).show();
        $('.Csvar', this_obj).removeAttr('checked'); // This deletes the former choice...
        console.log("Csvar hide");
    }
    if ($('input[value=checkbox]', this_obj).is(':checked')) {
        $('.Csvar', this_obj).show();
        $('.Rsvar', this_obj).hide();
        $('.Rsvar', this_obj).removeAttr('checked'); // This deletes the former choice...
        console.log("Rsvar hide");
    }
    console.log("radiobutton:" + $('input[value=radiobutton]', this_obj).is(':checked'));
    console.log("checkbox:" + $('input[value=checkbox]', this_obj).is(':checked'));
}


function RadioButtonDualSwitch(Selector_radiobutton) {
    $(document).on('click', Selector_radiobutton, function(event) {
        var Parent = $(this).parent();
        console.log(" ThisTagName " + $(this).get(0).tagName + ", Parent " + Parent.get(0).tagName);
        SetDualSwitchState(Parent);
    });
}


function CheckEventFormPosition(this_obj) {
    var ClosestEventForm = $(this_obj).closest(".EventForm");
    var ClosestEventForm_class = ClosestEventForm.attr("class");
    console.log("ClosestEventForm_class : " + ClosestEventForm_class);
    console.log("this_obj name : " + this_obj.get(0).tagName);
    if (typeof(ClosestEventForm_class) !== "undefined") { // If QuestionField or EventForm is added...
        SetDualSwitchState(ClosestEventForm);
    } else { // If TimeStampForm is added...
        $('.Csvar', this_obj).hide();
        $('.Rsvar', this_obj).show();
    }
}


function QuestionWrapperButtonControl(Selector) {
    $(document).on('click', Selector, function(event) {
        event.preventDefault();
        var EventFormObj = $(this).parent();
        $(".QuestionWrapper", EventFormObj).toggleClass("dhide");
        $(".QuestionWrapper", EventFormObj).slideToggle();
        if ($(".QuestionWrapper", EventFormObj).prop("class").indexOf("dhide") !== -1)
            $(".QuestionWrapperButton", EventFormObj).html('<span class="glyphicon glyphicon-chevron-right"></span> Svar og feedback');
        else
            $(".QuestionWrapperButton", EventFormObj).html('<span class="glyphicon glyphicon-chevron-down"></span> Skjul svar og feedback');
    });
}


//######################################################################################
// 								Regenerate form-state
//###################################################################################### 


// NOTE: IE < 9 understoetter ikke:   Object.keys(a).length;
//		http://stackoverflow.com/questions/5533192/how-to-get-object-length 
function ReturnObjKeyNames(Obj) {
    var count = 0;
    var KeyArray = [];
    for (var KeyName in Obj) {
        if (Obj.hasOwnProperty(KeyName)) {
            count++;
            KeyArray.push(KeyName);
        }
    }
    console.log("count: " + count + ", KeyArray: " + KeyArray);
    return KeyArray;
}

// MARK
function ReGenerateForm(json, Selector) {

        $(Selector).css("border-width", "5"); // SET EN BRED BORDER, SAA MAN KAN SE AT FUNKTIONEN ER AKTIV!!!

        console.log("json: " + JSON.stringify(json));

        $("#video_startFrameTitle").val(json.startFrameTitle);
        $("#video_startButtonTitle").val(json.startButtonTitle);
        $("#video_url").val(json.URL);

        console.log("json.startFrameTitle: " + json.startFrameTitle + ", json.startButtonTitle: " + json.startButtonTitle + ", json.URL: " + json.URL);

        var QD = json.QuizData;

        // Assume JS is array
        for (var key in QD) {

            if (typeof(QD[key].TimeStamp) !== "undefined") {
                if (key === 0) { // if Selector is empty - eg. not prior TimeStampForms...
                    $(Selector).html(TimeStampForm);
                    console.log('#####  TRUE - key: ' + key);
                } else { // if Selector already has one or more TimeStampForms...
                    $(Selector + " .TimeStampForm:last-child").after(TimeStampForm);
                    console.log('#####  FALSE - key: ' + key);
                }
                // Remove all QuestionFields from the newly made TimeStampForms:
                $(".TimeStampForm:last-child .QuestionField").remove();



                console.log('----- QD[key].TimeStamp.length: ' + QD[key].TimeStamp.length);
                if (QD[key].TimeStamp.length > 0) {
                    for (var Tkey in QD[key].TimeStamp) {
                        var TObj = QD[key].TimeStamp[Tkey];
                        $(".TimeStampForm:last-child select[name='" + TObj.name + "']").val(TObj.value);
                        console.log("TObj.name: " + TObj.name + ", TObj.value: " + TObj.value);
                    } // END for
                } // END if

                if (typeof(QD[key].EventForm) !== "undefined") {

                    console.log('----- QD[key].EventForm.length: ' + QD[key].EventForm.length);

                    if (QD[key].EventForm.length > 0) {

                        for (var key1 in QD[key].EventForm) { // Each key1 is an EventForm
                            if (key1 > 0) {
                                $(".TimeStampForm:last-child .EventForm:last-child").after(EventForm);

                                // Remove all QuestionFields from the newly made TimeStampForms:
                                $(".TimeStampForm:last-child .EventForm:last-child .QuestionField").remove();
                            }

                            var QFWrap = $(".TimeStampForm:last-child .EventForm:last-child .QuestionFieldWrapper");

                            var Wrap = $(".TimeStampForm:last-child .EventForm:last-child");

                            for (var key2 in QD[key].EventForm[key1]) { // Each key2 is an input-tag
                                var Obj = QD[key].EventForm[key1][key2];

                                if (Obj.name == "Question") {
                                    // Append a newly created QuestionField to the current EventForm for each time
                                    // an input-field "Question" is incountered. 
                                    $(QuestionField).appendTo(QFWrap);
                                    $("div:last-child input[name='Question']", QFWrap).val(Obj.value);
                                }

                                if (Obj.name == "EventHeader") {
                                    $("input[name='EventHeader']", Wrap).val(Obj.value);
                                    // console.log("==== TEXT: " + $("div input[name='EventHeader']", Wrap).parent().get(0).tagName );
                                }

                                if (Obj.name == "EventInfo") {
                                    $("textarea[name='EventInfo']", Wrap).val(Obj.value);
                                }

                                if (Obj.name == "EventFeedback") {
                                    $("textarea[name='EventFeedback']", Wrap).val(Obj.value);
                                }

                                if (Obj.name == "Rsvar") {
                                    $("div:last-child input[name='Rsvar']", QFWrap).prop('checked', true);
                                }

                                if (Obj.name == "Csvar") {
                                    $("div:last-child input[name='Csvar']", QFWrap).prop('checked', true);
                                }

                                if (Obj.name == "valg") { // The if-statement makes it run only once pr EventForm:
                                    $("input[name='valg'][value='" + Obj.value + "']", Wrap).prop('checked', true);
                                }

                                console.log("key1: " + key1 + ", key2: " + key2 +
                                    "\nObj: " + JSON.stringify(Obj));
                            } // END for

                            SetDualSwitchState(Wrap); // Set all DualSwitchState to match the selected states.
                        } // END for
                    } // END if
                } // END if EventForm
            } // END if TimeStamp
        } // END for
    } // END function


function ReturnYoutubeVidId(url) {
    var UrlParts = (url.indexOf("?v=") !== -1) ? url.split("?v=") : url.split("/");
    return UrlParts[UrlParts.length - 1];
}

console.log("ReturnYoutubeVidId embed : " + ReturnYoutubeVidId("https://www.youtube.com/embed/s7L2PVdrb_8"));
console.log("ReturnYoutubeVidId watch : " + ReturnYoutubeVidId("https://www.youtube.com/watch?v=s7L2PVdrb_8"));



function ReplicateVideoInputFormat(json) {


        console.log("json: " + JSON.stringify(json));


        // Video JSON-object-template-format by ATO:
        var vidJson = [{
            "video": null
        }, {
            "stops": []
        }];
        var Tstop = {
            "timestamp": null,
            "events": []
        };
        var Tevent = {
            "eventtype": null,
            "tekst": null,
            "svar": [],
            "korrekt": [],
            "feedback": null
        };


        var startFrameTitle = json.startFrameTitle;
        var startButtonTitle = json.startButtonTitle;

        vidJson[0].video = ReturnYoutubeVidId(json.EmbedURL);

        console.log("vidJson 1 : " + JSON.stringify(vidJson));

        console.log("startFrameTitle: " + startFrameTitle + ", startButtonTitle: " + startButtonTitle + ", URL: " + URL);

        var QD = json.QuizData;


        for (var key in QD) { // For each timestamp...

            var Stop = JSON.parse(JSON.stringify(Tstop)); // Copy the the template-object "Tstop"

            var tt;
            var mm;
            var ss;

            if (typeof(QD[key].TimeStamp) !== "undefined") {

                console.log('----- QD[key].TimeStamp.length: ' + QD[key].TimeStamp.length);
                if (QD[key].TimeStamp.length > 0) {
                    for (var Tkey in QD[key].TimeStamp) {
                        var TObj = QD[key].TimeStamp[Tkey];
                        // if (TObj.name == "tt") tt = parseInt(TObj.value);
                        if (TObj.name == "mm") mm = parseInt(TObj.value);
                        if (TObj.name == "ss") ss = parseInt(TObj.value);
                        console.log("TObj.name: " + TObj.name + ", TObj.value: " + TObj.value);
                        console.log("tt: " + tt + ", mm: " + mm + ", ss: " + ss);
                    } // END for
                } // END if

                // var TimeInSec = tt*3600 + mm*60 + ss;
                var TimeInSec = mm * 60 + ss;

                Stop.timestamp = TimeInSec;

                console.log("TimeInSec: " + TimeInSec + ", Stop: " + JSON.stringify(Stop));

                if (typeof(QD[key].EventForm) !== "undefined") {

                    console.log('----- QD[key].EventForm.length: ' + QD[key].EventForm.length);

                    if (QD[key].EventForm.length > 0) {

                        for (var key1 in QD[key].EventForm) { // Each key1 is an EventForm

                            var Event = JSON.parse(JSON.stringify(Tevent)); // Copy the the template-object "Tevent"

                            var AnswerNum = -1;

                            for (var key2 in QD[key].EventForm[key1]) { // Each key2 is an input-tag
                                var Obj = QD[key].EventForm[key1][key2];

                                if (Obj.name == "valg") {
                                    if (Obj.value == "checkbox")    Event.eventtype = "checkbox";
                                    if (Obj.value == "radiobutton") Event.eventtype = "svarknap";
                                }

                                if (Obj.name == "Question") {
                                    Event.svar.push(Obj.value);
                                    ++AnswerNum;
                                }

                                if (Obj.name == "EventHeader") {

                                }

                                if (Obj.name == "EventInfo") {
                                    Event.tekst = Obj.value;
                                }

                                if (Obj.name == "EventFeedback") {
                                    Event.feedback = Obj.value;
                                }

                                if (Obj.name == "Rsvar") {
                                    Event.korrekt.push(AnswerNum);
                                }

                                if (Obj.name == "Csvar") {
                                    Event.korrekt.push(AnswerNum);
                                }

                                console.log("key1: " + key1 + ", key2: " + key2 +
                                    "\nEvent: " + JSON.stringify(Event));

                            } // END for

                            Stop.events.push(Event);

                        } // END for
                    } // END if
                } // END if EventForm
            } // END if TimeStamp

            vidJson[1].stops.push(Stop);

        } // END for

        console.log("vidJson 1 : " + JSON.stringify(vidJson));

        return vidJson;

    } // END function


//######################################################################################
// 								RUN CODE....
//###################################################################################### 


$(document).ready(function() {

    // ================================
    // 		Video loader
    // ================================

    var VideoObj = Object.create(VideoClass);

    VideoObj.DeleteSelections(); // Delete previous selections on reload.

    $("#delete_selections").click(function() {
        VideoObj.DeleteSelections();
        console.log("VideoObj submit : " + JSON.stringify(VideoObj));
    });

    $("#load_default_video").click(function(e) {
        e.preventDefault(); // Prevent the link-nature of the anchor-tag.
        VideoObj.LoadDefaultVideo();

        console.log("VideoObj.EmbedURL 1: " + VideoObj.EmbedURL + ", VideoObj.WatchURL 1: " + VideoObj.WatchURL);
    });

    $("#load_video").click(function() {
        VideoObj.LoadVideo();
        console.log("VideoObj submit : " + JSON.stringify(VideoObj));
        // VideoObj.DisplayJsonML();

        console.log("VideoObj.EmbedURL 2: " + VideoObj.EmbedURL + ", VideoObj.WatchURL 2: " + VideoObj.WatchURL);
    });


    // ================================
    // 		User Inferface
    // ================================

    InitHTML('#FormsContainer', TimeStampForm);

    AddElement('.addfield', QuestionField, 5);
    RemoveElement('.removefield', 2);

    AddElement('.addform', EventForm, false);
    RemoveElement('.removeform', 1);

    AddElement('.add_TimeStampForm', TimeStampForm, false);
    RemoveElement('.remove_TimeStampForm', 1);

    RadioButtonDualSwitch(".EventForm input[name='valg']");

    QuestionWrapperButtonControl(".EventForm .QuestionWrapperButton");

    // CheckTimeStopValues();

    $("#countform").click(function(e) {

        e.preventDefault(); // Prevent the link-nature of the anchor-tag.
        // VideoObj.LoadDefaultVideo(); // Elers vrker det ikke med ReGenerateForm.   
        VideoObj.LoadVideo(); // Elers vrker det ikke med ReGenerateForm.
        VideoObj.LoadDefaultNoVideoImgIfNoVideoIsChosen();
        VideoObj.QuizData = GetFormsData('#FormsContainer');

        // Dette ukommenteres indtil moedet kvalitetscirklen mandag d. 9/3-2015 er overstaaet: 
        // $("#JsonOutput").html(JSON.stringify(VideoObj, null, 4));

        var JsonVideoInput = ReplicateVideoInputFormat(VideoObj);
        $("#JsonVideoInput").html(JSON.stringify(JsonVideoInput, null, 4));

        JsonVideoInput_update = JsonVideoInput;

////
//Her refreshes videoquiz preview iframen: 

        $(".player_container").html("<div id='player' class='embed-responsive-item'></div><div id='time'></div><div id='time_bar'></div>");

        loadData();
        setupplayer();
//
        
    });

    // ================================
    // 		Regenerate user interface
    // ================================

    // VIGTIGT: Version 15 virker med det gamle data format, hvor video-info IKKE er med!
    // ReGenerateForm(JS, "#FormsContainer");


});
