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
  alert(btn2.id);
  document.getElementById("2").style.color = "yellow";
  document.getElementById("3").style.color = "gray";
  document.getElementById("4").style.color = "gray";
  document.getElementById("5").style.color = "gray";
}

function loquesea() {
  alert(btn3.id);
  document.getElementById("2").style.color = "gray";
  document.getElementById("3").style.color = "yellow";
  document.getElementById("4").style.color = "gray";
  document.getElementById("5").style.color = "gray";
}

function wololo() {
  alert(btn4.id);
  document.getElementById("2").style.color = "gray";
  document.getElementById("3").style.color = "gray";
  document.getElementById("4").style.color = "yellow";
  document.getElementById("5").style.color = "gray";
}

function cinco() {
  alert(btn5.id);
  document.getElementById("2").style.color = "gray";
  document.getElementById("3").style.color = "gray";
  document.getElementById("4").style.color = "gray";
  document.getElementById("5").style.color = "yellow";
}
