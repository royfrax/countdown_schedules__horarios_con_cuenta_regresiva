const d = document;
const inicia_turno = Date.now() +28800000;
//const $button = d.getElementById(id);

function countdown(id, limitDate, finalMessage){
  const $countdown = d.getElementById(id),
  countdownDate= new Date(limitDate).getTime();


  let countdownTempo= setInterval(() => {
    let now = new Date().getTime()
    limitTime = countdownDate - now,
    days = Math.floor(limitTime/(1000 * 60 * 60 *24 )),
    hours = limitTime%(1000 * 60 * 60 *24 )/ (1000 * 60 * 60),
    /*minutes,
    seconds,*/

    $countdown.innerHTML ='' ;

 console.log();
  },1000);
  
}

countdown("countdown","Aug 17 2024 05:22:10 GTM-0500","feliz cumple perro");