class View {
  constructor(game, $el, body) {
  	this.$el = $el;
  	this.game = game;
    this.body = body;
  }

  bindEvents() {
    const board = this;
    this.$el.on('click', 'li', (event => {
      const $li = $(event.currentTarget);
      if($li.hasClass('clicked')){
        return
      } else {
        $li.removeClass("els");
        $li.addClass('clicked elsc');
        $li.attr('data-after', `${board.game.mark}`)
        let row = $li.data('pos')[0];
        let col = $li.data('pos')[1];
        board.game.grid[row][col] = board.game.mark;
        if (board.game.won() !== false){
          let winner = board.game.won();
          alert(`winner is ${winner}`)
          board.reset();
        } else if(board.game.noWin()){
          alert("No one Won!")
          board.reset();
        }
        board.game.switch();
      }
    }))
    this.body.on('click', '.button', (e => {
      e.preventDefault();
      board.reset();
    }))
  }

  setupBoard() {
    const $ul = document.createElement("ul");
    const $body = $(".ttt");
    $body.append($ul);
    for(let i = 0; i <= 2; i++){
      for(let j = 0; j <= 2; j++){
        let li = document.createElement("li");
        let $li = $(li);
        $li.data('pos', [i, j])
        $li.addClass('els');
        $ul.append($li[0]);
      }
    }
    const ul = $body.find("ul");

    ul.addClass("grid");
    }

    reset(){
      $('.grid').remove();
      this.game.reset();
      this.setupBoard();
      this.bindEvents();
    }
}

module.exports = View;
