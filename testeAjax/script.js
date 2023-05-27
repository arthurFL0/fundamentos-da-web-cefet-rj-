//CRIAR UM OBJETO XML HTTP REQUEST
const xhttp = new XMLHttpRequest();

//DEFINIR A URL QUE PRETEDENMOS USAR
const url = "https://rafaelescalfoni.github.io/desenv_web/receitas.json"


//QUANDO O OBJETO MUDAR DE ESTADO PARA ESTADO 4 E STATUS HTTP = 200
xhttp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200){
        //PROGRAMAR UMA AÇÃO
        const receitas = JSON.parse(this.responseText)
        criaReceitas(receitas);
    }
}




//ENVIAR ABRIR O OBJETO

xhttp.open("GET",url);

//ENVIAR O OBJETO

xhttp.send()


const criaPreparo = (elementoHTML,listaPreparo) =>{
    const olHTML = document.createElement("ol");

    listaPreparo.forEach((preparo)=>{
        const liHTML = document.createElement("li");
        const liTEXT = document.createTextNode(preparo);
        liHTML.appendChild(liTEXT);
    
        olHTML.appendChild(liHTML);
    })

    elementoHTML.appendChild(olHTML);
}

const criaIngredientes = (elementoHTML,listaIngredientes) =>{
    const ulHTML = document.createElement("ul");

    listaIngredientes.forEach((ingrediente)=>{
        const liHTML = document.createElement("li");
        const liTEXT = document.createTextNode(ingrediente);

        liHTML.appendChild(liTEXT);
    
        ulHTML.appendChild(liHTML);
    })

    elementoHTML.appendChild(ulHTML);

}

const criaPrato = (elementoHTML,prato) =>{
    const divHTML = document.createElement("div");
    const tituloHTML = document.createElement("h1");
    const descricaoHTML = document.createElement("p");
    const fotoHTML = document.createElement("img");

    divHTML.classList.add("prato")

    const tituloTX = document.createTextNode(prato.nome);
    const descricaoTX = document.createTextNode(prato.descricao);

    tituloHTML.appendChild(tituloTX);
    descricaoHTML.appendChild(descricaoTX);
    fotoHTML.src = prato.foto;
    fotoHTML.alt = `Foto do prato ${prato.nome}`;

    divHTML.appendChild(tituloHTML);
    divHTML.appendChild(descricaoHTML);

    criaIngredientes(divHTML,prato.ingredientes)
    criaPreparo(divHTML,prato.preparo)

    divHTML.appendChild(fotoHTML);

    elementoHTML.appendChild(divHTML);
}


const criaReceitas = lista => {
    const cardapioHTML = document.querySelector(".cardapio");
    console.log(lista)
    lista.forEach(function(receita){
        criaPrato(cardapioHTML,receita);
    })
}


