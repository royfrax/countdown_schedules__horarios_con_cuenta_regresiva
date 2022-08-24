const d = document;
//d.addEventListener("DOM",) 
//const $button = d.getElementById(id);

function countdown(id, limitDate, finalMessage){
  const $countdown = d.getElementById(id),
  countdownDate= new Date(limitDate).getTime();


  let countdownTempo= setInterval(() => {
    let now = new Date().getTime()
    limitTime = countdownDate - now,
    days = Math.floor(limitTime/(1000 * 60 * 60 *24 )),
    hours = ("0"+ Math.floor (limitTime%(1000 * 60 * 60 *24 )/ (1000 * 60 * 60))).slice(-2),
    minutes = ("0"+ Math.floor (limitTime%(1000 * 60 * 60) / (1000 * 60 ))).slice(-2),
    seconds = ("0"+ Math.floor ((limitTime%(1000 * 60))/(1000))).slice(-2),

    $countdown.innerHTML = "Quedan "+ (hours)+ " horas "+ (minutes)+" minutos " + (seconds) + " segundos del turno"    ;
    
 console.log(countdownDate);
 if(limitTime < 0){
  clearInterval(countdownTempo);
  $countdown.innerHTML = finalMessage;
 }
  },1000);
  
}
countdown("countdown","Sep 23 , 2022 03:02:10","lo lorge")
