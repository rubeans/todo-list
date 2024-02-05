const projectNameInput = document.querySelector('.project-name-input')
const addProjectBtn = document.querySelector('.add-project-btn')
const bottomMenuContent = document.querySelector('.bottom-menu-content')

function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
}

const addProject = (() => {
    addProjectBtn.addEventListener('click', () => {
        // Não adicionar se o input tiver vazio
        if (!projectNameInput.value.trim().length) {
            alert('Não é póssivel adicionar um projeto sem um nome.')
        }
        // Adicionar se não tiver
        else {
            bottomMenuContent.insertAdjacentHTML('beforeend',
                `<div class="project">
                    <button id="${projectNameInput.value}" class="project-btn">${capitalize(projectNameInput.value)}</button>
                    <i class="fa-solid fa-delete-left" onclick="return this.parentNode.remove();"></i>
                </div>`)
        }
        projectNameInput.value = ''
        projectNameInput.type = 'reset'
        projectNameInput.type = 'text'
    })
})()

// Pegar os clicks nos botões do projeto
const heading = document.querySelector('.main-heading')
const openModalBtn = document.querySelector('.open-modal')
const projectName = document.querySelector('#test')
const projectBtn = (() => {
    document.body.addEventListener('click', (e) => {
        const btns = e.target.closest('.project-btn')
        if (btns) {
            heading.textContent = btns.textContent
            openModalBtn.style.display = 'flex'
        }
    })
})()

export { addProject, projectBtn }