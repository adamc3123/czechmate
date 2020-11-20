
var King = function(playerColor) {
  var IMAGES_BASE = "assets/images/";
  var BLACK_KING = IMAGES_BASE + "kdt.svg";
  var WHITE_KING = IMAGES_BASE + "klt.svg";
  var PIECE_TYPE = 'king';

  var player = "";

  var getImagePath = function() {
    return (player === "white" ? WHITE_KING : BLACK_KING);
  };

  var getPlayer = function() {
    return player;
  };

  var getType = function() {
    return PIECE_TYPE;
  };

  var initialize = function() {
    player = playerColor;
  }();

  return {
    getImagePath: getImagePath,
    getPlayer: getPlayer,
    getType: getType
  };
};

var Queen = function(playerColor) {
  var IMAGES_BASE = "assets/images/";
  var BLACK_QUEEN = IMAGES_BASE + "qdt.svg";
  var WHITE_QUEEN = IMAGES_BASE + "qlt.svg";
  var PIECE_TYPE = 'queen';

  var player = "";

  var getImagePath = function() {
    return (player === "white" ? WHITE_QUEEN : BLACK_QUEEN);
  };

  var getPlayer = function() {
    return player;
  };

  var getType = function() {
    return PIECE_TYPE;
  };

  var initialize = function() {
    player = playerColor;
  }();

  return {
    getImagePath: getImagePath,
    getPlayer: getPlayer,
    getType: getType
  };
};

var Rook = function(playerColor) {
  var IMAGES_BASE = "assets/images/";
  var BLACK_ROOK = IMAGES_BASE + "rdt.svg";
  var WHITE_ROOK = IMAGES_BASE + "rlt.svg";
  var PIECE_TYPE = 'rook';

  var player = "";

  var getImagePath = function() {
    return (player === "white" ? WHITE_ROOK : BLACK_ROOK);
  };

  var getPlayer = function() {
    return player;
  };

  var getType = function() {
    return PIECE_TYPE;
  };

  var initialize = function() {
    player = playerColor;
  }();

  return {
    getImagePath: getImagePath,
    getPlayer: getPlayer,
    getType: getType
  };
};

var Bishop = function(playerColor) {
  var IMAGES_BASE = "assets/images/";
  var BLACK_BISHOP = IMAGES_BASE + "bdt.svg";
  var WHITE_BISHOP = IMAGES_BASE + "blt.svg";
  var PIECE_TYPE = 'bishop';

  var player = "";

  var getImagePath = function() {
    return (player === "white" ? WHITE_BISHOP : BLACK_BISHOP);
  };

  var getPlayer = function() {
    return player;
  };

  var getType = function() {
    return PIECE_TYPE;
  };

  var initialize = function() {
    player = playerColor;
  }();

  return {
    getImagePath: getImagePath,
    getPlayer: getPlayer,
    getType: getType
  };
};

var Knight = function(playerColor) {
  var IMAGES_BASE = "assets/images/";
  var BLACK_KNIGHT = IMAGES_BASE + "ndt.svg";
  var WHITE_KNIGHT = IMAGES_BASE + "nlt.svg";
  var PIECE_TYPE = 'knight';

  var player = "";

  var getImagePath = function() {
    return (player === "white" ? WHITE_KNIGHT : BLACK_KNIGHT);
  };

  var getPlayer = function() {
    return player;
  };

  var getType = function() {
    return PIECE_TYPE;
  };

  var initialize = function() {
    player = playerColor;
  }();

  return {
    getImagePath: getImagePath,
    getPlayer: getPlayer,
    getType: getType
  };
};

var Pawn = function(playerColor) {
  var IMAGES_BASE = "assets/images/";
  var BLACK_PAWN = IMAGES_BASE + "pdt.svg";
  var WHITE_PAWN = IMAGES_BASE + "plt.svg";
  var PIECE_TYPE = 'pawn';

  var player = "";

  var getImagePath = function() {
    return (player === "white" ? WHITE_PAWN : BLACK_PAWN);
  };

  var getPlayer = function() {
    return player;
  };

  var getType = function() {
    return PIECE_TYPE;
  };

  var initialize = function() {
    player = playerColor;
  }();

  return {
    getImagePath: getImagePath,
    getPlayer: getPlayer,
    getType: getType
  };
};