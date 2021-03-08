"use strict";
class Piece {
    constructor(color, file, rank) {
        this.color = color;
        this.position = new Position(file, rank);
    }
    moveto(position) {
        this.position = position;
    }
}
//# sourceMappingURL=piece.js.map