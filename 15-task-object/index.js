const ToDoList = {
    tasks: [
        {titile: 'Помыть посуду', id: 1, priority: 1}
    ],
    addToDo: function (titile, priority) {
       let id = Math.floor(Math.random() * 100)
       let newArr = this.tasks.push({ titile, id, priority})
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

ToDoList.addToDo('tit', 2)
ToDoList.addToDo('hello', 3)
ToDoList.addToDo('salam', 4)
ToDoList.addToDo('Azamat', 5)

console.log(ToDoList.removeToDo(10))
console.log(ToDoList.tasks)

ToDoList.updateToDo(1, 'World')
console.log(ToDoList.tasks)

ToDoList.sortToDo( 2 )