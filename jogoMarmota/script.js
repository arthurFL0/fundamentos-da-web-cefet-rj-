const btn = document.querySelector("button")
const game = document.querySelector(".game");
const score = document.querySelector(".score");
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let scoreNum = 0;
let ultimoBuraco = -1;

const removeMarmota = numBuraco =>{
    const buraco = document.querySelector(`.hole${numBuraco}`)
    buraco.classList.remove("up")
}

const contaClick = ()=>{
    scoreNum += 1;
    score.innerText = `${scoreNum}`;
}



const iniciaJogo = () => {
    
    let numBuraco = ultimoBuraco;

    if(ultimoBuraco != -1){
        while(numBuraco == ultimoBuraco){
             numBuraco =  Math.trunc(Math.random() *6) + 1
        }
    }else{
        numBuraco =  Math.trunc(Math.random() *6) + 1
    }

    
    ultimoBuraco = numBuraco;
    
    const buraco = document.querySelector(`.hole${numBuraco}`);
    buraco.classList.add("up")
    buraco.childNodes[1].classList.remove("clickado")
    const tempoExposto = Math.trunc((Math.random() * 1200)+ 801)

    setTimeout(()=>{
        removeMarmota(numBuraco)
    },tempoExposto)

    
    setTimeout(()=>{
        iniciaJogo()
    },tempoExposto)
}


btn.addEventListener("click", iniciaJogo)

game.addEventListener("click",(event)=>{
    const holeAtual = event.target.parentNode.classList;
    const elemClicado = event.target
    if(elemClicado.classList.contains("mole") && !elemClicado.classList.contains("clickado") ){
        removeMarmota(holeAtual[1][4]);
        contaClick()
        elemClicado.classList.add("clickado")
    }

})

