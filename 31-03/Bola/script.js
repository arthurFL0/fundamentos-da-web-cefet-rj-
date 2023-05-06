const btn = document.querySelector("#btn");
const img = document.querySelector("#gato");
const txt = document.querySelector("#texto");
const salute = document.querySelector("#salute");
let contador = 10;

btn.addEventListener("click", function (){
    console.log("ei")
    contador = contador - 1;
    console.log(contador/10);
    btn.style.transform = `scale(0.${contador})`;
    btn.style.transition = "transform 0.25s ease";


    if(contador == 0){
        img.style.display = "inline";
        img.style.opacity = 1;
        btn.style.display = "none";
        txt.innerHTML = "Obrigado pelo seu serviço"
        salute.style.display = "inline";
    }

})