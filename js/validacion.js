function valPass(){
  const con1 = document.getElementById("password1").value;
  const con2 = document.getElementById("password2").value;
  if(con1.length >= 6){
    console.log("Correcto")
  } else {
    console.log("Error")
  }
}

document.addEventListener("DOMContentLoaded", ()=>{
      
  
  
  const condiciones = document.getElementById("terminos");
    const span = document.getElementById("span");
    const terminosTexto = document.getElementById("terminosTexto");
    condiciones.addEventListener("click", ()=>{      
      condiciones.checked ? (span.hidden=true, terminosTexto.classList.remove("text-danger")) : (span.hidden=false, terminosTexto.classList.add("text-danger"));
    });
    
    const btnRegistro = document.getElementById("registro");

    btnRegistro.addEventListener("click", ()=>{
        let cartel = document.getElementById("cartel");
        let email = document.getElementById("email").value;
        let emailExpr = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        let pass = document.getElementById("password1").value;
        let pass2 = document.getElementById("password2").value;
        let checkbox = document.getElementById("terminos");        

        //console.log(checkbox.checked);
        if(pass.length >= 6 && emailExpr.test(email) && pass===pass2 && checkbox.checked === true){
            //console.log("CORRECTO")
            let dataSuccess = "";

            dataSuccess += `<div class="alert alert-success" role="alert">
            Registrado con éxito!.
          </div>`;

          cartel.innerHTML=dataSuccess;
    
        }else{
            //console.log("ERROR")
            let dataDanger = "";
            dataDanger += `<div class="alert alert-danger" role="alert">
            Datos incorrectos!.
          </div>`

          cartel.innerHTML = dataDanger;

        }
    })
})





