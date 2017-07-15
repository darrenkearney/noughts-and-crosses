
window.onload = function() {

    console.log("Hello there!");
    var canvas = document.getElementById("gamecanvas");
    var ctx = canvas.getContext('2d');
    document.addEventListener("keydown", keyPush);
}

board = [
[0,0,0],
[0,0,0],
[0,0,0]
]

player = 'x' // 'x' or 'o'
// is_turn_taken = false;
is_game_over = false;
is_in_play = true;

function game() {
    console.table(board);

    if ( is_in_play ) {

        // Check for victory
        // Need's three in a line

        teststr = "";
        for (y in board) {
            teststr=""; // Reset test string each row
            for (x in board[y]) {
                teststr+=board[y][x];
                if ( teststr === player+player+player ){
                    gameOver();
                    break;
                }
            }
        }

        // Transpose columns onto rows in a test board
        test = [ [0,0,0],[0,0,0],[0,0,0] ];
        teststr = "";
        for (x in board[0]){
            teststr = ""; // Reset test string each column
            for (y in board) {
                test[x][y] = board[y][x];
                teststr += board[y][x];
                if ( teststr === player+player+player ){
                    gameOver();
                    break;
                }
            }
        }

        console.log(test);

        if (board[0][0] === player && board[1][1] === player && board[2][2] === player ) {
            gameOver();
        }
        else if (board[2][0] === player && board[1][1] === player && board[0][2] === player ) {
            gameOver();
        }


        if ( player === 'x' ) {
            player = 'o';
        }
        else if ( player === 'o' ) {
            player = 'x';
        }
    }
}

function gameOver(){
    console.log(player.toUpperCase() + " Wins!");
    is_game_over = true;
    is_in_play = false;
}

function keyPush(event){
    // console.log("Keycode for pressed key is: " + event.keyCode);
    switch(event.keyCode){
        case 81: // Q is pressed
            console.log("Q");
            if ( board[0][0] === 0 && is_in_play ) {
                board[0][0] = player;
                game()
            }
            break;
        case 87: // W is pressed
            console.log("W");
            if ( board[0][1] === 0 && is_in_play ) {
                board[0][1] = player;
                game();
            }
            break;
        case 69: // E is pressed
            console.log("E");
            if ( board[0][2] === 0 && is_in_play ) {
                board[0][2] = player;
                game();
            }
            break;
        case 65: // A is pressed
            console.log("A");
            if ( board[1][0] === 0 && is_in_play ) {
                board[1][0] = player;
                game();
            }
            break;
        case 83: // S is pressed
            console.log("S");
            if ( board[1][1] === 0 && is_in_play ) {
                board[1][1] = player;
                game();
            }
            break;
        case 68: // D is pressed
            console.log("D");
            if ( board[1][2] === 0 && is_in_play ) {
                board[1][2] = player;
                game();
            }
            break;
        case 90: // Z is pressed
            console.log("Z");
            if ( board[2][0] === 0 && is_in_play ) {
                board[2][0] = player;
                game();
            }
            break;
        case 88: // X is pressed
            console.log("X");
            if ( board[2][1] === 0 && is_in_play ) {
                board[2][1] = player;
                game();
            }
            break;
        case 67: // C is pressed
            console.log("C");
            if ( board[2][2] === 0 && is_in_play ) {
                board[2][2] = player;
                game();
            }
            break;
    }
}
