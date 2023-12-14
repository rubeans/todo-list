// Importar arquivos
import style from '../public/css/style.css'
import Todo from './components/todo.js'

// Declarar variáveis
const header = document.querySelector('.header')
const sidebar = document.querySelector('.sidebar')
const main = document.querySelector('.main')
const toggleSidebar = document.querySelector('.toggle-sidebar')

// Alternar em mostrar ou não mostrar o conteúdo do sidebar
toggleSidebar.addEventListener('click', () => {
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'flex'
        main.style.width = 'inherit'
    } else {
        sidebar.style.display = 'none'
        main.style.width = "100vw"
    }
})

// TODO Ao clicar nos botões de adicionar, conseguir adicionar
// TODO Verificar se a logica usada para fazer o app da livraria serve para ca