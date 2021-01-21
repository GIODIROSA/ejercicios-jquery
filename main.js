// alert("hola estoy funcionando");

$(document).ready(function () {
  $("#codigo").hide(3000).show(1000);

  $("#mi-boton").click(function () {
    $(this).toggleClass("text-secondary text-warning");
  });

  $("#mi-boton1").click(function () {
    $(this).toggleClass("text-secondary text-warning");
  });

  $("#mi-boton2").click(function () {
    $(this).toggleClass("text-secondary text-warning");
  });

  $("#mi-boton3").click(function () {
    $(this).toggleClass("text-secondary text-danger");
  });

  $("#mi-boton9").click(function () {
    $(this).toggleClass("text-secondary text-warning");
  });

  $("#mi-boton12").click(function () {
    $(this).toggleClass("text-secondary text-warning");
  });

  $("#mi-boton13").click(function () {
    $(this).toggleClass("text-secondary text-warning");
  });

  $(".estrella").click(function () {
    $(this).toggleClass("text-secondary text-danger").removeAttr("disabled");
  });

  $("input:radio").on("click", function () {
    $("input[type=submit]").removeAttr("disabled");
  });



 
});
