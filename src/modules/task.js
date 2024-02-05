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
        } if (!todo.title.value.trim().length) {
            alert('Não é póssivel adicionar uma tarefa sem um título.')
            return
        }
        tasksAdded.insertAdjacentHTML('beforeend',
            `<div class="task">
                <div class="left-side-task">
                    <input class="input-task" type="checkbox" value="${todo.title.value}">
                    <label >${todo.title.value}</label>
                </div> 
                <div class='right-side-task'>
                    ${todo.dueDate.value}, Prioridade: ${todo.priority.value}
                </div> 
            </div>`
        )
        form.reset()
    })
})()

// Pegar os clicks nos botões do menu
const heading = document.querySelector('.main-heading')
const menuBtn = (() => {
    document.body.addEventListener('click', (e) => {
        const btns = e.target.closest('.menu-btn')
        if (btns) {
            heading.textContent = btns.textContent
        }
    })
})()


export { addTask, menuBtn }