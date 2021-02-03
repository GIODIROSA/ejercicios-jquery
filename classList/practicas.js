const boldButton = document.getElementById("boldButton");
const removeButton = document.getElementById("removeBoldbutton");
const text = document.getElementById("text");

boldButton.addEventListener("click", function () {
  text.classList.add("bold");
});

removeButton.addEventListener("click", function () {
  text.classList.remove("bold");
});

const hybrid = document.getElementById("hybrid");
const ghibliS = document.getElementById("ghibliS");
const trofeo = document.getElementById("trofeo");
const agregarAuto = document.getElementById("agregarAuto");

hybrid.addEventListener("click", function () {
  agregarAuto.classList.add("ghibli");
  agregarAuto.classList.remove("trofeo");
  agregarAuto.classList.remove("hybrid");

});

ghibliS.addEventListener("click", function () {
  agregarAuto.classList.add("hybrid");
  agregarAuto.classList.remove("ghibli");
  agregarAuto.classList.remove("trofeo");

});

trofeo.addEventListener("click", function () {
  agregarAuto.classList.add("trofeo");
});
