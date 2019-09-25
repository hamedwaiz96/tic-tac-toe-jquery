class View {
  constructor(game, $el) {
  	this.$el = $el;
  	this.game = game;
  }

  bindEvents() {

  }

  makeMove($square) {

  }

  setupBoard() {
    const $ul = document.createElement("ul");
    const $body = $(".ttt");
    $body.append($ul);
    for(let i = 1; i <= 9; i++){
        let $li = document.createElement("li");
        $ul.append($li);
    }
    const ul = $body.find("ul");
    ul.addClass("grid");
    const li = $body.find("li");
    li.each(function(index){
    	$(this).addClass("els");
    })
    }
}

module.exports = View;
