// Variaveis globais
const projectNameInput = document.querySelector('.project-name-input')
const addProjectBtn = document.querySelector('.add-project-btn')
const bottomProjectContent = document.querySelector('.bottom-project-content')

// Arrays
let newAddedProject = []
let storedProjects = []

function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
}

function checkIfDuplicateExists(arr) {
    return new Set(arr).size !== arr.length
}

// Adicionar novo projeto
const addProject = (() => {
    // Adicionar os projetos quando clicar no botão "+"
    addProjectBtn.addEventListener('click', () => {
        // Não adicionar se o input tiver vazio
        if (!projectNameInput.value.trim().length) {
            alert('Não é póssivel adicionar um projeto sem um nome.')
        }
        // Adicionar se não tiver
        else {
            // Guardue os items adicionados
            const new_data = projectNameInput.value
            if (localStorage.getItem('projeto') === null) {
                localStorage.setItem('projeto', '[]')
            }
            const old_data = JSON.parse(localStorage.getItem('projeto'))
            old_data.push(new_data)
            localStorage.setItem('projeto', JSON.stringify(old_data))
            location.reload()
        }
    })
})()

// Carregar projetos que ja foram adicionados antes
const loadProjects = (() => {
    if (localStorage.getItem('projeto')) {
        storedProjects = JSON.parse(localStorage.getItem('projeto'))
        // Projetos não podem ter o mesmo nome
        if (checkIfDuplicateExists(storedProjects)) {
            alert('Já existe um projeto com esse nome.')
            localStorage.projeto = JSON.stringify(JSON.parse(localStorage.projeto ?? "[]").slice(0, -1))
            location.reload()
        }
        storedProjects.forEach(project => {
            const projectContainer = document.createElement('div')
            projectContainer.classList.add('project')
            projectContainer.id = `${project}`

            // Caso não tenha, o projecto vai ser adicionado
            projectContainer.insertAdjacentHTML('beforeend', `
                        <button class="project-btn">${capitalize(project)}</button>
                        <i class="fa-solid fa-delete-left"></i>
                    `)
            bottomProjectContent.append(projectContainer)
        })
    }
})()

// Pegar os clicks nos botões do projeto
const getProjectClicks = (() => {
    document.body.addEventListener('click', (e) => {
        const projectBtn = e.target.closest('.project-btn')
        const removeProjectBtn = e.target.closest('.fa-delete-left')

        // Mostrar o conteudo na div main
        if (projectBtn) {
            const heading = document.querySelector('.main-heading')
            localStorage.setItem(`${projectBtn.textContent}`, JSON.stringify({
                name: `${projectBtn.textContent}`, content: {
                    taskName: "", dueDate: "", priority: ""
                }
            })) //TODO
            document.querySelector('.open-modal').style.display = 'flex'
            const getProjectData = JSON.parse(localStorage.getItem(`${projectBtn.textContent}`))
            heading.textContent = getProjectData.name
        }

        // Deletar um projeto
        else if (removeProjectBtn) {
            const projectToBeDeleted = removeProjectBtn.parentNode.id
            const confirmDelete = confirm(`O projeto "${capitalize(projectToBeDeleted)}" será excluido permanentemente.`)
            if (confirmDelete) {
                removeProjectBtn.parentNode.remove();
                newAddedProject = newAddedProject.filter(removeProjectBtn => removeProjectBtn !== projectToBeDeleted)
                // console.log('botão deleteado: ' + projectToBeDeleted)
                // console.log(newAddedProject)
            } //TODO
        }
    })
})()