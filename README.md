# tic-tac-toe
Project 1 for Jordan R. Johns

**HTML**
The board is made up of a div with nine more divs nested inside, making a 3x3 grid. Inside each div square is a square input button. 


**JAVASCRIPT/jQuery**
In my tic tac toe (TTT) game, I started by creating a turn counter, using a modulus operator to determine if it's Player One or Player Two's turn. It then alternates between players, starting with X (Player 1).

I then created function getWinner that defined variables and created ID's for each cell in my TTT board.

When a player clicks on a button to make a move, the input button changes to "X" or "O" depending on the player's turn, using ".replaceWith" jQuery function to change the input button to an HTML element. This keeps player from being able to click a cell more than once.

Then I used if statements to work out every winning comnbination for "X", and then did the same for winning "O" combinations. When a player wins, it will print "X Wins!" or "O Wins!" into an blank h2 element floated left or right side of the page.

Lastly, I made a simple input button that refreshes the page so players can start a new game.


**CSS**
The CSS is pretty straight-forward. I define the size of my game board, and size and positioning of the divs nested inside. I styled the input buttons that make up the game board to make them square and change color when the mouse hovers over.


**DIFFICULTIES**
As of writing this (1:30pm on Friday 9/11/15), I have not solved the cat's game problem. I know I could have made my JS "DRY-er" by using loops (I think), but I had difficulty figuring them out.
