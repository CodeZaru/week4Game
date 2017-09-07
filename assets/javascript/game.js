
//The ready event occurs when the DOM (document object model) has been loaded (all the html etc,
//so the page can start to load w/o processing all the javascript).
//Because this event occurs after the document is ready, it is a good place to have all other jQuery events 
//and functions.  The ready() method specifies what happens when a ready event occurs.

$(document).ready(function () {


////////////////////////////////////////////////////
//VARIABLES: declares ALL the game variables////////
////////////////////////////////////////////////////


var numberOfCrystalGems=4;
var crystalGemImages=['assets/images/greenGod.png','assets/images/heartGem.png','assets/images/monkeyGem.png','assets/images/unicornGem.png'];
//var crystalGemImages=['apple','strawberry','blueberry','peach'];
//var randomNumber;
var targetNumber = 0;
var userNumber=88;
var wrongAnswerCount;
var counter = 0;
var wins = 0;
var losses = 0;
$('#win').text(wins);
$('#loss').text(losses);


////////////////////////////////////////////////////
//FUNCTION titleScreen() BEGINS/////////////////////
////////////////////////////////////////////////////
//title screen provides intentional entry into game screen
function titleScreen(){
	$('#gameContent').append('<div id="gameTitle">CRYSTAL GEM COLLECTOR</div><div id="startButton" class="button" background-color: red>BEGIN</div>');		
	$('#startButton').on("click",function (){gameScreen()});
	$('#gameContent').append('<div id="gamePlay"><p> Try to match the "Target Number" by clicking on the four crystals.</p><p> Each crystal adds a specific amount of points to your total score.</p><p> Match the "Target Number" and win the round, overshoot it and lose the round </p><p> Crystal values change each round.</p></div>');
	

}//display game
////////////////////////////////////////////////////
//FUNCTION titleScreen() ENDS///////////////////////
////////////////////////////////////////////////////


////////////////////////////////////////////////////
//FUNCTION gameScreen() BEGINS//////////////////////
////////////////////////////////////////////////////
//empties out the titleScreen from game content, and creates the gameScreen by appending relevant divs to the gameContent main div	
function gameScreen(){

	$('#gameContent').empty();
	$('#gameContent').append('<div id="randomNumberContainer"><div id="randomNumberLabel">Target Number:</div><div id="randomNumberHolder"></div></div>');
	$('#gameContent').append('<div id="playerNumberContainer"><div id="playerNumberLabel">Your Number:</div><div id="playerNumberHolder"></div></div>');
	$('#gameContent').append('<div id="crystalGemContainer"><div id="crystalGemHolder"></div></div>');
	$('#gameContent').append('<div id="feedback"></div>');
	$('#gameContent').append('<form><input type="text" id="dummy" ></form>');


//function crystalGemGenorator() {

//this block resets all the values for a new game..
//Each crystal should have a random hidden value between 1 - 12.
//The random number shown at the start of the game should be between 19 - 120.
//random non-repeating number



//declare numbers varialbe as an array
var cgnumbers = []

//repeat until condition is met: 4 unique numbers between 1 and 12
while(cgnumbers.length < 4){
			//random number generator		
			var uniqueRandomNumber = Math.floor(Math.random()*12+1)
			
			//var to check the condition of unique element of four  
			var found = false;
			//check the random number against the numbers in the array  
			for (var i=0; i< cgnumbers.length; i++){
				if (cgnumbers[i] == uniqueRandomNumber){
					found = true; break
				}//break out of loop if randomNumber isn't 
//unique--found in array is true...so go to top of loop and regenerate random unber..
}
			  //similar to hangman--if not found in the array
			  if(!found)cgnumbers[cgnumbers.length]=uniqueRandomNumber;
			}//the if above is like an otherwise
//leave the loop when have 4 unique and random numbers between 1 and 12.



console.log(cgnumbers);		
var cgImages=[];

for (i = 0; i < cgnumbers.length; i++) {
	//var cgImage = $('<img>');
	var cgImage = $('<img id="cgImages">');
	cgImage.attr('data-num', cgnumbers[i]);
	cgImage.attr('src', crystalGemImages[i]);
	cgImage.addClass('crystalGemImage');
	cgImages.push(cgImage);
	$('#crystalGemHolder').append(cgImages);
};
console.log(cgImages);		




counter = 0;
$('#playerNumberHolder').text(counter);

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//var targetNumber = getRandomInt(19,120);
//NOTE that by declaring targetNumber here without 'var' and
//by not declaring it at the top, javascript by default
//treats it as a global variable, which was crucial in 
//making it available to my checkAnswer function below.. will
//need to see why this is the case because 'counter' was declared
//at the top (globally) and didn't encounter problems..
//maybe because 'counter' was set to zero and targetNumber wasn't
//test that theory later...
targetNumber = getRandomInt(19,120);
console.log(targetNumber);

$('#randomNumberHolder').text(targetNumber);

$('.crystalGemImage').on('click', function(){
	counter = counter + parseInt($(this).data('num'));
	console.log('num');
	$('#playerNumberHolder').text(counter);
	console.log(counter);
	checkAnswer();
});

}
//gamescreen
////////////////////////////////////////////////////
//FUNCTION gameScreen() ENDS////////////////////////
////////////////////////////////////////////////////


////////////////////////////////////////////////////
//FUNCTION checkAnswer() BEGINS/////////////////////
////////////////////////////////////////////////////
function checkAnswer(){
	console.log(counter);
	console.log(targetNumber);
	if (counter == targetNumber){
		victoryMessage();}
		else if (counter > targetNumber){
			defeatMessage();}
		}


////////////////////////////////////////////////////
//FUNCTION checkAnswer() ENDS///////////////////////
////////////////////////////////////////////////////


////////////////////////////////////////////////////
//FUNCTION victoryMessage() BEGINS//////////////////
////////////////////////////////////////////////////
function victoryMessage(){
	$('#status').text('Good Job!!!!');
	wins ++;
	$('#win').text(wins);
	console.log(wins)

	newGame();


}//victory
////////////////////////////////////////////////////
//FUNCTION victoryMessage() ENDS////////////////////
////////////////////////////////////////////////////


////////////////////////////////////////////////////
//FUNCTION defeatMessage() BEGINS///////////////////
////////////////////////////////////////////////////
//same code aas victoryMessage, except for defeat scenario		
function defeatMessage(){
	$('#status').text('You are not very smart!')
	losses ++;
	$('#loss').text(losses);
	console.log(losses)

	newGame();


}//defeat
////////////////////////////////////////////////////
//FUNCTION defeatMessage() ENDS/////////////////////
////////////////////////////////////////////////////


////////////////////////////////////////////////////
//FUNCTION newGame() BEGINS/////////////////////////
////////////////////////////////////////////////////
function newGame(){
	gameScreen();
};//finalpage
////////////////////////////////////////////////////
//FUNCTION newGame() ENDS///////////////////////////
////////////////////////////////////////////////////

////////////////////////////////////////////////////
////////////////////////////////////////////////////
//ACTUAL GAME CODE TO START GAME////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

titleScreen();

});//doc ready