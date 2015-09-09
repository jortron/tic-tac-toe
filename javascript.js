$(function () {

	function playerOne() {
		$(".butt").on("click",function(){
			($ (this) .replaceWith ("X") );
			
		});
		
	}
	playerTwo();	

	function playerTwo() {
	$(".butt").on("click",function(){
		($ (this) .replaceWith ("O") );
			
	});
		
	}
	playerOne();	


});
