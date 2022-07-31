//criando uma constante do input
const input_element = document.querySelector(".input_texto");

//criando uma constante do botão
const button_element = document.querySelector(".button_criar");

//função que tira espaços
const verifica_input = () => input_element.value.trim().length > 0;

//função para avisar quando tentar criar tarefa sem nada digitado
const add_tarefa = () => {
    const inputIsValid = verifica_input();
    if (!inputIsValid) {
        return input_element.classList.add("campo_vazio");
    }
    input_element.classList.remove("campo_vazio")

    //cria uma div
    const criar_item = document.createElement("div")
        //cria item da div
    criar_item.classList.add("task-item")
        //cria um parágrafo
    const criar_paragrafo = document.createElement("p")

    //cria a tarefa com o valor do input
    criar_paragrafo.innerText = input_element.value;

};

//adiciona uma tarefa
button_element.addEventListener("click", () => add_tarefa());