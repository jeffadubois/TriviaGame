var theTimeOut;
var maxSecondsForGame = 25;
var maxMilliseconds = 25000;
var secondsRemaining = 25;
var theCountDown;
var numberCorrect = 0;
var numberInCorrect = 0;
var firstTime = true;
var gameOn = false;

$(document).ready(function(){

//clicking on the start button starts the game.
$('#startbtn').on('click', function (e) {
 	console.log("clicked on startbtn");
	if (firstTime == true){
           alert( "Note - You have " + maxSecondsForGame +  " seconds to answer the trivia questions." );
	}
    gameOn = true;
	theCountDownInterval = setInterval(countDown, 1000);
	theTimeOut = setTimeout(tallyResults, maxMilliseconds);  
	$("this").prop("disabled", true);
	$("#startbtn").prop("disabled", true);
	secondsRemaining = maxSecondsForGame;
	numberCorrect = 0;
	numberInCorrect = 0;
    $("#abody").html("<h2>You have " + secondsRemaining + " seconds left</h2>");

});


function tallyResults(){
	gameOn = false;
	numberCorrect = 0;
	var totalNum = 2;
    var q1Win =  $("input#radio121").prop("checked");
     var q2Win =  $("input#radio131").prop("checked");
	 if (q1Win == true){
		   numberCorrect++;
	 }
	 if (q2Win == true){
		   numberCorrect++;
	 }

     numberInCorrect = totalNum - numberCorrect;

	 clearTimeout(theTimeOut);
	 clearInterval(theCountDownInterval);
	 
	 $("#abody").html("<h2>You had " + numberCorrect +  " correct, and " + numberInCorrect + " incorrect!</h2>");
	 $("#startbtn").prop("disabled", false);

}


function countDown() {
	if (gameOn == true){
	     secondsRemaining--;
	     $("#abody").html("<h2>You have " + secondsRemaining + " seconds left</h2>");
	     if (secondsRemaining <= 0){
			 gameOn = false;
	     }
	}
}

});// end document ready


