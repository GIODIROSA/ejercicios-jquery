// alert("hola a todos");

let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");
let btn5 = document.getElementById("5");

btn2.addEventListener("click", accionar);
btn3.addEventListener("click", loquesea);
btn4.addEventListener("click", wololo);
btn5.addEventListener("click", cinco);

function accionar() {
  if (btn2.id == 2) {
    alert(btn2.id);
  } else if (btn3.id == 3) {
    alert(btn3.id);
  } else {
    alert("estas mal");
  }
}

function loquesea() {
  alert(btn3.id);
}

function wololo() {
  alert(btn4.id);
}

function cinco() {
  alert(btn5.id);
}

// let btn_excelente = document.getElementById("mi-boton");
// let btn_muybueno = document.getElementById("mi-boton1");
// let btn_bueno = document.getElementById("mi-boton2");
// let btn_mala = document.getElementById("mi-boton3");

// btn_excelente.addEventListener("click", btnLike);
// btn_muybueno.addEventListener("click", btnLike);
// btn_bueno.addEventListener("click", btnLike);

// function btnLike() {
//   let seleccion= document.getElementsByClassName("estrella");

//   let excelente = document.getElementById("mi-boton");
//   let muyBueno = document.getElementById("mi-boton1");
//   let bueno = document.getElementById("mi-boton2");
//   let mala = document.getElementById("mi-boton3");

//   alert(excelente)
//   alert(btn_excelente)
//   alert(muyBueno)
//   alert(btn_muybueno)
//   if (excelente == btn_excelente) {
//     document.getElementById("mi-boton").style.color = "yellow";
//     alert("caigo en true");
//     document.getElementById("mi-boton1").style.color= "red";
//   } else if (muyBueno == btn_muybueno) {
//     document.getElementById("mi-boton1").style.color = "yellow";
//     document.getElementById("mi-boton1").style.color = "green";
//     alert("pasa algo");

//   } else if (bueno == btn_bueno ){
//     document.getElementById("mi-boton2").style.color = "yellow";

//   } else {
//     alert("no funciono");
//   }
// }

// function verSeleccion() {

//     var modelo = document.getElementById('modelo');

//     var color = document.getElementById('color');

//     var enviar = document.getElementById('enviar');

//     var seleccionado = document.getElementById("selector").value;

//     if (seleccionado == 'modelo') {

//         modelo.style.display = 'block';

//         color.style.display = 'none';

//         enviar.style.display = 'block';

//     } else if (seleccionado == 'color') {

//         modelo.style.display = 'none';

//         color.style.display = 'block';

//         enviar.style.display = 'block';

//     } else {

//         modelo.style.display = 'none';

//         color.style.display = 'none';

//         enviar.style.display = 'none';

//     }

// }

// console.log(papo.id);
//   alert(papo.id);
//   document.getElementById("2").style.color = "yellow";
//   document.getElementById("3").style.color = "green";
//   document.getElementById("4").style.color = "red";
//   document.getElementById("5").style.color = "red";

// document.getElementById("3").style.color = "yellow";
// document.getElementById("2").style.color = "red";
// document.getElementById("4").style.color = "red";

// console.log(excelente.id);
//   alert(papo.id);

//   if (muyBueno.id == 3) {
//     alert(muyBueno.id);
//   } else if (excelente.id == 2) {
//     alert(excelente.id);
//   } else {
//     alert("estas cayendo en el else");
//   }
