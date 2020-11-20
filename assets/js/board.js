var Board = function(movePieceHandlerCallback) {
  var FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  var RANKS = [1, 2, 3, 4, 5, 6, 7, 8];
  var CELL_CLASS = 'cell';
  var SQUARE_CLASS = 'square';
  var PIECE_CLASS = 'piece';

  var board = null;
  var movePieceHandler = null;

  var getPieceBySquareId = function(squareId) {
    return document.getElementById(squareId)
                   .querySelector('.' + PIECE_CLASS);
  };

  var updatePieceImage = function(pieceElement, image){
    pieceElement.setAttribute('src', image);
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
    var fromSquarePiece = board[fromSquare.dataset.file][fromSquare.dataset.rank];
    var toSquarePiece = board[toSquare.dataset.file][toSquare.dataset.rank];

    resetPieceElement(getPieceBySquareId(fromSquareId));
    updatePieceImage(getPieceBySquareId(toSquareId), fromSquarePiece.getImagePath());

    // Register moves

    if (fromSquareId === toSquareId){
      return;
    }

    board[fromSquare.dataset.file][fromSquare.dataset.rank] = null;
    board[toSquare.dataset.file][toSquare.dataset.rank] = fromSquarePiece;

    if (typeof movePieceHandler === 'function') {
      movePieceHandler(fromSquare.dataset.file, fromSquare.dataset.rank,
                       toSquare.dataset.file, toSquare.dataset.rank,
                       fromSquarePiece,
                       toSquarePiece);
    }
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
    interact('.' + PIECE_CLASS).draggable({
      listeners: {
        move: dragMoveListener,
      },
    }).styleCursor(false);

    interact('.' + CELL_CLASS).dropzone({
      ondrop: function (event) {
        movePiece(event.relatedTarget.parentElement.parentElement.id,
                  event.target.id);
      }
    });
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

  var newBoard = function() {
    clearBoard();
    initBoardHash();
    initStartingPositions();
  };

  var initialize = function() {
    initPieceHandlers();
    movePieceHandler = movePieceHandlerCallback;
  }();

  return {
    clear: clearBoard,
    new: newBoard,
  };
};