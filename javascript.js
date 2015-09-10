$(document).ready(function(){
$(function () {
// define playerOne and playerTwo variables:
	var turnCount=0;

	$(".butt").click(function(){
		if(turnCount %2 === 0){
			($ (this) .replaceWith ("X") );
		}else{
			($ (this) .replaceWith ("O") );
		}

		turnCount++;
	})

	// var playerOne = function playerOne() {
	// 	$(".butt").on("click",function(){
			
			
	// 	});
	// }
		

	// var playerTwo = function playerTwo() {
	// 	$(".butt").on("click",function(){
	// 		($ (this) .replaceWith ("O") );
			
	// 	});
	})
// playerOne goes first marking X
// playerOne()	
// determine when playerOne went last

// if playerOne went last, make it playerTwo's turn

// if playerTwo went last, make it playerOne's turn

// alternate turns until a player has 3 rows, 3 columns, or 3 diagonals filled with their peice

// determine winner

//reset button		
	$('#reset').click(function() {
	    location.reload();
	});


});





