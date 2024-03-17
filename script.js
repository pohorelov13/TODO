function getToDoList() {
    const toDoList = [];
    let toDo;
    while (toDo = prompt('ENTER TODO')) {
        toDoList.push(toDo);
    }
    return toDoList;
}

function createList(toDoList) {
    if (Array.isArray(toDoList)) {
        const list = document.createElement('ul');
        toDoList.forEach(e => {
            const listElement = document.createElement('li');
            listElement.textContent = e;
            list.append(listElement);
        });
        document.body.append(list);
    }
}

function init() {
    createList(getToDoList());
}

init();