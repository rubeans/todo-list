const menu = document.querySelector('.menu')
const toggleMenuBtn = document.querySelector('.toggle-menu-btn')

// Alternar em mostrar ou não mostrar o conteúdo do menu
const toggleMenu = (() => {
    toggleMenuBtn.addEventListener('click', () => {
        if (menu.style.display === 'none') {
            menu.style.display = 'flex'
        } else {
            menu.style.display = 'none'
        }
    })
})()

export default toggleMenu