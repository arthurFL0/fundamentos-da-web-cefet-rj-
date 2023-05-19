const btnAdd = document.querySelector("#btn-task");

const todoList = document.querySelector("#todoList")

btnAdd.addEventListener('click',function(){
    const tarefa = document.querySelector('#task').value

    const liHTML = document.createElement("li");
    const taskEL = document.createTextNode(tarefa);
    liHTML.appendChild(taskEL);

    const linkHTML = document.createElement("a")
    linkHTML.classList.add("apagar")
    const linkTEXT = document.createTextNode(" Apagar")
    linkHTML.appendChild(linkTEXT)
    linkHTML.href = "#"

    const editarHTML = document.createElement("a")
    editarHTML.appendChild(document.createTextNode(" Editar"));
    editarHTML.href = "#"
    liHTML.appendChild(linkHTML);
    liHTML.appendChild(editarHTML);

    const lista = document.querySelector("#todoList");
    lista.appendChild(liHTML);

})


todoList.addEventListener('click',function(event){
    console.log(event)
    console.log("alou")

    if(event.target.tagName == "A" && event.target.classList.contains("apagar")){
        const linkApagar = event.target;
        const liPai = linkApagar.parentNode;
        liPai.parentNode.removeChild(liPai);
    }else{
        alert("Clickou no editar")
    }


})
