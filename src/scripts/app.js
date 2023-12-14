// Import files
import style from '../../public/css/style.css'
import Todo from '../scripts/components/todo.js'

// Declare variables
const header = document.querySelector('.header')
const sidebar = document.querySelector('.sidebar')
const main = document.querySelector('.main')
const toggleSidebar = document.querySelector('.toggle-sidebar')

// Toggle Sidebar Menu
toggleSidebar.addEventListener('click', () => {
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block'
        main.style.width = 'inherit'
    } else {
        sidebar.style.display = 'none'
        main.style.width = "100vw"
    }
})