// alert("hola a todos");

let btn = document.getElementById("1");

btn.addEventListener("click", accionar);

function accionar() {
  let loquesea = document.getElementById("1");

  console.log(loquesea.name);
  alert(loquesea.name);


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
