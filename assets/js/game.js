document.addEventListener("DOMContentLoaded", function(event) {
    game = Game(Board);
});

var Game = function(boardHandler) {
  var board = null;

  var movePieceHanlder = function(fromFile, fromRank, toFile, toRank, fromPiece, toPiece) {
    console.log(fromFile + fromRank + ' to ' + toFile + toRank);
    console.log(fromPiece.getPlayer() + " " + fromPiece.getType());
    if (toPiece) {
    console.log(toPiece.getPlayer() + " " + toPiece.getType());
    }
  };

  var initialize = function() {
    var board = boardHandler(movePieceHanlder);
    board.new();
  }();

  return {
  };
};