const bt01 = document.querySelector("#btn01");


const pesquisarTermo = (termo,lista) => {
    for(let i = 0;i<lista.length;i++){
        let termoEncontrado = lista[i].termo;
        if(termoEncontrado == termo){
            return i;
        }
    }
    return -1;
}


const exibeTermos = lista =>{
    const tbody = document.querySelector("#result");
    tbody.innerHTML = ``
    for(let i=0;i<lista.length;i++){
        let objeto = lista[i];
        let termo = objeto.termo;
        let numVezes = objeto.ocorrencia;

        tbody.innerHTML +=  `<tr>
                            <td>${termo}</td>
                            <td>${numVezes}</td>
                            </tr>
                            `
    }
}

/** 
@param texto - String
@return {termo1:ocorrencia1,termo2:ocorrencia2,termo3:ocorrencia3} - Object
**/
const contaPalavras = texto =>{

    let listaDePalavras = texto.toLowerCase().split(" ");
    //REMOVE ESPAÇOS VAZIOS
    listaDePalavras = listaDePalavras.filter((caractere)=>{
        return caractere != "";
    })

    let resultado = [];

    for(let i =0;i<listaDePalavras.length;i++){

        let indice = pesquisarTermo(listaDePalavras[i],resultado);
        if(indice >= 0){
            resultado[indice].ocorrencia++;
        }
        else{

        let objContagem = {};
        objContagem.termo = listaDePalavras[i];
        objContagem.ocorrencia = 1;

        resultado.push(objContagem);

        }

    }

    exibeTermos(resultado);

}

const contaTodasPalavras = texto => {
    
    let listaDePalavras = texto.toLowerCase().split(" ");
    //REMOVE ESPAÇOS VAZIOS
    listaDePalavras = listaDePalavras.filter((caractere)=>{
        return caractere != "";
    })

    document.querySelector("#r-palavras").innerHTML = listaDePalavras.length;
}


const contaLetras = texto => {
       //Bota as letras
       const arrayLetras = texto.toLowerCase().split("");
       //limpa os espaços em branco
       const SemEspaço = arrayLetras.filter((caractere)=>{
           return caractere != " ";
       })

       document.querySelector("#r-letras").innerHTML = SemEspaço.length;
   
}

const contaVogais = texto => {
    texto = texto.toLowerCase();
    let contador = 0;
    let verificadas = [];
    for(let i = 0;i<texto.length;i++){
        let char = texto[i];
        //Verifica também se a própria vogal já não foi pega
        if((char == 'a' || char=='e' || char=='i' || char=='o' || char=='u') && !verificadas.includes(char) ){
            contador++;
            verificadas.push(char);
        }
    }
    document.querySelector("#r-vogais").innerHTML = contador;
}

const achaMaisComum = texto => {
    let letras = [];
    texto = texto.toLowerCase().split("");
    texto = texto.filter((caractere)=>{
        return caractere != " ";
    })

    for(let i =0;i<texto.length;i++){

        let indice = pesquisarTermo(texto[i],letras);
        if(indice >= 0){
            letras[indice].ocorrencia++;
        }
        else{

        let objContagem = {};
        objContagem.termo = texto[i];
        objContagem.ocorrencia = 1;

        letras.push(objContagem);

        }

    }
    let atualMais;
    //Acha dentro do arrays de objetos qual letra tem maior ocorrencia
    letras.forEach((obj,indice)=>{
        if(indice == 0){
            atualMais = obj;
        }

        if( obj.ocorrencia > atualMais.ocorrencia){
                atualMais = obj
            }
        
        
    })
    document.querySelector("#r-comum").innerHTML = atualMais.termo;
}

bt01.addEventListener("click",function(){

    const txt = document.querySelector("#ex-01").value;
    contaPalavras(txt);
    contaLetras(txt);
    contaVogais(txt);
    contaTodasPalavras(txt);
    achaMaisComum(txt);

})

