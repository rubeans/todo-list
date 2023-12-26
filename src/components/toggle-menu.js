const main = document.querySelector('.main')
const menu = document.querySelector('.menu')
const toggleMenuBtn = document.querySelector('.toggle-menu-btn')
const arrow = document.querySelectorAll('.header-icons')[0]

// Alternar em mostrar ou não mostrar o conteúdo do menu
const toggleMenu = (() => {
    toggleMenuBtn.addEventListener('click', () => {
        if (menu.style.display === 'none') {
            menu.style.display = 'flex'
            arrow.classList.add('fa-arrow-left')
            arrow.classList.remove('fa-bars')
            if (menu.style.width = '20vw') {
                main.style.width = '80vw'
            }
        } else {
            menu.style.display = 'none'
            arrow.classList.remove('fa-arrow-left')
            arrow.classList.add('fa-bars')
            main.style.width = '100vw'
            menu.style.width = 'none'
        }
    })
})()

export default toggleMenu;