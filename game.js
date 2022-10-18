// Iteration 2: Generate 2 random number and display it on the screen
var num1 = document.getElementById("number1");
var num2 = document.getElementById("number2");
let rand1 = Math.floor(Math.random()*100 + 1);
let rand2 = Math.floor(Math.random()*100 + 1);
num1.innerHTML = rand1;
num2.innerHTML = rand2;

// Iteration 3: Make the options button functional
const greaterThan = document.getElementById("greater-than")
const LesserThan = document.getElementById("lesser-than")
const equalTo = document.getElementById("equal-to")

greaterThan.onclick = $greaterThan
LesserThan.onclick = $lesserThan
equalTo.onclick = $equalTo
var score = 0

function $greaterThan()
{
    if(rand1 > rand2)
    {
        window.location.reload();
        score++
    }
    else{
    window.location.assign("gameover.html");
    }

}
function $lesserThan()
{
    if(rand1 < rand2)
    {
        window.location.reload();
        score++
    }
    else{
        window.location.assign("gameover.html");
    }

}
function $equalTo(){
    if(rand1 == rand2)
    {
        window.location.reload();
        score++
    }
    else{
        window.location.assign("gameover.html");
    }

}

// Iteration 4: Build a timer for the game
var time = 5
var timer = document.getElementById("timer")
var timerId

function startTimer(){
    time = 5
    timer.innerHTML = time

    timerId = setInterval(() => {
        time--
        if(time==0){
            window.location.assign("gameover.html")
    }
    timer.innerHTML = time
    }, 1000);
    localStorage.setItem("score",score)
}

startTimer();
