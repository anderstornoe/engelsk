// DATO: 16-02-2015
      // FORFATTERE: JAHA og THAN.
      // DOKUMENTATION:
      // VideoWrapper = En wrapper (f.eks et div-tag) omkring en iframe-, object- eller video-tag.
      // VideoObj = iframe-, object- eller video-tag med referance til videoen.
      // NativeWidth og NativeHeigth er den "naturlige" bredde og hoejde for videoen paa youtube/vimeo.
// function RescaleVideo(VideoWrapper, VideoObj, NativeWidth, NativeHeigth){

//     // Resize/scaler videoen naar siden loader foerste gang:
//     var ContainerWidth =  $( VideoWrapper ).width();
//     var Containerheigth = (NativeHeigth/NativeWidth)*ContainerWidth;
//     $( VideoObj ).width(ContainerWidth);
//     $( VideoObj ).height(Containerheigth);

//     // Resize/scaler videoen naar vinduet bliver resized: 
//     // Note: koden gentages, da recursivt kald til funktionen faar browseren til at fryse).
//     $( window ).resize(function() {
//         ContainerWidth =  $( VideoWrapper ).width();
//         Containerheigth = (NativeHeigth/NativeWidth)*ContainerWidth;
//         $( VideoObj ).width(ContainerWidth);
//         $( VideoObj ).height(Containerheigth);
//     });
// }


$( document ).ready(function() {
    // Saet "shot" som den foerst default viste video-playliste:
    $(".intro").addClass("show");       // Dette viser video-playlisten ".shot".
    $("#intro").addClass("Active");   // Dette giver anchor-tag'et "#shot" hvid baggrundsfarve.


    // Rescale video: (Note: funktionen skal kaldes efter videoen vises via .addClass("show") )
    //RescaleVideo(".youtube_container", "iframe", 853, 480);


    // Naar der trykkes paa et anchor-tag med klassen ".LinkButton", saa...
    $( document ).on('click', ".LinkButton", function(event){
        event.preventDefault();  // Forhindre at anchor-tag'et sender brugeren til "href".

        // Fjern klassen "Active" paa alle anchor-tags:
        $(".LinkButton").removeClass( "Active" );

        // Saet klassen "Active" paa anchor-tag'et der trykkes paa:
        $( this ).addClass( "Active" );

        // Fjern klassen "show" paa alle div med klassen ".youtube_container":
        $(".youtube_container").removeClass( "show" );
        
        // Find id-navnet paa det anchor-tag der trykkes paa:
        LinkIdName = $( this ).prop("id");

        // Tilfoej klassen "show" paa div-taget med klassen LinkIdName:
        $("." + LinkIdName).addClass("show");

        console.log("id: " + LinkIdName );
    });

});