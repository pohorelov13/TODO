const list = document.createElement('ul');

function getToDoList() {
    const toDoList = [];
    let toDo;
    while (toDo = getTask()) {
        toDoList.push(toDo);
    }
    return toDoList;
}

function createList(toDoList) {
    if (Array.isArray(toDoList)) {
        list.id = 'todo-list'
        toDoList.forEach(e => {
            const listElement = document.createElement('li');
            listElement.textContent = e;
            addCloseX(listElement, list);
            list.append(listElement);
        });
        document.body.append(list);
    }
}

function addCloseX(liElement) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    span.onclick = function () {
        this.parentElement.remove();
    }
    liElement.appendChild(span);
}

function getTask() {
    return prompt('ENTER TODO');
}

function addNewTask() {
    const task = getTask();
    if (task !== null) {
        const liElement = document.createElement('li');
        liElement.textContent = task;
        addCloseX(liElement);
        list.append(liElement);
    }
}

function createAddButton() {
    const htmlButtonElement = document.createElement('button');
    htmlButtonElement.textContent = '+';
    htmlButtonElement.className = 'add-button'
    htmlButtonElement.addEventListener('click', () => addNewTask());
    document.body.append(htmlButtonElement);
}

function init() {
    createList(getToDoList());
    createAddButton();
}

init();