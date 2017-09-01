
//The ready event occurs when the DOM (document object model) has been loaded (all the html etc,
//so the page can start to load w/o processing all the javascript).
//Because this event occurs after the document is ready, it is a good place to have all other jQuery events 
//and functions.  The ready() method specifies what happens when a ready event occurs.

$(document).ready(function () {


////////////////////////////////////////////////////
//VARIABLES: declares ALL the game variables////////
////////////////////////////////////////////////////


var wordBank=new Array;
var wordArray=new Array;
var previousGuesses=new Array;

var numberOfCrystalGems=4;
var crystalGemImages=['assets/images/greenGod.png','assets/images/heartGem.png','assets/images/monkeyGem.png','assets/images/unicornGem.png'];
//var crystalGemImages=['apple','strawberry','blueberry','peach'];
var randomNumber;
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
	$('#gameContent').append('<div id="randomNumberHolder">Target Number:</div>');
	$('#gameContent').append('<div id="playerNumberHolder">Player Number:</div>');
	$('#gameContent').append('<div id="crystalGemHolder"></div>');
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
	var cgImage = $('<img>');
	cgImage.attr('data-num', cgnumbers[i]);
	cgImage.attr('src', crystalGemImages[i]);
	cgImage.addClass('crystalGemImage');
	cgImages.push(cgImage);
	$('#crystalGemHolder').append(cgImages);
};
console.log(cgImages);		



//the getword function, defined on line 62, and then creates the approptiate number of tiles
//this block also initiates the WAC count and the PG array. 			
//getCrystalGems();

//var numberOfTiles=numberOfCrystalGems;
//console.log(numberOfTiles);


//wrongAnswerCount=0;
//previousGuesses=[];

// Need to display wrongAnswerCount	as a score at top...


//based onthe number of letters in the current word, this creates the appropriate number of tiles
// in div wordHolder by appending new tile class divs (#t) It iterates through the collection,
// concatenations div #t for each item in the loop per the i loop counter.
/*
for(i=0;i<cgImages.length;i++){

	$('#crystalGemHolder').append('<div class="tile" id=t'+i+'></div>');
	$('.t'+i+'').append(cgImages[i]);
	console.log(cgImages[i]);


};
*/
//appends random target number to its div	
//$('#randomNumberHolder').append("test");
		counter = 0;
		$('#playerNumberHolder').text(counter);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

		var targetNumber = getRandomInt(19,120);
console.log(targetNumber);

		$('#randomNumberHolder').text(targetNumber);

	$('.crystalGemImage').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));
		   console.log('num');
		    $('#playerNumberHolder').text(counter);
console.log(counter);
//Victory

		    if (counter == targetNumber){
		      $('#feedback').text('Good Job!!!!');
		      wins ++;
		      $('#win').text(wins);
		      console.log(wins)

		      newGame();
//defeat		        
		    } else if ( counter > targetNumber){
		        $('#status').text('You are not very smart!')
		        losses ++;
		        $('#loss').text(losses);
		        console.log(losses)

		        newGame();
		    }
		});

}//gamescreen
////////////////////////////////////////////////////
//FUNCTION gameScreen() ENDS////////////////////////
////////////////////////////////////////////////////



/////////////////////////////////////////////////////
//FUNCTION playGame() BEGINS//////////////
/////////////////////////////////////////////////////
function gamePlay() {



	
	}



////////////////////////////////////////////////////
//FUNCTION playGame() ENDS///////////////////////
////////////////////////////////////////////////////


////////////////////////////////////////////////////
//FUNCTION checkAnswer() BEGINS/////////////////////
////////////////////////////////////////////////////
function checkAnswer(){
//clear current answer variable
var currentAnswer="";	

for(i=0;i<currentWord.length;i++){
//sets currentAnswer variable equal to the cumulative iteration of tiles set to text, which is basically
//the current state of the currentWord-Answer...so the currentWordAnswer is built tile by tile.		
currentAnswer+=($('#t'+i).text());
}
//tests whether the currentAnswer (built above) is equal to the currentWord yet, ot needs more iterations.			
if(currentAnswer==currentWord){
	victoryMessage();
};
}//STILL TO DO: checkanswer, add victory song/audio and victory picture, and increment points by 1.
////////////////////////////////////////////////////
//FUNCTION checkAnswer() ENDS///////////////////////
////////////////////////////////////////////////////


////////////////////////////////////////////////////
//FUNCTION victoryMessage() BEGINS//////////////////
////////////////////////////////////////////////////
function victoryMessage(){
//The blur() method is used to remove focus from an element.	
document.activeElement.blur();
//As the .keyup() method is just a shorthand for .on( "keyup", handler ), 
//detaching is possible using .off( "keyup" ).	
$(document).off("keyup", handleKeyUp);

//$('#feedback').append("LIFE SPARED!<br><br><div id='replay' class='button'>CONTINUE</div>");
$('#feedback').append("LIFE SPARED!");
wins ++;
		    //  $("#win").html(wins);
		    $('#win').text(wins);
		    console.log(wins);
		    setTimeout(function(){newGame();}, 3000)
		    

}//victory
////////////////////////////////////////////////////
//FUNCTION victoryMessage() ENDS////////////////////
////////////////////////////////////////////////////


////////////////////////////////////////////////////
//FUNCTION defeatMessage() BEGINS///////////////////
////////////////////////////////////////////////////
//same code aas victoryMessage, except for defeat scenario		
function defeatMessage(){
	document.activeElement.blur();
	$(document).off("keyup", handleKeyUp);
//	$('#feedback').append("Hanged for stupidity!<br>(answer= "+ currentWord +")<div id='replay' class='button'>CONTINUE</div>");
$('#feedback').append("Hanged for stupidity!<br>(answer= "+ currentWord +")");

losses ++;
$('#loss').text(losses);
console.log(losses);
setTimeout(function(){newGame();}, 3000)

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
//ACTUAL GAME CODE//////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

titleScreen();

});//doc ready