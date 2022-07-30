//função para criar tarefa
function add() {
    //verfica se tem tarefa digitada
    if (task.value.length == 0) {
        task.classList.add('sem_texto');
        return;
    } else {
        task.classList.remove('sem_texto');
    }
    task.classList.remove('sem_texto');



}