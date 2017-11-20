// el evento va a cargar cuando el objeto haya cargado
window.onload = function() {
//Creando variables
  var boton = document.getElementById('button');
  var texArea = document.getElementById('area');
  var visualizando = document.getElementById('visualizando');

//utilizando el evento input para habilitar y desahabilitar el boton
  texArea.addEventListener('input', agregando);
  function agregando() {
    if (texArea.value.length == '') {
      boton.setAttribute('disabled', 'disabled');      
    } else {
      boton.removeAttribute('disabled');
      boton.style.background = 'green';
    }
  }
//utilizando el evento click para pasar al contenedor creando a la vez un div 
  boton.addEventListener('click', pasar);
  function pasar() {
    var hours = texArea.value + '<br>' + ' publicado a las ' + moment().format('lll');
    var creandodiv = document.createElement("div");
    creandodiv.innerHTML = hours;
    visualizando.appendChild(creandodiv).classList.add("color");
    texArea.value = '';
    boton.setAttribute('disabled', 'disabled');
  }
//utilizando el evento keydown para realizar el contador de manera descendiente
  texArea.addEventListener('keydown', contadorl);
  function contadorl() {
    var limite = document.getElementById('contador');
    var conta = 140;
    var valor = texArea.value.length;
    var disminuir = (conta - valor);

    if (disminuir) {
      limite.innerHTML = disminuir;
    } else {
      limite.innerHTML = disminuir;
    }

//validando el contador
    if (disminuir < 20 && disminuir > 10) {
      limite.classList.add('colorrosado');
      limite.classList.remove('coloramarillo');
      limite.classList.remove('colorverde');
    } else if (disminuir <= 10 && disminuir > 0) {
      limite.classList.remove('colorrosado');
      limite.classList.add('coloramarillo');
      limite.classList.remove('colorverde');
    } else if (disminuir < 0) {
      boton.style.background = 'red';
      boton.setAttribute('disabled', 'disabled');
      limite.classList.add('colorverde');
      limite.classList.remove('coloramarillo');
    } else {
      limite.classList.add('colorblack');
      limite.classList.remove('coloramarillo');
      limite.classList.remove('colorrosado');
      limite.classList.remove('colorverde');
    };
  }
//agrandando el texarea con el /n
  texArea.addEventListener('input', scroll);
  function scroll(event) {
    texArea.style.height = 'inherit';
    texArea.style.height = texArea.scrollHeight + 'px';
    texArea.style.overflow = 'hidden';
  }
};
