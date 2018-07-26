var x = 0;
var y = 0;

var moveX = 1;
var moveY = 0;

var blockSize = 20;

var foodX = 0;
var foodY = 0;

var snake = [];
var snakeLenght = 1;

var currentIntervalId;

// 25x25 grid

window.onload = function init() {

    c = document.getElementById("snake-game");
    ctx = c.getContext("2d");

    document.addEventListener('keypress', keyPress);

    snake.push(new Coord(10 * blockSize, 10 * blockSize));

    spawnFood();

    currentIntervalId = setInterval(update, 1000 / 15);
}

function keyPress(evnt) {
    // Up
    if (evnt.keyCode == 38 && moveY != 1) {
        moveX = 0;
        moveY = -1;
        return;
    }
    // Down
    if (evnt.keyCode == 40 && moveY != -1) {
        moveX = 0;
        moveY = 1;
        return;
    }
    // Left
    if (evnt.keyCode == 37 && moveX != 1) {
        moveX = -1;
        moveY = 0;
        return;
    }
    // Right
    if (evnt.keyCode == 39 & moveX != -1) {
        moveX = 1;
        moveY = 0;
        return;
    }
}

function Coord(newX, newY) {
    this.x = newX;
    this.y = newY;
}

function addToSnake(obj) {
    snake.push(obj);
}

function update() {
    x = snake[0].x + moveX * blockSize;
    y = snake[0].y + moveY * blockSize;

    // reaches end of field
    if (x < 0) {
        x = c.width - blockSize;
    }
    if (x == c.width) {
        x = 0;
    }
    if (y < 0) {
        y = c.width - blockSize;
    }
    if (y == c.width) {
        y = 0;
    }

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, c.width, c.height);

    //reaches food
    if (x == foodX && y == foodY) {
        addToSnake(new Coord(0, 0));
        spawnFood();
        snakeLenght++;
    }

    //move each link in snake
    ctx.fillStyle = "green";
    ctx.fillRect(x, y, blockSize, blockSize);
    for (var i = snakeLenght - 1; i >= 1; i--) {
        snake[i].x = snake[i - 1].x;
        snake[i].y = snake[i - 1].y;
        ctx.fillStyle = "green";
        ctx.fillRect(snake[i].x, snake[i].y, blockSize, blockSize);
        if (x == snake[i].x && y == snake[i].y) {
            while (snakeLenght > 1) {
                snake.pop();
                snakeLenght--;
            }
        }
    }
    snake[0].x = x;
    snake[0].y = y;

    ctx.fillStyle = "red";
    ctx.fillRect(foodX, foodY, blockSize, blockSize);
}

function spawnFood() {
    foodX = Math.floor(Math.random() * 25) * blockSize;
    foodY = Math.floor(Math.random() * 25) * blockSize;
}

function pauseGame() {
    clearInterval(currentIntervalId);
}

function startGame() {
    currentIntervalId = setInterval(update, 1000 / 15);
}


function stopGame() {
    resetGame();
}

function resetGame() {
    pauseGame();
    x = 0;
    y = 0;

    moveX = 1;
    moveY = 0;

    blockSize = 20;

    foodX = 0;
    foodY = 0;

    snake = [];
    snake.push(new Coord(10 * blockSize, 10 * blockSize));
    snakeLenght = 1;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, c.width, c.height);
}