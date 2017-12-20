var theTimeOut;
var maxSecondsForGame = 25;
var maxMilliseconds = 25000;
var secondsRemaining = 25;
var theCountDown;
var numberCorrect = 0;
var numberInCorrect = 0;
var firstTime = true;
var gameOn = false;

var questions = [ 
							{

							"question": "To whom does the title of Mary Shelly's 'Frankenstein' refer?",

							"A": "The Author",

							"B": "The Monster",

							"C": "The Doctor",

							"D": "The Narrator",

							"answer": "C",

							},

							{

							"question": "What is the Great Gatsby's first name?",

							"A": "Tom",

							"B": "Robert",

							"C": "Nick",

							"D": "Jay",

							"answer": "D",

							"winningImage": "assets/images/giphy-downsized-large.gif",

							"incorrectImage": "assets/images/check.gif",

							"answerText": "Jay Gatsby"

							}
				];


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
	displayQuestions();
	
	console.log("first question is");
	console.log(questions[0].question);

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

function displayQuestions(){
		
	console.log("first question is");
	console.log(questions[0].question);
	for (var i = 0; i < questions.length; i++){
	    var ques = questions[i];
	}
	
	
}

});// end document ready


