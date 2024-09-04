import { Square } from "./Board";

class Snake {
  private length: number;
  private headPosition: {
    x: Square | null;
    y: Square | null;
  };

  constructor(boardSize: number) {
    this.length = 2;
    this.headPosition = { x: null, y: null };
  }

  setLength(newLength: number) {
    this.length = newLength;
  }

  getLength() {
    return this.length;
  }

  setHeadPosition(x: number, y: number) {
    // this.headPosition.x = x;
    // this.headPosition.y = y;
  }

  getHeadPosition() {
    return this.headPosition;
  }
}

export { Snake };
