
window.onload = function() {
 var one = document.getElementById('button'),
 two = one.addEventListener('click',visuali);
}

 function  visuali(event) {
  var contenedor = document.querySelector('.visualizando');
  var texto = document.formulario.text.value;
    contenedor.innerHTML = texto
  if (texto == 0) {
  alert("ingresa un texto ");
    }
  }

var accountant = document.formulario.area
    accountant.addEventListener("keydown", function(event) {
      document.getElementById("contadorNumeros").innerHTML = accountant.value.length;
    });
