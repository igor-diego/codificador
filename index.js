var passo = document.querySelector('#passo-cifra')
var escolher = document.querySelector('#escolher')
var codifica = document.querySelector('#cod')
var decodificaRadio = document.querySelector('#decodifica')
var btn = document.querySelector('#btn')
var codificaRadio = document.querySelector('#codifica')
var entrada = document.querySelector('#entrada')
  var resultado = document.querySelector('#saida')
var div1 = document.querySelector('#cod')


escolher.addEventListener('change', function() {
  if(escolher.value == 'cifra') {
    passo.style.display = 'flex'
  }else {
    passo.style.display = 'none'
  }
})


// base64

decodificaRadio.addEventListener('change', function() {
  if(codifica.value == 'codifica') {
    btn.innerHTML = 'codificar'
  }else btn.innerHTML = 'decodificar'
})

codifica.addEventListener('change',function() {
  if(decodificaRadio.value == 'decodifica') {
    btn.innerHTML = 'decodificar'
  }else{
    btn.innerHTML = 'codificar'
  }
} )


btn.addEventListener('click', function(e) {
  e.preventDefault()
  if(escolher.value == 'base' && codificaRadio.checked) {

  var retorno = ''
  retorno = entrada.value

  retorno = btoa(entrada.value)
  resultado.innerHTML = retorno
  }
})


btn.addEventListener('click', function(e) {
  if(escolher.value == 'base' && decodificaRadio.checked) {
    retorno = entrada.value

  retorno = atob(entrada.value)
  resultado.innerHTML = retorno

  }
})


// CIFRA DE CESAR

function codificaCifraDeCesar() {

}



function decodificaCifraDeCesar() {

}