

function credito() {
  let tipoCredito = document.getElementById("tipoCredito").value;
  console.log(tipoCredito);
  if (tipoCredito == "inteligente") {
    document.getElementById("prueba").innerHTML = `
    
    <section id="cuotas_creditoInteligente">
    <div class="cuotas_creditoInteligente">
    <p>
    ${tipoCredito}
    </p>
        <div class="container">
            <h3 class="text-center">
                Cuotas
            </h3>
        </div>
        <section id="cuotas">
            <div class="row">
                <div class="col-12 col-md-6 py-2 px-auto">
                    <div class="form-check">
                        <input class="form-check-input" type="radio"
                            name="flexRadioDefaultContacto" value="Email"
                            id="flexRadioDefault1">
                        <label class="form-check-label" for="flexRadioDefault1">
                            24 cuotas
                        </label>
                    </div>
                </div>
                <div class="col-12 col-md-6 py-2 px-auto">
                    <div class="form-check">
                        <input class="form-check-input" type="radio"
                            name="flexRadioDefaultContacto" value="Teléfono"
                            id="flexRadioDefault2">
                        <label class="form-check-label" for="flexRadioDefault2">
                            36 cuotas
                        </label>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div class="container">
        <div class="col-12">
            <p>
                Tasa Actual: 1.66% ( Monto mayor a 200 UF ) 2.25% <br> ( Tasa menor a 200uf a
                financiar )
            </p>
        </div>
    </div>
</section>
      
    `;
  } else if (tipoCredito == "convencional") {
    document.getElementById("prueba").innerHTML = `


    <section id="cuotas_creditoInteligente">
    <p>${tipoCredito}</p>
                            <div class="cuotas_creditoInteligente">
                                <div class="container">
                                    <h3 class="text-center">
                                        Cuotas
                                    </h3>
                                </div>
                                <section id="cuotas">
                                    <div class="row">
                                        <div class="col-12 col-md-4 py-2 px-auto">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio"
                                                    name="flexRadioDefaultContacto" value="Email"
                                                    id="flexRadioDefault1">
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    24 cuotas
                                                </label>
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-4 py-2 px-auto">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio"
                                                    name="flexRadioDefaultContacto" value="Teléfono"
                                                    id="flexRadioDefault2">
                                                <label class="form-check-label" for="flexRadioDefault2">
                                                    36 cuotas
                                                </label>
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-4 py-2 px-auto">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio"
                                                    name="flexRadioDefaultContacto" value="Teléfono"
                                                    id="flexRadioDefault2">
                                                <label class="form-check-label" for="flexRadioDefault2">
                                                    48 cuotas
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div class="container">
                                <div class="col-12">
                                    <p>
                                        Tasa Actual: 1.66% ( Monto mayor a 200 UF ) 2.25% <br> ( Tasa menor a 200uf a
                                        financiar )
                                    </p>
                                </div>
                            </div>
                        </section>
    `;
  } else {
    alert("todo esta perdido");
  }
}
