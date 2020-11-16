document.addEventListener("DOMContentLoaded", function(event) {
    game = Game(Board);
});

var Game = function(boardHandler) {
  var board = null;

  var initialize = function(boardHandler) {
    var board = boardHandler();
    board.new();
    console.log("init");
  }(boardHandler);

  return {
  };
};