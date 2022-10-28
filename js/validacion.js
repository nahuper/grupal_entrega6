let pass = document.getElementById("password1").value;
let pass2 = document.getElementById("password2").value;

/* function validarPass(){
  pass != pass2
  ? document.getElementById("confirmarPass").setCustomValidity("Passwords don't Match") 
  : document.getElementById("confirmarPass").setCustomValidity("");
}; */

document.addEventListener("DOMContentLoaded", ()=>{
      
  
  
    const condiciones = document.getElementById("terminos");
    const span = document.getElementById("span");
    const terminosTexto = document.getElementById("terminosTexto");
    const aceptarCond = document.getElementById("aceptoCondiciones");
    condiciones.addEventListener("click", ()=>{      
      condiciones.checked ? (span.hidden=true, condiciones.classList.remove("btn-outline-danger"), condiciones.classList.add("btn-outline-success"), aceptarCond.classList.remove("text-danger"), aceptarCond.classList.add("text-success"), terminosTexto.classList.remove("text-danger")) : (span.hidden=false, aceptarCond.classList.add("text-danger"), terminosTexto.classList.add("text-danger"), aceptarCond.classList.add("text-success"), condiciones.classList.remove("btn-outline-success"), condiciones.classList.add("btn-outline-danger"));
    });
    
    const btnRegistro = document.getElementById("registro");

    btnRegistro.addEventListener("click", (e)=>{
        e.preventDefault();
        let cartel = document.getElementById("cartel");
        let email = document.getElementById("email").value;
        let emailExpr = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        let pass = document.getElementById("password1").value;
        let pass2 = document.getElementById("password2").value;
        let checkbox = document.getElementById("terminos");
        let formCompleto = document.getElementById("formCompleto");       
        
        

        if(pass.length >= 6 && emailExpr.test(email) && pass===pass2 && checkbox.checked === true){
            let dataSuccess = "";

            dataSuccess += `<div class="alert alert-success" role="alert">
            Registrado con éxito!.
          </div>`;

          cartel.innerHTML=dataSuccess;
    
        }else{
            //console.log("ERROR")
            condiciones.classList.add("btn-outline-danger");
            aceptarCond.classList.add("text-danger");
            document.getElementById("span").classList.remove("d-none");
            formCompleto.classList.add("was-validated");
            terminosTexto.classList.add("text-danger");
            let dataDanger = "";
            dataDanger += `<div class="alert alert-danger" role="alert">
            Datos incorrectos!.
          </div>`

          cartel.innerHTML = dataDanger;

        }
    })
})





