function createEmptyBoard(size) {
    return Array(size).fill().map(() => Array(size).fill(false));
}

function isSafe(board, row, col) {
    const N = board.length;
    for (let i = 0; i < col; i++) {
        if (board[row][i]) return false;
    }

    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j]) return false;
    }

    
    for (let i = row, j = col; j >= 0 && i < N; i++, j--) {
        if (board[i][j]) return false;
    }

    return true;
}

function solveNQueenUtil(board, col, animations) {
    const N = board.length;
    if (col >= N) return true;

    for (let i = 0; i < N; i++) {
        if (isSafe(board, i, col)) {
            board[i][col] = true;
            animations.push([i, col, true]);
            
            if (solveNQueenUtil(board, col + 1, animations)) return true;
            
            board[i][col] = false;
            animations.push([i, col, false]);
        }
    }
    return false;
}

function getNQueensAnimations(size) {
    const board = createEmptyBoard(size);
    const animations = [];
    solveNQueenUtil(board, 0, animations);
    return animations;
}