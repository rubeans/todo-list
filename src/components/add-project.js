const projectNameInput = document.querySelector('.project-name-input')
const addProjectBtn = document.querySelector('.add-project-btn')
const bottomMenuContent = document.querySelector('.bottom-menu-content')
const allProjectsTxt = document.querySelector('.all-projects-txt')
let projectTitle;

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
                    <button class="project-name-btn isActive">${capitalize(projectNameInput.value)}</button>
                    <i class="fa-solid fa-delete-left" onclick="return this.parentNode.remove();"></i>
                </div>`
            )
            // Pegar o titulo do projeto
            const btns = document.querySelectorAll('.project-name-btn')
            for (let i = 0; i < btns.length; i++) {
                projectTitle = btns[i].textContent
            }
            console.log(projectTitle)
            allProjectsTxt.hidden = false
            projectNameInput.value = ''
            projectNameInput.type = 'reset'
            projectNameInput.type = 'text'
        }
    })
})()

const genaratePage = (() => {

})()


export default addProject