'use strict';

function Player(board, name) {
    this.name = name;
    this.board = board();
}

Player.prototype.placeShip = function(x, y, direction) {
    this.board.placeShip(x, y, direction);
}


Player.prototype.attack = function(x, y) {
    this.board.attack(x, y)
