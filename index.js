var cifra = document.querySelector('#codificar')
var escolher = document.querySelector('#escolher')
var div1 = document.querySelector('#coded')
var div2 = document.querySelector('#decod')
var passo = document.querySelector('#passo-cifra')
var botao = document.querySelector('#botao')
var btn = document.createElement('button')
botao.append(btn)

btn.setAttribute("class", "botao-js")


div1.addEventListener('click',function() {
    btn.innerHTML = 'codificar'
})

div2.addEventListener('click',function() {
    btn.innerHTML = 'decodificar'
})

escolher.addEventListener('change', function () {
  if(escolher.value == 'dois') {
      passo.style.display = 'flex'
  }else {
    passo.style.display = 'none'
  }
})