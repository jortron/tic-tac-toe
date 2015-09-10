$(document).ready(function(){
	$(function () {
// if playerOne went last, make it playerTwo's turn
// if playerTwo went last, make it playerOne's turn
		var turnCount=0;

		$('.butt').click(function(){
			if(turnCount %2 === 0){
				($ (this) .replaceWith ('X') );
			}else{
				($ (this) .replaceWith ('O') );
			}

			turnCount++;

			getWinner();

			if(getWinner === null && turnCount===9){
				alert('Cats Game Sucker')
			}

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
			alert("X wins!!")
		}
//middle row winner x
		if(d === 'X' && e === 'X' && f === 'X'){
			alert("X wins!!")
		}
//bottom row winner x		
		if(g === 'X' && h === 'X' && i === 'X'){
			alert("X wins!!")
		}

//first coloumn winner x
		if(a === 'X' && d === 'X' && g === 'X'){
			alert("X wins!!")
		}
//second coloumn winner x
		if(b === 'X' && e === 'X' && h === 'X'){
			alert("X wins!!")
		}
//third coloumn winner x		
		if(c === 'X' && f === 'X' && i === 'X'){
			alert("X wins!!")
		}
//left to right diagonal winner x
		if(a === 'X' && e === 'X' && i === 'X'){
			alert("X wins!!")
		}
//right to left diagonal winner x		
		if(c === 'X' && e === 'X' && g === 'X'){
			alert("X wins!!")
		}
//top row winner o
		if(a === 'O' && b === 'O' && c === 'O'){
			alert("O wins!!")
		}
//middle row winner o
		if(d === 'O' && e === 'O' && f === 'O'){
			alert("O wins!!")
		}
//bottom row winner o		
		if(g === 'O' && h === 'O' && i === 'O'){
			alert("O wins!!")
		}

//first coloumn winner o
		if(a === 'O' && d === 'O' && g === 'O'){
			alert("X wins!!")
		}
//second coloumn winner o
		if(b === 'O' && e === 'O' && h === 'O'){
			alert("O wins!!")
		}
//third coloumn winner o		
		if(c === 'O' && f === 'O' && i === 'O'){
			alert("O wins!!")
		}
//left to right diagonal winner o
		if(a === 'O' && e === 'O' && i === 'O'){
			alert("O wins!!")
		}
//right to left diagonal winner o		
		if(c === 'O' && e === 'O' && g === 'O'){
			alert("O wins!!")
		}

	}


//reset button		
	$('.reset').click(function() {
	    location.reload();
	});


});





