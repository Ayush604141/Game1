// Iteration 5: Store the player score and display it on the game over screen
const again = document.getElementById("play-again-button")
again.onclick = reload;
document.getElementById("score-board").innerHTML = localStorage.getItem("score");

function reload(){
    window.location.assign("index.html")
}





