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
            // console.log(projectCount)

            // Verificar se existe nomes de projetos iguais
            if (checkIfDuplicateExists(projectCount)) {
                alert('Já tem um projeto com esse nome.')
                projectCount.pop()
                projectNameInput.focus()
            }
            // Caso não tenha, o projecto vai ser adicionado
            else {
                projectContainer.insertAdjacentHTML('beforeend', `
                    <button class="project-btn ${projectNameInput.value}">${capitalize(projectNameInput.value)}</button>
                    <i class="fa-solid fa-delete-left"></i>
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
const getProjectClicks = (() => {
    document.body.addEventListener('click', (e) => {
        const projectBtn = e.target.closest('.project-btn')
        const removeProjectBtn = e.target.closest('.fa-delete-left')
        // Mostrar o conteudo na div main
        if (projectBtn) {
            const main = document.querySelector('.main')
            const taskField = document.createElement('div')
            taskField.id = `${projectBtn.classList[1]}`
            taskField.classList.add('task-field')
            taskField.insertAdjacentHTML('beforeend', `
                <button class="open-modal" onclick="document.querySelector('#modal').showModal()"><i class="fa-solid fa-plus"></i>Nova Tarefa</button>
                <dialog id="modal" class="modal">
                <form class="task-form" method="dialog">
                    <button class="close-modal"><i class="fa-solid fa-xmark"></i></button>
                    <div class="separate-items-inside-form">
                    <label for="title">Título<input id="title" class="task-title" type="text" autofocus></label>
                    </div>
                    <div class="separate-items-inside-form">
                    <label for="date">Data de Vencimento: <input class="date-input" id="date" type="date"></label>
                    </div>
                    <div class="separate-items-inside-form">
                    <label for="priorities">Prioridade:
                        <select id="priorities" class="priorities">
                        <option value="Baixa">Baixa</option>
                        <option value="Média">Média</option>
                        <option value="Alta">Alta</option>
                        </select>
                    </label>
                    </div>
                    <button class="add-task-btn">Adicionar</button>
                </form>
                </dialog>
                <div class="tasks-added">
                // TODO
                </div>
            `)
            main.append(taskField)
        }
        // Deletar um projeto
        else if (removeProjectBtn) {
            const projectToBeDeleted = removeProjectBtn.parentNode.id
            const confirmDelete = confirm(`O projeto "${capitalize(projectToBeDeleted)}" será excluido permanentemente.`)
            if (confirmDelete) {
                removeProjectBtn.parentNode.remove();
                projectCount = projectCount.filter(removeProjectBtn => removeProjectBtn !== projectToBeDeleted)
                // console.log('botão deleteado: ' + projectToBeDeleted)
                // console.log(projectCount)
            }
        }
    })
})()

export { addProject, getProjectClicks }