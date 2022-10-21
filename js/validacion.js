const email = document.getElementById("email").value;
const btnRegistro = documento.getElementById("registro");
let emailExpr = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

btnRegistro.addEventListener("click", ()=>{

    if(emailExpr.test(email)){
        
    }
})



