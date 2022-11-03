const dadoPc=Math.round(Math.random()*5)+1;
const dadoUser=Math.round(Math.random()*5)+1;
console.log("il pc ha fatto:"+dadoPc);
console.log("L'utente ha fatto:"+dadoUser);
if(dadoPc>dadoUser){
    console.log("vince il pc")
}
else if (dadoPc<dadoUser) {
    console.log("vince l'utente");
    
} else {
    console.log("pareggio");
    
}