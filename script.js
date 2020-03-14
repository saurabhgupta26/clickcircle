let gameArea = document.querySelector(".gamearea");
let game = document.querySelector(".game");
let start = document.querySelector(".startButton");
let totalScore = document.querySelector(".scored");
let restart1 = document.querySelector(".restartButton");
let counter = 0;
let playArea = {};

start.addEventListener("click", gameStart);
restart1.addEventListener("click", restart);

function restart(e) {
    window.location.reload();   
}

function gameStart(e) {    
   function createCircle() {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.top = Math.round(Math.random()*window.innerHeight) + 'px';
    circle.style.left = Math.round(Math.random()*window.innerWidth) + 'px';
    topMargin();
    leftMargin();
    setTimeout(() => circle.style.display = 'none', 2000);
    circle.style.backgroundColor = "red";
    circle.start = new Date().getTime();
    gameArea.append(circle);
    game.append(gameArea);
    circle.addEventListener('click', function() {
        console.log(e);
        counter = counter + 1;
        totalScore.textContent = `${counter}`;
        circle.style.display = "none";
    } );

   }
    for (let i = 0 ; i<4; i++){
     
        setTimeout(createCircle, i*5000);
    }
}
function topMargin() {
        let maxHeight = gameArea.clientHeight;
        if (maxHeight <= 100){
            maxHeight = maxHeight + 200;
        } else {
            maxHeight = maxHeight - 200;
        }
        return maxHeight;
    }
    
    //Adjust left margin so circle is not on the edge
function leftMargin(){
        let maxWidth = gameArea.clientWidth;
        if (maxWidth <= 100){
            maxWidth = maxWidth + 200;
        } else {
            maxWidth = maxWidth - 200;
        }
        
        return maxWidth;
}
