$(document).ready(function(){
	$(function () {
		var turnCount=0;
			$('.butt').click(function(){
				if(turnCount %2 === 0){
					($ (this) .replaceWith ('X') );
				}
				else{
					($ (this) .replaceWith ('O') );
				}

				turnCount++;

				getWinner();

			

			})


	})
// determine winner
	function getWinner(){
		var a = $('#1').text();
		var b = $('#2').text();
		var c = $('#3').text();
		var d = $('#4').text();
		var e = $('#5').text();
		var f = $('#6').text();
		var g = $('#7').text();
		var h = $('#8').text();
		var i = $('#9').text();
		
//top row winner x
		if(a === 'X' && b === 'X' && c === 'X'){
			$('#xWins').html('X Wins!');
			// alert("X wins!!")
		}
//middle row winner x
		if(d === 'X' && e === 'X' && f === 'X'){
			$('#xWins').html('X Wins!');
		}
//bottom row winner x		
		if(g === 'X' && h === 'X' && i === 'X'){
			$('#xWins').html('X Wins!');
		}

//first coloumn winner x
		if(a === 'X' && d === 'X' && g === 'X'){
			$('#xWins').html('X Wins!');
		}
//second coloumn winner x
		if(b === 'X' && e === 'X' && h === 'X'){
			$('#xWins').html('X Wins!');
		}
//third coloumn winner x		
		if(c === 'X' && f === 'X' && i === 'X'){
			$('#xWins').html('X Wins!');
		}
//left to right diagonal winner x
		if(a === 'X' && e === 'X' && i === 'X'){
			$('#xWins').html('X Wins!');
		}
//right to left diagonal winner x		
		if(c === 'X' && e === 'X' && g === 'X'){
			$('#xWins').html('X Wins!');
		}
//top row winner o
		if(a === 'O' && b === 'O' && c === 'O'){
			$('#oWins').html('O Wins!');
		}
//middle row winner o
		if(d === 'O' && e === 'O' && f === 'O'){
			$('#oWins').html('O Wins!');
		}
//bottom row winner o		
		if(g === 'O' && h === 'O' && i === 'O'){
			$('#oWins').html('O Wins!');
		}

//first coloumn winner o
		if(a === 'O' && d === 'O' && g === 'O'){
			$('#oWins').html('O Wins!');
		}
//second coloumn winner o
		if(b === 'O' && e === 'O' && h === 'O'){
			$('#oWins').html('O Wins!');
		}
//third coloumn winner o		
		if(c === 'O' && f === 'O' && i === 'O'){
			$('#oWins').html('O Wins!');
		}
//left to right diagonal winner o
		if(a === 'O' && e === 'O' && i === 'O'){
			$('#oWins').html('O Wins!');
		}
//right to left diagonal winner o		
		if(c === 'O' && e === 'O' && g === 'O'){
			$('#oWins').html('O Wins!');
		}

	}


//reset button		
	$('.reset').click(function() {
	    location.reload();
	});


});





