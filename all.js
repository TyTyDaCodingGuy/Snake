/* console.log('I like PIZZA');
console.log('Its really good!');

//This is a comment

//NEW SECTION STUFF

let firstName = "Tyler"; //strings
let age = 21; //numbers
let student = true; //booleans

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + "years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;
*/

//NEW SECTION VAR MATH

/*

let students = 20;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
let exteraStudents = students % 3;

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;

console.log(students);

*/

//NEW SECTION USER INPUT

/*

let username = window.prompt("Please enter your username");

console.log(username);\


let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username)
    document.getElementById("myLabel").innerHTML = username
};

*/

//NEW SECTION MATH

/*
let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;

//x = Math.round(x); RND
//x = Math.floor(x); RND DOWN
//x = Math.ceil(x); RND UP
//x = Math.pow(x, 2); EXPONENT
//x = Math.sqrt(x); SQUAREROOT
//x = Math.abs(x); ABSOLUTE VALUE
//maximum = Math.max(x, y, z); GIVES LARGEST NUMBER
//minimum = Math.min(x, y, z); GIVES SMALLEST NUMBER
//x = Math.PI; PI

console.log(x);

*/

//NEW SECTION POTHAG THRM

/*

let a;
let b;
let c;

a = window.prompt("Enter side A");

a = Number(a);

b = window.prompt("Enter side B");

b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log(a);
console.log(b);
console.log(c);

*/

/*

document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aTextBox").value;
    b = document.getElementById("bTextBox").value;
    a = Number(a);
    b = Number(b);
    console.log(a, b);
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("cLabelAns").innerHTML = c
    console.log(c)
};

*/

//NEW SECTION RNG

/*

let d = 6;

document.getElementById("6").onclick = function(){
    let d = 6;
}

document.getElementById("7").onclick = function(){
    let d = 7;
}

document.getElementById("8").onclick = function(){
    let d = 8;
}

document.getElementById("9").onclick = function(){
    let d = 9;
}

document.getElementById("10").onclick = function(){
    let d = 10;
}

document.getElementById("11").onclick = function(){
    let d = 11;
}

document.getElementById("12").onclick = function(){
    let d = 12;
}

document.getElementById("13").onclick = function(){
    let d = 13;
}

document.getElementById("14").onclick = function(){
    let d = 14;
}

document.getElementById("15").onclick = function(){
    let d = 15;
}

document.getElementById("16").onclick = function(){
    let d = 16;
}

document.getElementById("17").onclick = function(){
    let d = 17;
}

document.getElementById("18").onclick = function(){
    let d = 18;
}

document.getElementById("19").onclick = function(){
    let d = 19;
}

document.getElementById("20").onclick = function(){
    let d = 20;
}

document.getElementById("21").onclick = function(){
    let d = 21;
}

document.getElementById("22").onclick = function(){
    let d = 22;
}

document.getElementById("23").onclick = function(){
    let d = 23;
}

document.getElementById("24").onclick = function(){
    let d = 24;
}

document.getElementById("25").onclick = function(){
    let d = 25;
}

document.getElementById("rng").onclick = function(){
    let d = Math.floor(Math.random() * d) + 1;
    document.getElementById("rn").innerHTML = d;
    console.log(d);
}

*/

//NEW SECTION USEFUL STRING STUFF

/*

let userName = "   Tyler Sullivan   ";
let phoneNumber = "123-456-7890";

console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.indexOf(S));
console.log(userName.lastIndexOf(S));
console.log(userName);
userName = userName.trim();
userName = userName.toUpperCase;
userName = userName.toLowerCase;
phoneNumber = phoneNumber.replaceAll("-", "/");

*/

//NEW SECTION STRING EXTRACTION

/*

let fullName = "Tyler Sullivan";
let firstName;
let lastName;

firstName = fullName.slice(0, fullName.indexOf(" "))
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);

*/

//NEW SECTION METHOD CHAINING

/*

let name = "tyler";
let letter = name.charAt(0).toUpperCase();

name = letter + name.slice(1);

console.log(name);

*/

//NEW SECTION IF STATEMENTS

/*

let age = 21;

if(age >= 18){
    console.log("You are an adult!");
}
else{
    console.log("You are a child!");
};

*/

//NEW SECTION SNAKE

/*

    const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "black";
const snakeColor = "lightgreen";
const snakeBorder = "green";
const foodColor = "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let move = false;
let snake = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();



function gameStart(){
    running = true;
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
};
function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            move = false;
            nextTick();
        }, 75)}
        else{
            displayGameOver();
        }
};
function clearBoard(){
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
};
function createFood(){
    function randomFood(min, max){
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNum;
    };
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gameWidth - unitSize);
    console.log(foodX);
};
function drawFood(){
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
};
function moveSnake(){
    const head = {x: snake[0].x + xVelocity,
                  y: snake[0].y + yVelocity};

                  snake.unshift(head);

                  if(snake[0].x == foodX && snake[0].y == foodY){
                    score+=1;
                    scoreText.textContent = score;
                    createFood();
                  }
                  else{
                    snake.pop();
                  };
};
function drawSnake(){
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    })
};
function changeDirection(event){
    const keyPressed = event.keyCode;
    console.log(keyPressed);
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    const goingLeft = (xVelocity == -unitSize);
    const goingUp = (yVelocity == -unitSize);
    const goingRight = (xVelocity == unitSize);
    const goingDown = (yVelocity == unitSize);

    switch(true){
        case(keyPressed == LEFT && !goingRight && !move == true):
        xVelocity = -unitSize;
        yVelocity = 0;
        move = true;
        break;
        case(keyPressed == UP && !goingDown && !move == true):
        yVelocity = -unitSize;
        xVelocity = 0;
        move = true;
        break;
        case(keyPressed == RIGHT && !goingLeft && !move == true):
        xVelocity = unitSize;
        yVelocity = 0;
        move = true;
        break;
        case(keyPressed == DOWN && !goingUp && !move == true):
        yVelocity = unitSize;
        xVelocity = 0;
        move = true;
        break;
};
};
function checkGameOver(){
    switch(true){
        case (snake[0].x < 0):
            running = false;
            break;
        case (snake[0].x >= gameWidth):
                running = false;
                break;
        case (snake[0].y < 0):
            running = false;
            break;
        case (snake[0].y >= gameHeight):
            running = false;
            break;
    }

    for(let i = 1; i < snake.length; i+=1){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            running = false;
        }
    }
};
function displayGameOver(){
    ctx.font = "50px MV Boli";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2);
    running = false;
};
function resetGame(){
    score = 0;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [
        {x:unitSize * 4, y:0},
        {x:unitSize * 3, y:0},
        {x:unitSize * 2, y:0},
        {x:unitSize, y:0},
        {x:0, y:0}
    ];
    gameStart();
};

*/

//NEW SECTION 