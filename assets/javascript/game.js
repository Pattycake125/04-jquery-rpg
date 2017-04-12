// Javascript customized for class 3 Rutgers Coding Boot camp //
      // var Letter = event.key;

  $(document).ready(function displayWord(){  

            var options= ["phobia","linux","syzygy","wyswyg","sesqui","fjord","lynx","onyx","iridium"];
            
             Wordno = options[Math.floor(Math.random() * options.length)];
            //$("#theWord").html(Wordno); 
            //alert(Wordno);
            console.log("The Word I chose is:" + Wordno);
            console.log(Wordno.length);
            var wordCheck;
            for (var i = 0; i < Wordno.length; i++){ 
//       // write for statement looking at letters used
               blanks =  "_ ";
              $("#wordLetters").append(blanks);  
         }
            countLetterWrong =0;
            countLetterGood = 0;
            countLetterGood1 =0;
            countLettertz=0;
            countLettertt=0;
            GoodList = [];
            badList= [];


       });
      

function squash(arr){
    var tmp = [];
    for(var i = 0; i < arr.length; i++){
        if(tmp.indexOf(arr[i]) == -1){
        tmp.push(arr[i]);
        }
    }
    return tmp;
}
      document.onkeyup= function Let(event){ 
            

           Letter = event.key;
            console.log(Letter);
            $("#triedLetters").append(Letter);
                  //$("#wordLetters").append(Letter); 
   
            for (var i = 0; i < Wordno.length; i++){ 
                  //console.log(event.key +' vs.' + Wordno.charAt(i));
                  if (event.key == Wordno.charAt(i)) { 
                        countLettertz=1;
                        countLetterGood= countLetterGood +1
                        checkletter(event.key);
                        GoodList = GoodList +  event.key;

                        console.log(GoodList);

               }
                else {
                  /*badList = badList + event.key;
                  for (i=0; squash(badList).length; i++){
                  countLettertt= countLettertt + 1;
                     $("#hangmanz").attr("src", "http://www.writteninpencil.de/Projekte/Hangman/hangman" + countLettertt + ".png");*/
                  }      
                  }
                  
                  /*if(countLettertt > 0){
                        countLetterWrong = countLetterWrong +1 ;
                        $("#bad").html("Bad Letters: "+ countLetterWrong);
                        countLettertt=0;
                  }*/
                  if(countLettertz > 0){
                        countLetterGood1= countLetterGood1 +1
                        $("#good").html("Good Letters (adds repeats):"+ countLetterGood );
                        countLettertz=0;
                  }
                  //$("#wordLetters").append(blanks); 
         }
      function checkletter(Letter){
            blankChecking=Letter;
            BCList = $("#wordLetters").text();
            squash(GoodList);
            console.log(squash(GoodList));

            //console.log("Letter Transferred: " + blankChecking);
            //console.log("Blank Checking: " + BCList);
            /*for(i=0; i < GoodList.length; i++){ 
                  if( GoodList.charAt(i) == blankChecking) {
                     blanks =  "GoodList.charAt(i) ";
                      $("#wordLetters").append(blanks);   
                  else {
                    blanks =  "_ ";
                  $("#wordLetters").append(blanks);
                  }   */
           // }

      }//}



//end of file
