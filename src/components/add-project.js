const projectNameInput = document.querySelector('.project-name-input')
const addProjectBtn = document.querySelector('.add-project-btn')
const bottomMenuContent = document.querySelector('.bottom-menu-content')
const allProjectsTxt = document.querySelector('.all-projects-txt')

function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
}

const addProject = (() => {
    addProjectBtn.addEventListener('click', () => {
        // do not add if the input is empty
        if (!projectNameInput.value || projectNameInput.value === ' ') {
            alert('Não é póssivel adicionar um projeto sem um nome.')
            return
            // if not empty, add
        } else {
            bottomMenuContent.insertAdjacentHTML('beforeend',
                `<div class="project">
                    <button class="project-name-btn isActive">${capitalize(projectNameInput.value)}</button>
                    <i class="fa-solid fa-delete-left"></i>
                </div>`
            )
            allProjectsTxt.hidden = false
            projectNameInput.value = ''
            projectNameInput.type = 'reset'
            projectNameInput.type = 'text'
        }
    })
})()


export default addProject