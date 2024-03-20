const list = document.createElement('ul');
let isChanged = false;

function getToDoList() {
    const toDoList = [];
    const items = JSON.parse(window.localStorage.getItem('myTasks'));
    if (items.length === 0) {
        let toDo;
        while (toDo = getTask()) {
            toDoList.push(toDo);
        }
        if (toDoList.length > 0) {
            isChanged = true;
            window.localStorage.setItem('myTasks', JSON.stringify(toDoList));
        }
        return toDoList;
    }
    return items;
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
        isChanged = true;
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
        isChanged = true;
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

function refreshTasks() {
    const allTasks = document.querySelectorAll("li");
    const tasks = [];
    allTasks.forEach(t=> tasks.push(t.textContent.substring(0, t.textContent.length - 1)));
    window.localStorage.setItem('myTasks', JSON.stringify(tasks));
}

function init() {
    createList(getToDoList());
    createAddButton();
    window.onbeforeunload = () => {
        if (isChanged){
            refreshTasks();
        }
    }
}

init();