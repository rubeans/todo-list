const projectNameInput = document.querySelector('.project-name-input')
const addProjectBtn = document.querySelector('.add-project-btn')
const bottomMenuContent = document.querySelector('.bottom-menu-content')

const addProject = (() => {
    addProjectBtn.addEventListener('click', () => {
        if (!projectNameInput.value) {
            alert('Não é póssivel adicionar um projeto sem um nome.')
            return
        } else {
            bottomMenuContent.insertAdjacentHTML('beforeend',
                `<div class="project">
                    <button class="project-name-btn">${projectNameInput.value}</button>
                    <i class="fa-solid fa-delete-left"></i>
                </div>`
            )
            projectNameInput.value = ''
            projectNameInput.type = 'reset'
            projectNameInput.type = 'text'
        }
    })
})()


export default addProject