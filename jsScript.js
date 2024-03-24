let body= document.querySelector("#body");
let hit= document.querySelector("#hit");
let timer= document.querySelector("#timer");
let score = document.querySelector("#score");
let time =60;
let totalScore=0;

function setRandomCircleValues(){
    let addCircle="";
    for(let i=0;i<125;i++){
        let random = Math.floor(Math.random()*10);
        addCircle += `<div class="circle">${random}</div>`
    }
    body.innerHTML = addCircle;
}
setRandomCircleValues();

function setHit() {
    let random = Math.floor(Math.random()*10);
    hit.textContent = random;
}
setHit()

function reduceTimer(){

   let setIntervalTimer = setInterval(()=>{
        if(time>0){
            time--;
            timer.textContent = time;
        }else{
            clearInterval(setIntervalTimer);
            body.innerHTML = `<h1 style="margin: 200px">Game Finished<br>Your Score is ${totalScore}</h1>`
        }
    },1000)
}
reduceTimer();


function updateScore(){
    body.addEventListener("click",(e)=>{
        console.log((Number)(e.target.textContent));
        if((Number)(hit.textContent) === (Number)(e.target.textContent)){
            totalScore += 10;
            score.textContent = totalScore;
            setHit();
            setRandomCircleValues();
        }

    })
}
updateScore();

