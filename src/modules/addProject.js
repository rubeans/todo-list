const projectNameInput = document.querySelector('.project-name-input')
const addProjectBtn = document.querySelector('.add-project-btn')
const bottomMenuContent = document.querySelector('.bottom-menu-content')
const allProjectsTxt = document.querySelector('.projects-created-txt')
let getInputValue

function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
}

const addProject = (() => {
    addProjectBtn.addEventListener('click', () => {
        // Não adicionar se o input tiver vazio
        if (!projectNameInput.value || projectNameInput.value === ' ') {
            alert('Não é póssivel adicionar um projeto sem um nome.')
            return
            // Adicionar se não tiver
        } else {
            bottomMenuContent.insertAdjacentHTML('beforeend',
                `<div class="project">
                    <button class="project-btn">${capitalize(projectNameInput.value)}</button>
                    <i class="fa-solid fa-delete-left" onclick="return this.parentNode.remove();"></i>
                </div>`
            )
            getInputValue = `${capitalize(projectNameInput.value)}`
            allProjectsTxt.hidden = false
            projectNameInput.value = ''
            projectNameInput.type = 'reset'
            projectNameInput.type = 'text'
        }
    })
})()

export { addProject, getInputValue }