const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');
const timer = document.getElementById('timer');
const userTime = document.getElementById('time');

let minutes = 0;
let second = 0;
let timerId ;

function userInput (){
  minutes = userTime.value;
  timer.innerHTML = userTime.value + " " + "min";
  userTime.value === "0"
}
start.addEventListener('click', ()=>{

  timerId = setInterval(() => {
    if(second === 0){
      if(minutes !== 0){
        minutes--;
        second = 59;
      }
    }
    else{
      second--;
    }
   timer.textContent = `${minutes}:${second>=10 ? second : `0${second}`}`;
  }, 1000);
  return timerId;
})
pause.addEventListener('click',()=>{
  clearTimeout(timerId);
});
reset.addEventListener('click' , ()=>{
  minutes = 0;
  second = 0;
  timer.innerHTML = `${minutes >=10 ? minutes : `0${minutes}`} :${second>=10 ? second : `0${second}`}`
})
