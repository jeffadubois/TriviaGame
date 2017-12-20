var theTimeOut;
var maxSecondsForGame = 10;
var maxMilliseconds = 10000;
var secondsRemaining = 25;
var theCountDown;
var numberCorrect = 0;
var numberInCorrect = 0;
var firstTime = true;
var gameOn = false;
var totalNumQuestions = 3;

$(document).ready(function(){

//clicking on the start button starts the game.
$('#startbtn').on('click', function (e) {
 	console.log("clicked on startbtn");
	if (firstTime == true){
           alert( "Note - You have " + maxSecondsForGame +  " seconds to answer the trivia questions." );
		   firstTime = false;
	}
    gameOn = true;
	theCountDownInterval = setInterval(countDown, 1000);
	theTimeOut = setTimeout(tallyResults, maxMilliseconds);  
	$("this").prop("disabled", true);
	$("#startbtn").prop("disabled", true);
	secondsRemaining = maxSecondsForGame;
	numberCorrect = 0;
	numberInCorrect = 0;
    $("#remainingTime").html("<h2>You have " + secondsRemaining + " seconds left</h2>");
	//displayQuestions();
	resetRadioButtons();

});

function resetRadioButtons(){
	 $("input#radio121").prop("checked", false);
	 $("input#radio120").prop("checked", false);
	 $("input#radio122").prop("checked", false);
	 $("input#radio130").prop("checked", false);
	 $("input#radio131").prop("checked", false);
	 $("input#radio132").prop("checked", false);
	 $("input#radio140").prop("checked", false);
	 $("input#radio141").prop("checked", false);
	 $("input#radio142").prop("checked", false);	 
	 }

function tallyResults(){
	gameOn = false;
	numberCorrect = 0;
    var q1Win =  $("input#radio121").prop("checked");
    var q2Win =  $("input#radio131").prop("checked");
	var q3Win =  $("input#radio141").prop("checked");
	 if (q1Win == true){
		   numberCorrect++;
	 }
	 if (q2Win == true){
		   numberCorrect++;
	 }
	 if (q3Win == true){
		   numberCorrect++;
	 }

     numberInCorrect = totalNumQuestions - numberCorrect;

	 clearTimeout(theTimeOut);
	 clearInterval(theCountDownInterval);
	 
	 $("#remainingTime").html("<h2>You had " + numberCorrect +  " correct, and " + numberInCorrect + " incorrect!</h2>");
	 $("#startbtn").prop("disabled", false);

}


function countDown() {
	if (gameOn == true){
	     secondsRemaining--;
	     $("#remainingTime").html("<h2>You have " + secondsRemaining + " seconds left</h2>");
	     if (secondsRemaining <= 0){
			 gameOn = false;
	     }
	}
}


});// end document ready


