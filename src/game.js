class Game {
  constructor($el){
    this.mark = "X";
    this.$el = $el;
  }

  playMove(){
    const game = this;
    const $li = this.$el.find("li");
    $li.on("click", function(event){
      if($(this).hasClass("clicked")){
        alert("wrong move");
      }
      else {
        $(this).removeClass("els");
        $(this).addClass("clicked elsc");
        $(this).attr("data-after", `${game.mark}`);
        game.switch();
      }
    });
  }

  switch(){
    this.mark = (this.mark === "X") ? "O" : "X";
  }

  won() {
    
  }
}

module.exports = Game;
