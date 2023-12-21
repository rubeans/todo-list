const main = document.querySelector('.main')
const menu = document.querySelector('.menu')
const toggleMenuBtn = document.querySelector('.toggle-menu-btn')
const arrow = document.querySelectorAll('.header-icons')[0]

// Alternar em mostrar ou não mostrar o conteúdo do menu
const toggleMenu = (() => {
    toggleMenuBtn.addEventListener('click', () => {
        if (menu.style.display === 'none') {
            menu.style.display = 'flex'
            menu.style.width = '30vw'
            main.style.width = "70vw"
            arrow.classList.add('fa-arrow-left')
            arrow.classList.remove('fa-bars')
        } else {
            menu.style.display = 'none'
            main.style.width = "100vw"
            arrow.classList.remove('fa-arrow-left')
            arrow.classList.add('fa-bars')
        }
    })
})()

export default toggleMenu;