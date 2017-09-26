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

Board.prototype.attack = function(x, y) {
    this.board[x][y][1] = 1
}

Board.prototype.placeShip = function(x, y, direction, size) {
    this.board[x][y][0] = 1;
    if (direction === 0){
        for (i = 1; i<size; i++){
            this.board[x][y-i] = 0;
        }
    else if (direction === 1){
        for (i = 1; i<size; i++){
            this.board[x+1][y] = 0;
        }
    else if (direction === 2){
        for (i = 1; i<size; i++){
            this.board[x][y+i] = 0;
        }
    else if (direction === 3){
        for (i = 1; i<size; i++){
            this.board[x-i][y] = 0;
        }

function Game() {
    this.b1 = new Board();
    this.b2 = new Board();
    this.p1 = new Player(this.b1);
    this.p2 = new Player(this.b2);
}

Game.prototype.initate(b, p){
    for (i=0; i<5; i++){
        b.place_ship()
