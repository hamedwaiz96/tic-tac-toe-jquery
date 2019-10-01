const View = require("./ttt-view.js");
const Game = require('./game.js');
  $(() => {
    // Your code here
    let $grid = $('.ttt');
    let game = new Game($grid);
    let view = new View(game, $grid);
    view.setupBoard();
    view.bindEvents();
    // game.playMove();
  });
