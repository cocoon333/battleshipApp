'use strict';

function Player(board, name) {
    this.name = name;
    this.board = board();
}

Player.prototype.placeShip = function(x, y, direction) {
    this.board.placeShip(x, y, direction);
}


Player.prototype.attack = function(x, y) {
    this.board.attack(x, y);
}

function Board() {
    this.boardLen = 10;
    this.board = [];
    for (i=0; i<this.boardLen; i++){
        this.board.push([]);
        for (j=0; j<this.boardLen; j++){
            this.board[i].push([0, 0]);
        }
    }
}

Board.prototype.placeShip = function(x, y, direction, size) {
    if(this.assertShip(x, y, direction, size)){
        return false;
    }

    this.board[x][y][0] = 1;
    if (direction === 0){
        for (i = 0; i<size; i++){
