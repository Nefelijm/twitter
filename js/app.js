// el evento va a cargar cuando el objeto haya cargado
window.onload = function() {
  var boton = document.getElementById('button');
  var texArea = document.getElementById('area');
  var visualizando = document.getElementById('visualizando');
  

  texArea.addEventListener('input', agregando);
  function agregando() {
    if (texArea.value === '') {
      boton.setAttribute('disabled', 'disabled');
     
    } else {
      boton.removeAttribute('disabled');
      boton.style.background = 'green'; 
      
                    
    }
  }

  boton.addEventListener('click', pasar); 
  function pasar() {
    var creandodiv = document.createElement("div");
    creandodiv.innerHTML = texArea.value;
    visualizando.appendChild(creandodiv).classList.add("color");  
    texArea.value = '';
    boton.setAttribute('disabled', 'disabled');
        
  }
 
  texArea.addEventListener('keyup', contadorl);
  function contadorl() {
    var limite = document.getElementById('contador');
    var conta = 140;
    var valor = texArea.value.length;
    var disminuir = conta - valor ; 

    if (disminuir) {
      limite.innerHTML = disminuir;           
    } else {
      limite.innerHTML = disminuir;  
    }

    if (disminuir === 0) {
        boton.disabled = true;
        boton.style.background = ('white'); 
        alert('!A LLEGADO AL LIMITE !');          
      } 
    else if (disminuir < 20 && disminuir > 10) {
      limite.classList.add('colorrosado');
      limite.classList.remove('coloramarillo');
      limite.classList.remove('colorverde');
    }
    else if (disminuir <= 10 && disminuir > 0) {
      limite.classList.remove('colorrosado');
      limite.classList.add('coloramarillo');
      limite.classList.remove('colorverde');
     }
    else if (disminuir < 0 ) {
      boton.disabled = true;
      boton.style.background = ('white');
      limite.classList.add('colorverde');
      limite.classList.remove('coloramarillo');
    } 
    else{
      limite.classList.add('colorblack');
      limite.classList.remove('coloramarillo');
      limite.classList.remove('colorrosado');
      limite.classList.remove('colorverde');
    };   
  
  }
};
