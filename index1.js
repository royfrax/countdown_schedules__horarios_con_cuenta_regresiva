
const d = document;

 d.getElementById("countdown2").addEventListener("click", countdown);

function countdown(id,  finalMessage){
  const $countdown = d.getElementById(id)
  const $countdown2 = d.getElementById(id)
  const $countdown3 = d.getElementById(id)
  const $countdown4 = d.getElementById(id)
  const $countdown5 = d.getElementById(id)
  const $countdown6 = d.getElementById(id)
  const $countdown7 = d.getElementById(id)
  const $countdown8 = d.getElementById(id)
  const $countdown9 = d.getElementById(id)
  const $countdown10 = d.getElementById(id)
  const $countdown11 = d.getElementById(id)
  const $countdown12 = d.getElementById(id)
  const $countdown13 = d.getElementById(id)
  const $countdown14 = d.getElementById(id)
  const $countdown15 = d.getElementById(id) 
  const $countdown16 = d.getElementById(id)
  const $countdown17 = d.getElementById(id)
  const $countdown18 = d.getElementById(id)
  const $countdown19 = d.getElementById(id)
  const $countdown20 = d.getElementById(id)
  const $countdown21 = d.getElementById(id)
  const $countdown22 = d.getElementById(id)
  const $countdown23 = d.getElementById(id)
  const $countdown24 = d.getElementById(id) 
  const $countdown25 = d.getElementById(id),
  countdownDate = addHours(8);
      

  let countdownTempo= setInterval(() => {
    let now = new Date().getTime()
    limitTime =  countdownDate - now  ,
    days =    Math.floor(limitTime/(1000 * 60 * 60 *24 )),
    hours =   ("0"+ Math.floor (limitTime%(1000 * 60 * 60 *24 )/ (1000 * 60 * 60))).slice(-2),
    minutes = ("0"+ Math.floor (limitTime%(1000 * 60 * 60) / (1000 * 60 ))).slice(-2),
    seconds = ("0"+ Math.floor ((limitTime%(1000 * 60))/(1000))).slice(-2),
    

    $countdown.innerHTML  =`${hours}:${minutes}:${seconds}` ;
    $countdown2.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown3.innerHTML ="Quedan" + (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown4.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown5.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown6.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown7.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown8.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown9.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown10.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown11.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown12.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown13.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown14.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown15.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown16.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown17.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown18.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown19.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown20.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown21.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown22.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown23.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown24.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;
    $countdown25.innerHTML ="Quedan "+ (hours)+ " horas "+ (minutes)+" minutos y " + (seconds) + " segundos del turno" ;

    
 if(limitTime < 1){
  clearInterval(countdownTempo);
  $countdown.innerHTML = finalMessage;
 }
  },1000);
  
}

let date = new Date();
function addHours(hours){
  //agregar horas a la fecha actual
  var addedHours = new Date().setHours(date.getHours() + hours);
  return addedHours;
}

function fecha_actual(id) 
{
  let hoy = new Date().toLocaleString();// fecha actual en formato dd/mm/aa/ HH:MM:SS
  const $HOY = d.getElementById("HOY")
  
  let fecha_constante = setInterval(()=> {
    
    const nombreDelDiaSegunFecha = now => [
      'domingo',
      'lunes',
      'martes',
      'mi??rcoles',
      'jueves',
      'viernes',
      's??bado',
      'domingo',
    ][new Date().getDay()];
    $HOY.innerHTML  = nombreDelDiaSegunFecha() + " " + new Date().toLocaleString();
      },1000)
    
}

fecha_actual("HOY");


