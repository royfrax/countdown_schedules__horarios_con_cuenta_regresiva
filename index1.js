
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
      

  let countdownTempo= setInterval(() => {   //countdownTempo es para ir actualizando el reloj cada segundo (el valor se obtiene en milisegundos)
    let now = new Date().getTime()
    limitTime =  countdownDate - now  ,
    days =    Math.floor(limitTime/(1000 * 60 * 60 *24 )),
    hours =   ("0"+ Math.floor (limitTime%(1000 * 60 * 60 *24 )/ (1000 * 60 * 60))).slice(-2),
    minutes = ("0"+ Math.floor (limitTime%(1000 * 60 * 60) / (1000 * 60 ))).slice(-2),
    seconds = ("0"+ Math.floor ((limitTime%(1000 * 60))/(1000))).slice(-2),
    

    $countdown.innerHTML  =`${hours} : ${minutes}:${seconds}` ;
    $countdown2.innerHTML =`${hours} : ${minutes}  ${seconds} ` ;
    $countdown3.innerHTML =`${hours} :${minutes}  ${seconds} ` ;
    $countdown4.innerHTML =`${hours} :${minutes} : ${seconds} ` ;
    $countdown5.innerHTML =`${hours} :${minutes} : ${seconds} ` ;
    $countdown6.innerHTML =`${hours} :${minutes} : ${seconds} ` ;
    $countdown7.innerHTML =`${hours} :${minutes} : ${seconds} ` ;
    $countdown8.innerHTML =`${hours} :${minutes} : ${seconds} ` ;
    $countdown9.innerHTML =`${hours} :${minutes} : ${seconds} ` ;
    $countdown10.innerHTML =`${hours} :${minutes} : ${seconds} ` ;
    $countdown11.innerHTML =`${hours} :${minutes} : ${seconds} ` ;
    $countdown12.innerHTML =`${hours} :${minutes} : ${seconds} ` ;
    $countdown13.innerHTML =`${hours} :${minutes} : ${seconds} ` ;
    $countdown14.innerHTML =`${hours} :${minutes} : ${seconds} ` ;
    $countdown15.innerHTML =`${hours} :${minutes} : ${seconds} ` ;
    $countdown16.innerHTML =`${hours} :${minutes} : ${seconds} ` ;
    $countdown17.innerHTML =`${hours} :${minutes} : ${seconds} ` ;
    $countdown18.innerHTML =`${hours} :${minutes} : ${seconds} ` ;
    $countdown19.innerHTML =`${hours} :${minutes} : ${seconds} ` ;
    $countdown20.innerHTML =`${hours} :${minutes} : ${seconds} ` ;
    $countdown21.innerHTML =`${hours} :${minutes} : ${seconds} ` ;
    $countdown22.innerHTML =`${hours} :${minutes} : ${seconds} ` ;
    $countdown23.innerHTML =`${hours} :${minutes} : ${seconds} ` ;
    $countdown24.innerHTML =`${hours} :${minutes} : ${seconds} ` ;
    $countdown25.innerHTML =`${hours} :${minutes} : ${seconds} ` ;

    
 if(limitTime < 1){
  clearInterval(countdownTempo);
  $countdown.innerHTML = finalMessage;
 }
  },1000);
  
}
//agregar horas a la fecha actual
let date = new Date();
function addHours(hours){
 
  var addedHours = new Date().setHours(date.getHours() + hours);
  return addedHours;
}

function fecha_actual() 
{
  let hoy = new Date().toLocaleString();// fecha actual en formato dd/mm/aa/ HH:MM:SS
  const $HOY = d.getElementById("HOY")
  
  let fecha_constante = setInterval(()=> {
    
    function Nombre_Del_Dia_Segun_Fecha(hoy) {
      return ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo',][new Date().getDay()];
    }
       $HOY.innerHTML  = `Día ${Nombre_Del_Dia_Segun_Fecha()}  ${new Date().toLocaleString()}`;
      },1000)
}
fecha_actual("HOY");