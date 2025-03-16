let lastId = 1;

const ToDoList = {
    tasks: [
        {titile: 'Помыть посуду', id: 1, priority: 1}
    ],
    addToDo: function (titile, priority) {
       let newArr = this.tasks.push({ titile, id: ++lastId, priority})
        return newArr
    },
    removeToDo: function(deleteId) {
        let newArr = [];
        for(let el of this.tasks) {
            if(deleteId !== el.id) {
                newArr.push(el)
            };
        };
        return this.tasks = newArr;
    },
    updateToDo: function(id = false, itemValue = false) {;
        this.tasks.map(el => {
            if(el.id == id) {
                if(typeof(itemValue) == 'string') {
                    el.titile = itemValue
                } else if(typeof(itemValue) == 'number') {
                    el.priority = itemValue
                }
            }
        })
    },
    sortToDo: function( id, priority ) {
        if(id) {
            this.tasks.sort((a, b) => {
                if(a.id > b.id) {
                    return 1
                }
                if(a.id < b.id) {
                    return -1
                }
            })
        };

        if(priority) {
            this.tasks.sort((a, b) => {
                if(a.priority > b.priority) {
                    return 1
                }
                if(a.priority < b.priority) {
                    return -1
                }
            })
        }
    }
};


ToDoList.addToDo('hello', 4)
ToDoList.addToDo('hi', 2)
ToDoList.addToDo('stop', 5)
ToDoList.addToDo('table', 8)
console.log(ToDoList.tasks)

const newTask = {
    tasks: [{
        id: 1,
        name: 'тест',
        description: 'описание',
        order: 0
    }]
};

let newTaskAddTodo = ToDoList.addToDo.bind(newTask);

console.log(newTaskAddTodo('Новая таска', 56))
console.log(newTask.tasks)