var passo = document.querySelector('#passo')
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


// base64

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


btn.addEventListener('click', function(e) {
e.preventDefault()
if(escolher.value == 'cifra' && codificaRadio.checked) {

  cifraDeCesar()
}
})

btn.addEventListener('click', function() {
  if(escolher.value == 'cifra' && decodificaRadio.checked) {
    decodificaCesar()
  }
})



function cifraDeCesar() {
  var entradatxt = document.querySelector('#entrada').value
  var passo = document.querySelector('#passo').value
  var texto = ""
  // var resultado = document.querySelector('#saida')

  for(var i = 0; i < entradatxt.length; i++) {
    var vPasso = parseInt(passo)
    var numAscii = entradatxt[i].charCodeAt()
    if(numAscii >= 65 && numAscii <= 90) {
      var passoAlterado = numAscii + vPasso
      if(passoAlterado > 90) {
        passoAlterado = passoAlterado - 26
      }
      texto += String.fromCharCode(passoAlterado)
    }else if(numAscii >= 97 && numAscii <= 122) {
      var passoAlterado = numAscii + vPasso
      if(passoAlterado > 122) {
        passoAlterado = passoAlterado - 26
        texto += entrada[i]
      }
      texto += String.fromCharCode(passoAlterado)
    }else{
      texto += entrada[i]
    }
    resultado.value = texto
  }
}


function decodificaCesar() {
  var entradatxt = document.querySelector('#entrada').value
  var passo = document.querySelector('#passo').value
  var texto = ""
  // var resultado = document.querySelector('#saida')
  for(var i = 0; i < entradatxt.length; i++) {
    var vPasso = parseInt(passo)
    var numAscii = entradatxt[i].charCodeAt()
    if(numAscii >= 65 && numAscii <= 90) {
      var passoAlterado = numAscii - vPasso
      if(passoAlterado < 65) {
        passoAlterado = 26 + passoAlterado 
      }
      texto += String.fromCharCode(passoAlterado)
    }else if(numAscii >= 97 && numAscii <= 122) {
      var passoAlterado = numAscii - vPasso
      if(passoAlterado < 97) {
        passoAlterado = 26 + passoAlterado 
        texto += entrada[i]
      }
      texto += String.fromCharCode(passoAlterado)
    }else{
      texto += entrada[i]
    }
    resultado.value = texto
  }
}
