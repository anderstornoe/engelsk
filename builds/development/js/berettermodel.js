      //########################################################################
      //                                                          
      //      DOKUMENTATION TIL THOMAS: 
      //      Dette script tager udgangspunkt i versionen:
      //
      //          index4_21_position_bootstrap.html
      //
      //########################################################################



      //########################################################################
      //                      Funktioner
      //########################################################################

//kvuc.overlayInfo("hej", "content", "bt_txt");

      // DOKUMENTATION:
      // left_ajust : bliver dynamisk indsat afhaengig af tekst-stoerrelse.
      // top_ajust  : "value", er afhaengig af tekst-stoerrelser, margin og padding paa ul-tags - de svare alle til at placere 
      //              ul-tag'et i "position: relative; top: 0px" - se det udkommenterede CSS foroven.
      // top og left: er begge angivelser for ul-tag'et naar billedet er i dets native stoerrelse, dvs 840 x 528 px.
      var JsonCss = [ 
          {"id":"#Menu1", "top":268, "left":66,   "left_ajust":0, "top_ajust":0,    "answer":"Teaser"},
          {"id":"#Menu2", "top":200, "left":155,  "left_ajust":0, "top_ajust":-30,  "answer":"Presentation"},
          {"id":"#Menu3", "top":140, "left":253,  "left_ajust":0, "top_ajust":-60,  "answer":"Elaboration"},
          {"id":"#Menu4", "top":80,  "left":340,  "left_ajust":0, "top_ajust":-90,  "answer":"Point of no return"},
          {"id":"#Menu5", "top":20,  "left":451,  "left_ajust":0, "top_ajust":-120, "answer":"Conflict escalation"},
          {"id":"#Menu6", "top":-40, "left":618,  "left_ajust":0, "top_ajust":-150, "answer":"Climax"},
          {"id":"#Menu7", "top":-10, "left":702,  "left_ajust":0, "top_ajust":-180, "answer":"Resolution"}
      ];

      var JsonCss_backup = JsonCss;

      var JsonHint = [
          {"answer":"Teaser", 
           "hint":"The teaser starts off the plot off and <br/> gets the attention of the audience"},
          {"answer":"Presentation", 
           "hint":"The presentation introduces the main characters,<br/> the setting and the main conflicts that drive the plot"},
          {"answer":"Elaboration", 
           "hint":"The elaboration gives further knowledge and <br/>understanding about the conflict and the characters."},
          {"answer":"Point of no return", 
           "hint":"The point of no return of no return is the point <br/>in the film when the main character no longer can go back to <br/>the way things were before. The main character has to &quot;do or die.&quot;"},
          {"answer":"Conflict escalation", 
           "hint":"The conflict escalation sees the tension of the conflict increase."},
          {"answer":"Climax", 
           "hint":"The climax is the final conflict and its solution, <br/>after the conflict we know who has won and who has lost"},
          {"answer":"Resolution", 
           "hint":"The resolution is the end of the story, <br/>a new order has been established or the old one has been re-established."}
      ];
      
      // Funktionen rescaler billedet saaledes at forholdet imellem billedets naturlige hoejde og bredde bevares.
      //    ImgWrapper = En wrapper (f.eks et div-tag) omkring en div med et billede.
      //    NativeWidth og NativeHeigth er den "naturlige" bredde og hoejde for billedet.
      function RescaleImage(ImgWrapper, NativeWidth, NativeHeigth){
          var ContainerWidth =  $( ImgWrapper ).width();
          var Containerheigth = (NativeHeigth/NativeWidth)*ContainerWidth;
          $( ImgWrapper ).height(Containerheigth);
      }


      // Funktionen rescaler positionen af div-tags saaledes at forholdet mellem billedet og positionen bevares naar siden resizes.
      //    JsonCss: JSON eller JS-objekt
      //    ObjWrapper: En wrapper omkring billedet hvori ul-tags (dropdown objekterne) befinder sig.
      //    NativeWidth og NativeHeigth er den "naturlige" bredde og hoejde for billedet.
      function RepositionObjects(JsonCss ,ObjWrapper, NativeWidth, NativeHeigth){

          var DefaultText = $( JsonCss[0].id + " a > span").text();

          var Width =  $( ObjWrapper ).width();
          var Height =  $( ObjWrapper ).height();
          console.log("1 --- Width: " + Width + ", Height: " + Height + ", DefaultText: " + DefaultText );

          var Id; var Top; var Left; var Left_scaled; var Top_scaled; var R_left; var R_top; var Top_ajust;
          for(var key in JsonCss){
              Id = JsonCss[key].id;
              Top = JsonCss[key].top;
              Left = JsonCss[key].left + JsonCss[key].left_ajust;  // Note: left_ajust er justering pga. tekstlaengde
              Top_ajust = JsonCss[key].top_ajust;

              // R_left og R_top er empirisk valgte scaling factors der faa positionerne
              // til at vaere bedre for skaermstoerrelser mindre end NativeWidth og NativeHeigth:
              R_top = Math.pow(0.15, Height/NativeHeigth)*1.1; 
              R_left = 50*R_top;   

              Left_scaled = Math.round( (Width/NativeWidth)*Left - R_left );
              Top_scaled =  Math.round( (Height/NativeHeigth)*Top + R_top*Top_ajust );
              console.log("5 --- Id: " + Id + ", Top_scaled: " + Top_scaled + ", Left_scaled: " + Left_scaled );

              var TagText = $( Id + " a > span").text();
              console.log("2 --- Id: " + Id + ", TagText: " + TagText + ", DefaultText: " + DefaultText );

              // Placer alle elementer:
              $( Id ).css({ position: "relative", top: Top_scaled+"px", left: Left_scaled+"px"});
          }
      }

      // Resize overlayet til at matche billedet:
      function ResizeAndPositionOverlayWindow(WindowSelector, OverlayWindowSelector){
          var Pos = $(WindowSelector).offset();
          $( OverlayWindowSelector ).css({ position: "absolute", top: Pos.top+"px", left: Pos.left+"px"});
          console.log("Pos.top: " + Pos.top + ", Pos.left: " + Pos.left);

          $(OverlayWindowSelector).width( $(WindowSelector).width() );
          $(OverlayWindowSelector).height( $(WindowSelector).height() );
      }


      // Funktionen laver et array bestaaende af svarene (answer) fra JsonCss-objektet.
      function MakeArray(JsonCss){
          var LArray = new Array();
          for(var key in JsonCss){
              LArray.push(JsonCss[key].answer);
          }
          return LArray;
      }


      // Funktionen laver en kopi af arrayet i argumentet, og blander elementerne tilfaeldigt
      function ShuffelArray(ItemArray){
          var NumOfItems = ItemArray.length;
          var NewArray = ItemArray.slice();  // Copy the array...
          var Item2; var TempItem1; var TempItem2;
          for (var Item1 = 0; Item1 < NumOfItems; Item1++) {
            Item2 = Math.floor( Math.random() * NumOfItems);
            TempItem1 = NewArray[Item1];
            TempItem2 = NewArray[Item2];
            NewArray[Item2] = TempItem1
            NewArray[Item1] = TempItem2
          };
          return NewArray;
      }
      
      // Funktion er laver en liste over li > a elementer:
      function BS_LinkDropdownMenu(MenuArray){
          var HTML = '';
          for (var i in MenuArray){
              HTML += '<li><a href="#">'+MenuArray[i]+'</a></li>';
          }
          console.log("BS_LinkDropdownMenu: " + HTML); 

          return HTML;
      }


      //########################################################################
      //                      Run code....
      //########################################################################

      $( document ).ready(function() {

          var TimerId; 

          // En liste laves over alle svar:
          var ListArray = MakeArray(JsonCss);
          console.log("--- ListArray 1 : " + ListArray);

          // Generer random liste-elementer over vaerdierne i ListArray i alle dropdown-menuerne:  #Menu1 - #Menu7:
          var RandArray;
          for (var i = 1; i <= 7; i++) {
              RandArray = ShuffelArray( ListArray );
              $( "#Menu"+i+ " ul" ).append( BS_LinkDropdownMenu( RandArray ) );
          };
          console.log("--- ListArray 2 : " + ListArray);

          // Naar vinduet loader rescales billedet og alle dropdownmenuer repositioneres:
          $(window).load(function () {
              RescaleImage(".ImgWrapper", 840, 528);
              RepositionObjects(JsonCss ,".ImgWrapper", 840, 528);
          });

          // Naar reloader rescales billedet og alle dropdownmenuer repositioneres:
          $(window).resize(function () {
             RescaleImage(".ImgWrapper", 840, 528);
             RepositionObjects(JsonCss ,".ImgWrapper", 840, 528);
             ResizeAndPositionOverlayWindow(".ImgWrapper", ".ImgOverlay");
          });


          // Default tekst er ens i alle elementer:
          var DefaultTextWidth = $( JsonCss[0].id + " a > span").width();
          var DefaultText = $( JsonCss[0].id + " a > span").text();



          // Nedenstaaende udfoeres naar der trykkes paa et anchor-tag i dropdown menuerne:
          $( document ).on('click', ".btn-group ul a", function(event){
              event.preventDefault();  // Forhindre at anchor-tag'et sender brugeren til "href".
              
              var LinkText = $( this ).text();  // Teksten paa det link der 
              var HeaderLinkObj = $( this ).closest( "ul" ).siblings("a");
              var HeaderLinkText = $("> .MenuHeading", HeaderLinkObj).text();
              console.log("LinkText: " + LinkText + ", HeaderLinkText: " + HeaderLinkText );

              // Set teksten i dropdownmenuen til det valgte ord/saetning:
              $("> .MenuHeading", HeaderLinkObj).text(LinkText);

              // Foelgende finder bredden paa det valgte ord/saetning "TextWidth" og beregner
              // en justering af teksten i forhold til bredden paa default teksten "DefaultTextWidth"
              var DivObj = $( this ).closest( ".btn-group" ); // Referance til denne div.
              var Num = $( ".ImgWrapper > div.Dmenu" ).index( DivObj );  // Nummeret paa denne div i .ImgWrapper.
              var TextWidth = $("> a ", DivObj).width();  // Bredden paa a-tag'et.
              var AjustWidth = Math.round( (DefaultTextWidth - TextWidth)/2 );
              console.log("3 --- DivObj: " + DivObj.attr("id") + ", Num: " + Num + ", TextWidth: " + TextWidth );
              JsonCss[Num].left_ajust = AjustWidth;  // Ret bredden i JsonCss left_ajust.
              console.log("4 --- DivObj: " + DivObj.attr("id") + ", Num: " + Num + ", AjustWidth: " + AjustWidth );
              RepositionObjects(JsonCss ,".ImgWrapper", 840, 528);  // Juster teksten.

              // Hvis et tidligere hint er synlig, saa skal det fjernes:
              $( "#Hint" ).remove();
              clearTimeout(TimerId);  // fjerner tidligere timere.

              // Giver et hint:
              for (var index in JsonHint) {
                  console.log("### LinkText: " + LinkText + ", JsonHint[index].answer: " + JsonHint[index].answer );
                  if ( LinkText == JsonHint[index].answer ){
                      var HintText = JsonHint[index].hint;
                      // var Offset = $(DivObj).offset();     // absolute
                      var Position = $(DivObj).position();    // relative
                      var Left = Position.left;
                      var Top = Position.top;
                      var DivHeight = DivObj.height();
                      var Hint_Left = Math.round( Left - (HintText.length/2 - AjustWidth) );
                      Hint_Left = (Hint_Left > 0) ? Hint_Left : 10;  // sikre HintText position
                      var Hint_Top = Math.round( Top + DivHeight );
                      console.log("Left: " + Position.left + ", Top: " + Position.top + ", DivHeight: " + DivHeight + "\nHintText: " + HintText  + ", Hint_Left: " + Hint_Left );
                      $( DivObj ).before( $('<div id="Hint" class="HintClass">' + HintText + '</div>').fadeIn("slow") );
                      $( "#Hint" ).css({ position: "absolute", top: Hint_Top+"px", left: Hint_Left+"px"});
                      TimerId = setTimeout( function(){ 
                        // $("#Hint").fadeOut(); 
                        $("#Hint").fadeOut(600, function() {
                            $( "#Hint" ).remove();
                        });
                      } , 5000);
                      console.log(" TimerId 1 : " + TimerId );
                  }
              }
          });

        

          // Nedenstaaende udfoeres naar der trykkes paa kanppen "DONE":
          $( document ).on('click', "#done", function(event){

              $(".QustionNumbers").addClass("Red");  // Goer alle svar rode...

              // Tael sammen hvor mange rigtige svar der er afgivet:
              var count = 0;
              $(".ImgWrapper .btn-group").each(function( index, element ) {
                  var IdNumStr = (index + 1).toString();
                  if ( $(".MenuHeading", this).text() == JsonCss[index].answer ){
                    ++count;
                    $("#QustionNum" + IdNumStr).toggleClass( "Red Green" ); // Skift til groen
                  } 
                  console.log("--- index: " + index + 
                              ", element: " + $(".MenuHeading", this).text() + 
                              ", IdNumStr: " + IdNumStr );
              });

              // Reseizing af ImgOverlay, saa det matcher ImgWrapper:
              ResizeAndPositionOverlayWindow(".ImgWrapper", ".ImgOverlay");

              // Vis overlayet over quizen:
              $(".ImgOverlay").toggleClass("ShowOverlay hide");

              // Skriv resultatet:
              $("#result").text(count);
          });


          // Nedenstaaende udfoeres naar der trykkes paa kanppen "Try again?":
          $( document ).on('click', "#tryagain", function(event){

              // Reset alle vaerdier til de orginale vaerdier:
              JsonCss = JsonCss_backup;

              // Reset alle overskrifter:
              $(".ImgWrapper .MenuHeading").each(function( index, element ) {
                  $( this ).text(DefaultText);
              });

              // Skjul overlay:
              $(".ImgOverlay").toggleClass("ShowOverlay hide");

              // Fjern alle farver:
              $(".QustionNumbers").removeClass( "Red Green" );

          });
          
      });