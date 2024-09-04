import { Square, Board } from "./Board";
import { Snake } from "./Snake";

class Game {
  public board: Board;
  public snake: Snake;

  constructor(boardSize: number) {
    this.board = new Board(boardSize);
    this.snake = new Snake(boardSize);
  }

  private getRandomnumber(max: number, min = 1) {
    return Math.random() * (max-min) + min;
  }

  private gameLoop() {

  }
}

export default Game;