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


// btn.addEventListener('click', function() {
  
//   var result = ''
//   if(escolher.value == 'base' && codificaRadio.checked) {
//     resultado = entrada.value
//     for(var i =0; i < passo.value; i++) {
//       resultado.innerHTML = codificaCifraDeCesar(result);
//     }
//   }
// })

// CIFRA DE CESAR

// function codificaCifraDeCesar() {
//   var texto = entrada.split()
//   var newTexto = ''
// for(var i =0; i < entrada.length; i ++) {
//   var entradaAtual = entrada[i]
// }
// }

// function codificaCifraDeCesar(str) {

//   str = str.toUpperCase().split("")

//   str = str.map(char => {
//       var code = char.charCodeAt(0)

//       if ((code >= 65 && code <= 89))
//           code += 1
//       else if (code >= 90)
//           code = 65

//       return String.fromCharCode(code)
//   })

//   return str.join("")
// }




// function decodificaCifraDeCesar() {

// }