var Board = function() {
  var FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];
  var RANKS = [1, 2, 3, 4, 5, 6, 7, 8];

  var SQUARE_CLASS = "square";
  var PIECE_CLASS = "piece";

  var board = null;

  var initBoardHash = function() {
    board = {};

    for(var f = 0; f < FILES.length; f++) {
      board[FILES[f]] = {};
      for(var r = 0; r < RANKS.length; r++) {
        board[FILES[f]][RANKS[r]] = null;
      }
    }
  };

  var clearBoard = function() {
    var squares = document.getElementsByClassName(SQUARE_CLASS);

    for (var i = 0; i < squares.length; i++) {
      squares[i].querySelector("." + PIECE_CLASS).src = "";
    }
  };

  var updateSquareImage = function(file, rank, image){
    document.getElementById("square_"+file+rank)
            .querySelector("." + PIECE_CLASS).src = image;
  }

  var addPiece = function(file, rank, piece) {
    board[file][rank] = piece;
    updateSquareImage(file, rank, piece.getImagePath());
  };

  var initStartingPositions = function() {
    addPiece("a", 1, Rook("white"));
    addPiece("b", 1, Knight("white"));
    addPiece("c", 1, Bishop("white"));
    addPiece("d", 1, Queen("white"));
    addPiece("e", 1, King("white"));
    addPiece("f", 1, Bishop("white"));
    addPiece("g", 1, Knight("white"));
    addPiece("h", 1, Rook("white"));

    addPiece("a", 8, Rook("black"));
    addPiece("b", 8, Knight("black"));
    addPiece("c", 8, Bishop("black"));
    addPiece("d", 8, King("black"));
    addPiece("e", 8, Queen("black"));
    addPiece("f", 8, Bishop("black"));
    addPiece("g", 8, Knight("black"));
    addPiece("h", 8, Rook("black"));

    for(var f = 0; f < FILES.length; f++) {
      addPiece(FILES[f], 2, Pawn("white"));
      addPiece(FILES[f], 7, Pawn("black"));
    }
  };

  var newBoard = function() {
    clearBoard();
    initBoardHash();
    initStartingPositions();
  };

  var initialize = function() {

  }();

  return {
    clear: clearBoard,
    new: newBoard,
  };
};