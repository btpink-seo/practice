abstract class Piece {
  protected position: Position

  constructor(
    private readonly color: Color,
    file: FFile,
    rank: Rank
  ) {
    this.position = new Position(file, rank)
  }

  moveto(position: Position) {
    this.position = position
  }

  // abstract canMoveTo(position: Position): boolean
}
