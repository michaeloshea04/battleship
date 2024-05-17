const boardSize = 10;

/*
function createGameboard(){
    const board = [];
    for (let i = 0; i < boardSize; i++){
        board[i] = [];
        for (let j = 0; j < boardSize; j++){
            board[i][j] = '';
        }
    }
    return board;
}

module.exports = createGameboard;
*/

function createEmptyBoard(size) {
    const board = [];
    for (let i = 0; i < size; i++) {
        board[i] = [];
    }
    return board;
}

function initialiseBoard(board) {
    const size = board.length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            board[i][j] = 'w';
        }
    }
}




const myBoard = createEmptyBoard(4);
initialiseBoard(myBoard);
console.log(myBoard[0]);
