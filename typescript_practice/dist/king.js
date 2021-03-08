"use strict";
class King extends Piece {
    canMoveTo(position) {
        const distance = this.position.distanceFrom(position);
        return distance.rank < 2 && distance.file < 2;
    }
}
//# sourceMappingURL=king.js.map