const loadRecipe = recipeList =>{
    const divResp = document.querySelector("#resultado")
    recipeList.forEach((recipe)=>{
        divResp.innerHTML += `<h1>${recipe.nome}</h1>
                                <p>${recipe.descricao}</p>`
    })
    console.log(recipeList)
}



if(self.fetch){
    //executar algo com fetch API
    const url = 'https://rafaelescalfoni.github.io/desenv_web/receitas.json'

    fetch(url).then(r => r.json()).then(r => loadRecipe(r)).catch((erro)=>{
        console.log(`O ERRO: ${erro} ACONTECEU`)
    });
   
    
} else {
    alert("fudeu em")
}




