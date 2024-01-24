import Todo from "./todo.js"
const taskTitle = document.querySelector('.task-title')
const taskDueDate = document.querySelector('.date-input')
const taskPriority = document.querySelector('.priorities')
const addTaskBtn = document.querySelector('.add-task-btn')
const tasksAdded = document.querySelector('.tasks-added')
const form = document.querySelector('.task-form')

const todo = new Todo(taskTitle, taskDueDate, taskPriority)

const addTask = (() => {
    addTaskBtn.addEventListener('click', () => {
        if (!todo.dueDate.value) {
            todo.dueDate.type = 'text'
            todo.dueDate.value = 'Sem data definida'
        } if (!todo.title.value || todo.title.value === ' ') {
            alert('Não é póssivel adicionar uma tarefa sem um título.')
            return
        }
        tasksAdded.insertAdjacentHTML('beforeend',
            `<div class="task">
                <div class="left-side-task">
                    <input type="checkbox" id="${todo.title.value}" value="${todo.title.value}">
                    <label for="${todo.title.value}">${todo.title.value}</label>
                </div> 
                <div class='right-side-task'>
                    ${todo.dueDate.value}, Prioridade: ${todo.priority.value}
                </div> 
            </div>`
        )
        form.reset()
    })
})()

export default addTask