//criando uma constante do input
const input_element = document.querySelector(".nova_tarefa_input");

//criando uma constante do botão
const add_tarefa_button = document.querySelector(".nova_tarefa_button");

//criando tarefa no tarefa_item_container
const tarefasContainer = document.querySelector(".tarefas_container");


//função que tira espaços e se tem texto digitado
const validacao_input = () => input_element.value.trim().length > 0;

//função para avisar quando tentar criar tarefa sem nada digitado
const tratar_add_tarefa = () => {
    const inputIsValid = validacao_input();
    if (!inputIsValid) {
        return input_element.classList.add("erro");
    }

    //criar div
    const tarefa_item_container = document.createElement("div");
    tarefa_item_container.classList.add("tarefa_item");

    //criar paragrafo
    const tarefa_content = document.createElement("p");
    tarefa_content.innerText = input_element.value;
    tarefa_content.addEventListener("click", () => handleClick(tarefa_content));

    //criar icone para excluir tarefas
    const delete_item = document.createElement("i");
    delete_item.classList.add("far");
    delete_item.classList.add("fa-trash-alt");
    delete_item.addEventListener("click", () => handleDeleteClick(tarefa_item_container, tarefa_content));

    //criando tarefa com icone de excliur
    tarefa_item_container.appendChild(tarefa_content);
    tarefa_item_container.appendChild(delete_item);

    //colocando tarefa dentro do container
    tarefasContainer.appendChild(tarefa_item_container);

    //Limpa input ao adicionar tarefas
    input_element.value = "";

    //chamando função update
    updateLocalStorage();

};

//função marcando como tarefa feita
const handleClick = (tarefa_content) => {
    const tarefas = tarefasContainer.childNodes;
    for (const task of tarefas) {
        if (task.firstChild.isSameNode(tarefa_content)) {
            task.firstChild.classList.toggle("concluido");
        }
    }
}

//função deletar items
const handleDeleteClick = (tarefa_item_container, tarefa_content) => {
    const tarefas = tarefasContainer.childNodes;
    for (const task of tarefas) {
        if (task.firstChild.isSameNode(tarefa_content)) {
            tarefa_item_container.remove();
        }
    }
}


//tirar o vermelho do input caso tenha texto no campo
const handle_input_change = () => {
    const inputIsValid = validacao_input();
    if (inputIsValid) {
        return input_element.classList.remove("erro");
    }
};
add_tarefa_button.addEventListener("click", () => tratar_add_tarefa());
input_element.addEventListener("change", () => handle_input_change());