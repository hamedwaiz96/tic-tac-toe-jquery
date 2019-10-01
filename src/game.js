class Game {
  constructor($el){
    this.mark = "X";
    var grid = new Array(3);
    for (let i = 0; i <= grid.length - 1; i++){
      grid[i] = new Array(3);
    }
    this.grid = grid;
    this.$el = $el;
  }

  reset(){
    var grid = new Array(3);
    for (let i = 0; i <= grid.length - 1; i++){
      grid[i] = new Array(3);
    }
    this.grid = grid;
  }

  switch(){
    this.mark = (this.mark === "X") ? "O" : "X";
  }

  isValidPos(pos){
    if(((pos[0] < 0 || pos[0] > 2) || (pos[1] < 0 || pos[1] > 2)) || !(this.empty(pos))){
      return false;
    }
    return true;
  }

  empty(pos) {
    if(this.grid[pos[0]][pos[1]] == undefined){
      return true;
    }
    return false;
  }

  noWin() {
    let count = 0;
    let game = this;
    for(let i = 0; i <= game.grid.length - 1; i++){
      for(let k = 0; k <= game.grid[i].length - 1; k++){
        if(game.grid[i][k] === "X" || game.grid[i][k] === "O"){
          count += 1;
        }
      }
    }
    if(count === 9 && !(this.won())){
      return true;
    }
    return false;
  }

  won() {
    const game = this;
    let count = 0
    for (let i = 0; i <= game.grid.length - 1; i++){
      for (let j = 0; j <= game.grid.length - 1; j++){
        if (game.grid[i][j] === game.mark){
          for (let h = 0; h <= game.grid.length - 1; h++){
            if (game.grid[i][h] === game.mark){
              count += 1
            } else {
              count = 0
              break
            }
            if (count === 3){
            return game.grid[i][j]
            }
          }
          for (let k = 0; k <= game.grid.length - 1; k++){
            if (game.grid[k][j] === game.mark){
              count += 1
            } else {
              count = 0
              break
            }
            if (count === 3){
              return game.grid[i][j]
            }
          }  
          if((game.grid[0][0] === game.mark && game.grid[1][1] === game.mark) && (game.grid[2][2] === game.mark)){
            return game.grid[i][j]
          }
          else if((game.grid[0][2] === game.mark && game.grid[1][1] === game.mark) && (game.grid[2][0] === game.mark)){
            return game.grid[i][j]
          }
        }
      }
    }    
    return false;
  }
}

module.exports = Game;
