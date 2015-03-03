

// DATO: 20-02-2015
// FORFATTERE: JAHA og THAN.

// Her defineres et JSON objekt med referance til hver videoplayliste:
Json = {
        "shot" : "https://www.youtube.com/embed/7eTcgRCimzA?list=PLWvd5Km3bs5dJv_eFafeCB13EeCHd5Uoq",
        "set"  : "https://www.youtube.com/embed/7eTcgRCimzA?list=PLWvd5Km3bs5dJv_eFafeCB13EeCHd5Uoq",
        "plot" : "https://www.youtube.com/embed/7eTcgRCimzA?list=PLWvd5Km3bs5dJv_eFafeCB13EeCHd5Uoq"
      };

$( document ).ready(function() {

  // Saet "shot" som den foerst default viste video-playliste:
  $("#shot").addClass("Active");   // Dette giver anchor-tag'et "#shot" hvid baggrundsfarve.

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

      // skift src-referancen i iframe-tag'et, hvorved den nye video loader:
      $("#VidPlayList").attr('src', Json[LinkIdName]);

      console.log("LinkIdName: " + LinkIdName + ", Json.LinkIdName: " + Json[LinkIdName] );
  });

});