
const d = document;

 d.getElementById("countdown2").addEventListener("click", countdown);

function countdown(id, limitDate, finalMessage){
  const $countdown = d.getElementById(id)
  const $countdown2 = d.getElementById(id)
  const $countdown3 = d.getElementById(id),
  countdownDate= new Date(limitDate).getTime();
      

  let countdownTempo= setInterval(() => {
    let now = new Date().getTime()
    limitTime = countdownDate - now,
    days = Math.floor(limitTime/(1000 * 60 * 60 *24 )),
    hours = ("0"+ Math.floor (limitTime%(1000 * 60 * 60 *24 )/ (1000 * 60 * 60))).slice(-2),
    minutes = ("0"+ Math.floor (limitTime%(1000 * 60 * 60) / (1000 * 60 ))).slice(-2),
    seconds = ("0"+ Math.floor ((limitTime%(1000 * 60))/(1000))).slice(-2),
    

    //$countdown.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown2.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown3.innerHTML ="Quedan " +(days)+ " días con "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
 //console.log(countdownDate);
 if(limitTime < 0){
  clearInterval(countdownTempo);
  $countdown.innerHTML = finalMessage;
 }
  },1000);
  
}
//countdown("countdown", "Aug 26, 2022 23:02:00", "ahi vas");
//countdown("countdown2", "Aug 25, 2022 23:59:00", "ahi vass");