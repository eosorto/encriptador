//variables
const area1=document.querySelector('.textArea1')
const area2=document.querySelector('.textArea2')
const picture=document.querySelector('.pic')

//botones
const copiar=document.querySelector('.copiar')
const pegar=document.querySelector('.pegar')
const eliminar=document.querySelector('.eliminar-todo')

const encriptar=document.querySelector('.encriptar')

const desencriptar=document.querySelector('.desencriptar')

encriptar.addEventListener('click',fbiencriptar)
desencriptar.addEventListener('click',fbidesencriptar)
eliminar.addEventListener('click',()=>{
  area1.value=''
  area2.value=''
  area1.focus()
  copiar.disabled=true
  pegar.disabled=true
  eliminar.disabled=true
  desencriptar.disabled=false
  encriptar.disabled=false
 mostrar()


})
copiar.addEventListener('click',copiarText)
pegar.addEventListener('click',pegarText)

area1.focus()
area1.value=''
area2.value=''
copiar.disabled=true
pegar.disabled=true
eliminar.disabled=true
desencriptar.disabled=false



let datosCopiados


function  fbiencriptar(){
  if(area1.value==''){
     alert('ingrese un dato')
  }else{
    mostrar()
    copiar.disabled=false
    encriptar.disabled=true
   
  var frase =area1.value.toLowerCase()


  //i = es para tomar mauscula y minuscula , m=toma en cuenta multiple lineas, g=toma en cuenta toda la linea de la oracion//
  var textoEncriptado=frase.replace(/e/img,"enter")
  var textoEncriptado=textoEncriptado.replace(/i/img,"imes")
  var textoEncriptado=textoEncriptado.replace(/a/img,"ai")
  var textoEncriptado=textoEncriptado.replace(/o/img,"ober")
  var textoEncriptado=textoEncriptado.replace(/u/img,"ufat")
  

  area2.value=textoEncriptado
  pegar.disabled=true
  area1.value=''
  }
  
}
function copiarText(){
    datosCopiados=area2.value
    copiar.disabled=true
    encriptar.disabled=true
    eliminar.disabled=false
    pegar.disabled=false
    area2.value=''
    area1.focus()
    mostrar()

}
function pegarText(){
  area1.value=''
  area2.value=''
  desencriptar.disabled=false

  area1.value= datosCopiados
  area2.value=''
}

function  fbidesencriptar(){
  
  if(area1.value==''){
    alert('ingrese un dato')
 }else{
  mostrar()
   area2.value-''
  var frase =area1.value.toLowerCase()

  var textoEncriptado=frase.replace(/enter/img,"e")
  var textoEncriptado=textoEncriptado.replace(/imes/img,'i')
  var textoEncriptado=textoEncriptado.replace(/ai/img,'a')
  var textoEncriptado=textoEncriptado.replace(/ober/img,"o")
  var textoEncriptado=textoEncriptado.replace(/ufat/img,"u")
  

  area2.value=textoEncriptado
  pegar.disabled=true
  eliminar.disabled=false
    area1.value=''}
}

function mostrar(){
  picture.classList.toggle('ocultar')
  area2.classList.toggle('mostrar')
}



