"use strict";
class Game {
    constructor() {
        this.pieces = Game.makePieces();
    }
    static makePieces() {
        return [
            new King('Black', 'E', 1),
            new King('White', 'D', 8),
            new Queen('Black', 'D', 1),
            new Queen('White', 'E', 8),
            new Bishop('Black', 'C', 1),
            new Bishop('Black', 'F', 1),
            new Bishop('White', 'C', 8),
            new Bishop('White', 'F', 8),
            new Rook('Black', 'B', 1),
            new Rook('Black', 'G', 1),
            new Rook('White', 'B', 8),
            new Rook('White', 'G', 8),
            new Knight('Black', 'A', 1),
            new Knight('Black', 'H', 1),
            new Knight('White', 'A', 8),
            new Knight('White', 'H', 8),
            new Pawn('Black', 'A', 2),
            new Pawn('Black', 'B', 2),
            new Pawn('Black', 'C', 2),
            new Pawn('Black', 'D', 2),
            new Pawn('Black', 'E', 2),
            new Pawn('Black', 'F', 2),
            new Pawn('Black', 'G', 2),
            new Pawn('Black', 'H', 2),
            new Pawn('White', 'A', 7),
            new Pawn('White', 'B', 7),
            new Pawn('White', 'C', 7),
            new Pawn('White', 'D', 7),
            new Pawn('White', 'E', 7),
            new Pawn('White', 'F', 7),
            new Pawn('White', 'G', 7),
            new Pawn('White', 'H', 7),
        ];
    }
}
//# sourceMappingURL=game.js.map