class Square {
  public isOccupied: Boolean;
  public containsFood: Boolean;
  public neighbors: {
    0: Square | null,
    1: Square | null,
    2: Square | null,
    3: Square | null,
  }

  constructor(boardSize: Number) {
    this.isOccupied = false;
    this.containsFood = false;
    this.neighbors = {
      0: null,
      1: null,
      2: null,
      3: null
    }
  }
}

// Edges are just an extension of Square that are always
// occupied and are ineligible for food spawns
class Edge extends Square {
  constructor(
  ) {
    super()
    this.isOccupied = true
    this.containsFood = false
  }
}

class Board {
  board: Array<Array<Square>>;

  constructor()
}

export {
  Square,
  Board,
  Edge
}