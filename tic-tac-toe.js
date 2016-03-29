// TODO
// Create a Player class that has one attribute, `name`.
// 
// Verify that you can create a new instance of Player:
//
// p = new Player("Mary");
// p.name
// // Mary
//
var Player = undefined; /* TODO replace undefined with class definition */

// TicTacToe class is the main class of the game. The constructor should take
// two arguments, the two names of the players.
var TicTacToe = function (/* TODO fill in arguments */) {
  this.player1 = new Player(/* TODO */);
  this.player2 = new Player(/* TODO */);

  this.reset();
};

// TODO
// Reset the game with a new board and player 1 as the current player.
TicTacToe.prototype.reset = function () {
}

// Now, verify that you can create an instance of TicTacToe:
//
// game = new TicTacToe("John", "Mary");
// game.player1.name
// // John
// game.player2.name
// // Mary
// game.board
// // array of arrays representing board state

// At this point, you should scroll down and implement
// TicTacToe.prototype.print, which prints the state of the board. This will be
// necessary to play the game and to debug our program as we write it!
//
// Once you've done that, this should work:
//
// game = new TicTacToe("John", "Mary");
// game.board.print()
//
// 123
// 456
// 789

// TODO
// Print the board and the current player's name.
TicTacToe.prototype.print = function () {
}

// game = new TicTacToe("John", "Mary");
// game.print()
//
// 123
// 456
// 789
// It's John's turn!

// TODO
// Switch this.currentPlayer to the other player.
TicTacToe.prototype.switchCurrentPlayer = function () {
}

// game = new TicTacToe("John", "Mary");
// game.print()
//
// 123
// 456
// 789
// It's John's turn!
//
// game.switchCurrentPlayer();
// game.print()
//
// 123
// 456
// 789
// It's Mary's turn!

// TODO
// Should return "X" if the current turn is player 1's. Return "O" otherwise.
TicTacToe.prototype.currentChar = function () {
}

// game = new TicTacToe("John", "Mary");
// game.currentChar();
// X
// game.switchCurrentPlayer();
// game.currentChar();
// O
// game.switchCurrentPlayer();
// game.currentChar();
// X

// TODO
// Play a turn. Takes a position as input and play that position for the current
// player.
//
// If the game is already over, it's an invalid move. Print out "Game is over."
//
// If, after the turn is played, there is a winner, print out the player's name
// as winner.
//
// If the game is now tied, print this out.
//
TicTacToe.prototype.play = function (position) {

  // TODO, using the functions you implemented above:
  // - Check if the game is over. Return if it is.
  // - Play the given position.
  // - Check for a winner after position is played.
  // - Switch the current player to the next one.
  // - Print the state of the board and next person's turn.
}

// You should now be able to play the game. Congrats, you're done! (But you may
// have some bugs in the edge-cases. Seek them out).
//
// g = new TicTacToe("John", "Mary")
// g.print()
//
// 123
// 456
// 789
// It is John's turn!
//
// g.play(1)
//
// X23
// 456
// 789
// It is Mary's turn!
//
// g.play(2)
//
// XO3
// 456
// 789
// It is John's turn!
//
// g.play(5)
//
// XO3
// 4X6
// 789
// It is Mary's turn!
//
// g.play(3)
//
// XOO
// 4X6
// 789
// It is John's turn!
//
// g.play(9)
// Wow! John has won!

// The Board class holds the state of the board. To make it simple, the starting
// state is the positions 1 to 9.
var Board = function () {
  this.board = [["1", "2", "3"],
                ["4", "5", "6"],
                ["7", "8", "9"]];
}

// TODO
// Prints the board state to the console. At the beginning, the board should
// just show the positions:
//
// 123
// 456
// 789
//
// As moves are made, these positions turn into Xs and Os:
//
// 1X3
// 456
// 78O
//
// As a challenge, print out a better-looking board like a real tic-tac-toe
// game.
//
// This is a fun exercise but not part of the core OO lesson. Don't spend too
// much time on this. Ask for help if you get stuck on this part.
//
// As a harder challenge, write the board in HTML and use jQuery for user input.
//
Board.prototype.print = function () {
};

// TODO: This is the second-hardest function in this game. If you want to
// challenge yourself, delete the code and see if you can write it yourself.
//
// Given a character ("X" or "O") and position 1 to 9, set board to new state.
// Print out warning messages for invalid characters, positions, and
// already-played positions.
Board.prototype.play = function (char, position) {
  if (char !== "X" && char != "O") {
    console.log("Invalid character. Try again.");
    return;
  }

  if (position < 1 || position > 9) {
    console.log("Positions must be from 1 to 9. Try again.");
    return;
  }

  var row = Math.floor((position - 1) / 3);
  var col = (position - 1) % 3;

  var currentChar = this.board[row][col];
  if (currentChar === "X" || currentChar === "O") {
    console.log("Position has already been played. Try again.");
    return;
  }

  this.board[row][col] = char;

  return;
};

// TODO: This is the hardest function in this game. If you want to challenge
// yourself, delete the code and see if you can write it yourself. There are
// several ways of writing this function.
//
// Returns "X" or "O" if one of the players have won.
// Returns "tie" if the game is done with no winner.
// Return undefined if the game is still in progress.
Board.prototype.winner = function () {
  var playerChars = ["X", "O"];
  var numTurns = 0;

  for (var numPlayers = 0; numPlayers < 2; numPlayers++) {
    var char = playerChars[numPlayers];

    // Check if player won horizontally or vertically
    for (var r = 0; r < 3; r++) {
      var horizontalCount = 0;
      var verticalCount = 0;

      for (var c = 0; c < 3; c++) {

        if (this.board[r][c] == char) {
          horizontalCount += 1;
          numTurns += 1;
        }

        if (this.board[c][r] == char) {
          verticalCount += 1;
        }
      }

      if (horizontalCount == 3 || verticalCount == 3) {
        return char;
      }
    }

    // Check if players won diagonally
    var count1 = 0;
    var count2 = 0;
    for (var i = 0; i < 3; i++) {
      if (this.board[i][i] == char) {
        count1 += 1
      }

      if (this.board[i][2-i] === char) {
        count2 += 1
      }
    }
    if (count1 == 3 || count2 === 3) {
      return char;
    }
  }

  if (numTurns == 9) {
    return "tie";
  } else {
    return;
  }
};