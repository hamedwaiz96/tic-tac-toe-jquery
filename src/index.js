const View = require("./ttt-view.js");
const Game = require('./game.js');
  $(() => {
    // Your code here
    let $grid = $('.ttt');
    let $body = $('body');
    let game = new Game($grid);
    let view = new View(game, $grid, $body);
    view.setupBoard();
    view.bindEvents();
    // game.playMove();
  });
