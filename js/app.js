//El evento va cargar cuando el obejeto haya cargado
window.onload = function() {
  //obteniendo el input con el id
 var one = document.getElementById('button'),
 //Agregamos el evento click al input y la funcion a realizarce
 two = one.addEventListener('click',visualizing);
}
//Creando la funcion que se dara al realizar el evento
 function  visualizing(event) {
//obteniendo el div donde se vizualizara el twitter con una clase
  var container = document.querySelector('.visualizando');
//obteniendo el valor de la etiqueta texarea con un id
  var content = document.formulario.area.value;
//al div donde se visualizara le agregaremos el contenido que obtutivimos del textarea
    container.innerHTML = content
//validando que no ingrese vacio, ni espacios en blanco
  if (content == 0) {
      document.getElementById('button').disabled = true;
      alert('Ingrese un texto porfavor')
    }
    else {
    document.getElementById('button').disable = true;
    }
  }

// object.addEventListener("load", myScript);
  var tweet = document.formulario.area;
  tweet.addEventListener("keydown",function(){
  document.getElementById("contador").innerHTML = tweet.value.length;
     var limite = 140;
      var colorazul = 120;
      var coloramarillo = 130;
      var newtweet = tweet.value.length
      var azulNegro = document.getElementById('contador')
      var boton = document.getElementById('button')
      if (newtweet > limite) {
        azulNegro.style.background = 'green';
        boton.disabled = true;
      }
      else if (newtweet > coloramarillo) {
        azulNegro.style.background = 'yellow';
        boton.disabled = true;

      }
      else if (newtweet > colorazul) {
        azulNegro.style.background = 'blue';
        boton.disabled = false;
      }
     else {
       azulNegro.style.background = 'orange';
   }

 });
