// Funciones

// Menu principal
function getInput(){
    const input = parseInt(window.prompt (`
    -- TODO List Menu --
    1. Mostrar lista de tareas
    2. Añadir tarea nueva
    3. Marcar tarea como terminada
    4. Eliminar tarea
    5. Salir

    Selecciona el número de la acción que deseas realizar:`));
    while (/[0-5]/.test(input) === false){
        alert('Opción no existe, prueba otra vez.')
        return getInput();
    }
    return input;

}

// Opciones
function getList(){
    let listToStr = [];
    if (taskList.length < 1){
        return alert('Empty List');
    }
    for (let i = 0; i < taskList.length ; i++ ){
        listToStr.push(`${i}. ${taskList[i].name} - ${taskList[i].status}`);
    }
    return alert(listToStr.join('\n'));
}

function addTask(){
    getList();
    let task = {};
    task.name = window.prompt('Introduce el nombre de la tarea:');
    task.status = 'Not done';
    taskList.push(task);
    getList();
}

function getTaskPos(){
    getList();
    const taskPos = parseInt(window.prompt('Introduce el número de la tarea:'));
    while (taskPos >= taskList.length){
        alert('Opción no existe, prueba otra vez.')
        return getTaskPos();
    }
    return taskPos;
}

function doneTask(){
    const taskPos = getTaskPos();
    taskList[taskPos].status = 'Done';
    getList();
}

function deleteTask(){
    const taskPos = getTaskPos();
    taskList.splice(taskPos,1);
    getList();
}

// Para ejecutar programa
function runProgram(){
    let input = getInput();

    while (input > 0 && input <= 5){
        switch(input){
            case 1:
                getList();
                break;
            case 2:
                addTask();
                break;
            case 3:
                doneTask();
                break;
            case 4:
                deleteTask();
                break;
            case 5:
                alert('Gracias por utilizar la aplicación');
                break;
            default:
            getInput();
            }
        if (input === 5){
            break;
        }
        input = getInput();
    }
}

// Ejecutar programa
let taskList = [];
runProgram();
