import Todo from "./todo.js"
const taskTitle = document.querySelector('.task-title')
const taskDescription = document.querySelector('.task-description')
const taskDueDate = document.querySelector('.date-input')
const taskPriority = document.querySelector('.priorities')
const addTaskBtn = document.querySelector('.add-task-btn')
const tasksAdded = document.querySelector('.tasks-added')
const form = document.querySelector('.task-form')

const todo = new Todo(taskTitle, taskDescription, taskDueDate, taskPriority)

const addTask = (() => {
    addTaskBtn.addEventListener('click', () => {
        tasksAdded.insertAdjacentHTML('beforeend',
            `<div>
                ${todo.title.value}, ${todo.description.value}, ${todo.dueDate.value}, ${todo.priority.value}
            </div>`
        )
        alert('Task Added Successfully')
    })
})()

export default addTask