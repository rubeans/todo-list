import Todo from "./todo.js"
const taskTitle = document.querySelector('.task-title')
const taskDueDate = document.querySelector('.date-input')
const taskPriority = document.querySelector('.priorities')
const addTaskBtn = document.querySelector('.add-task-btn')
const form = document.querySelector('.task-form')

const todo = new Todo(taskTitle, taskDueDate, taskPriority)

const addTask = (() => {
    addTaskBtn.addEventListener('click', () => {
     if (!todo.title.value.trim().length) {
            alert('Não é póssivel adicionar uma tarefa sem um título.')
            return
        }
        const taskField = document.querySelector('.task-field')
        const tasksAdded = document.createElement('div')
        tasksAdded.classList.add('tasks-added')
        taskField.append(tasksAdded)
        tasksAdded.insertAdjacentHTML('beforeend',
            `<div id="${todo.title.value}" class="task">
                <div class="left-side-task">
                    <input class="task-input" type="checkbox" value="${todo.title.value}">
                    <label>${todo.title.value}</label>
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