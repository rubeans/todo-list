const projectNameInput = document.querySelector('.project-name-input')
const addProjectBtn = document.querySelector('.add-project-btn')
const bottomMenuContent = document.querySelector('.bottom-menu-content')
let projectCount = []

function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
}
function checkIfDuplicateExists(arr) {
    return new Set(arr).size !== arr.length
}

const addProject = (() => {
    addProjectBtn.addEventListener('click', () => {
        // Não adicionar se o input tiver vazio
        if (!projectNameInput.value.trim().length) {
            alert('Não é póssivel adicionar um projeto sem um nome.')
        }
        // Adicionar se não tiver
        else {
            const projectContainer = document.createElement('div')
            projectContainer.classList.add('project')
            projectContainer.id = `${projectNameInput.value}`
            projectCount.push(projectContainer.id)
            console.log(projectCount)
            // Verificar se existe nomes de projetos iguais
            if (checkIfDuplicateExists(projectCount)) {
                alert('Já tem um projeto com esse nome.')
                projectCount.pop()
                projectNameInput.focus()
            }
            // Caso não tenha, o projecto vai ser adicionado
            else {
                projectContainer.insertAdjacentHTML('afterbegin', `
                    <button class="project-btn">${capitalize(projectNameInput.value)}</button>
                    <i class="fa-solid fa-delete-left" onclick="return this.parentNode.remove();"></i>
                `)
                bottomMenuContent.append(projectContainer)
                projectNameInput.value = ''
                projectNameInput.type = 'reset'
                projectNameInput.type = 'text'
            }
        }
    })
})()

// Pegar os clicks nos botões do projeto
const heading = document.querySelector('.main-heading')
const openModalBtn = document.querySelector('.open-modal')
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