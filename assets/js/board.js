var Board = function() {
  var FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  var RANKS = [1, 2, 3, 4, 5, 6, 7, 8];

  var SQUARE_CLASS = 'square';
  var PIECE_CLASS = 'piece';

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
      resetPieceElement(squares[i].querySelector('.' + PIECE_CLASS));
    }
  };

  var getPieceBySquareId = function(squareId) {
    return document.getElementById(squareId)
                   .querySelector('.' + PIECE_CLASS);
  };

  var updatePieceImage = function(pieceElement, image){
    pieceElement.setAttribute('src', image)
  };

  var addPiece = function(file, rank, piece) {
    board[file][rank] = piece;
    var pieceElement = getPieceBySquareId('square_'+file+rank);
    updatePieceImage(pieceElement, piece.getImagePath());
  };

  var resetPieceElement = function(pieceElement) {
    var attributesToReset = ['src', 'style', 'data-x', 'data-y'];
    attributesToReset.forEach(function(attribute){
      pieceElement.setAttribute(attribute, '');
    });
  };

  var movePiece = function(fromSquareId, toSquareId) {
    var fromSquare = document.getElementById(fromSquareId);
    var toSquare = document.getElementById(toSquareId);
    var piece = board[fromSquare.dataset.file][fromSquare.dataset.rank];

    resetPieceElement(getPieceBySquareId(fromSquareId));
    getPieceBySquareId(toSquareId).setAttribute('src', piece.getImagePath());

    board[toSquare.dataset.file][toSquare.dataset.rank] = piece;
    board[fromSquare.dataset.file][fromSquare.dataset.rank] = null;
  };

  var initStartingPositions = function() {
    addPiece('a', 1, Rook('white'));
    addPiece('b', 1, Knight('white'));
    addPiece('c', 1, Bishop('white'));
    addPiece('d', 1, Queen('white'));
    addPiece('e', 1, King('white'));
    addPiece('f', 1, Bishop('white'));
    addPiece('g', 1, Knight('white'));
    addPiece('h', 1, Rook('white'));

    addPiece('a', 8, Rook('black'));
    addPiece('b', 8, Knight('black'));
    addPiece('c', 8, Bishop('black'));
    addPiece('d', 8, King('black'));
    addPiece('e', 8, Queen('black'));
    addPiece('f', 8, Bishop('black'));
    addPiece('g', 8, Knight('black'));
    addPiece('h', 8, Rook('black'));

    for(var f = 0; f < FILES.length; f++) {
      addPiece(FILES[f], 2, Pawn('white'));
      addPiece(FILES[f], 7, Pawn('black'));
    }
  };

  var newBoard = function() {
    clearBoard();
    initBoardHash();
    initStartingPositions();
  };

  var dragMoveListener = function(event) {
    var target = event.target;
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    target.style.webkitTransform =
      target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  };

  var initPieceHandlers = function() {
    interact('.draggable').draggable({
      listeners: {
        move: dragMoveListener,
      },
    }).styleCursor(false)

    interact('.dropzone')
      .dropzone({
        ondrop: function (event) {
          console.log(event.relatedTarget.parentElement.parentElement.id + ' to ' + event.target.id);
          movePiece(event.relatedTarget.parentElement.parentElement.id,
                    event.target.id);
        }
      })
  }

  var initialize = function() {
    initPieceHandlers();
  }();

  return {
    clear: clearBoard,
    new: newBoard,
  };
};