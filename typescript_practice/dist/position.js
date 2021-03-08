"use strict";
class Position {
    constructor(file, rank) {
        this.file = file;
        this.rank = rank;
    }
    distanceFrom(position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        };
    }
}
//# sourceMappingURL=position.js.map