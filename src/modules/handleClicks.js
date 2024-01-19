const heading = document.querySelector('.main-heading')
const openModalBtn = document.querySelector('.open-modal')

// Pegar os clicks nos botões do projeto
const projectBtn = (() => {
    document.body.addEventListener('click', (e) => {
        const btns = e.target.closest('.project-btn')
        if (btns) {
            heading.textContent = btns.textContent
            openModalBtn.style.display = 'flex'
        }
    })
})()

// Pegar os clicks nos botões do menu
const menuBtn = (() => {
    document.body.addEventListener('click', (e) => {
        const btns = e.target.closest('.menu-btn')
        if (btns) {
            heading.textContent = btns.textContent
            openModalBtn.style.display = 'none'
        }
    })
})()

export { projectBtn, menuBtn }