const emailInput=prompt("inserisci email");
console.log(emailInput);
const emails=["paperino@email.it","topolino@email.it","pippo@email.it","minni@email.it"];
let validation=false;

for(let i=0;i<emails.length;i++){
    if(emails[i]===emailInput){
        validation=true;
    }
}

if(validation){
    console.log("email valida")
}
else{
    console.log("crea un account");
}