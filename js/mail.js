

const emailEl = document.querySelector("[name='email']");
const btnEl = document.querySelector("#btn-accedi");
const divOutputEl= document.querySelector(".output");

btnEl.addEventListener("click", myFunction);


function myFunction() {
    const emails = ["paperino@email.it", "topolino@email.it", "pippo@email.it", "minni@email.it"];
    let validation = false;
    const emailInput = emailEl.value;


    for (let i = 0; i < emails.length; i++) {
        if (emails[i] === emailInput) {
            validation = true;
        }
    }

    if (validation) {
        console.log("email valida");
        divOutputEl.innerHTML="email valida";
    }
    else {
        console.log("crea un account");
        divOutputEl.innerHTML="email non valida";
    }
}