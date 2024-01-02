const bottomMenu = document.querySelector('.bottom-menu')
const projectName = document.querySelector('.project-name')
const addProjectBtn = document.querySelector('.add-project-btn')
const projectNamesDiv = document.querySelector('.project-names')

const addProject = (() => {
    addProjectBtn.addEventListener('click', () => {
        if (!projectName.value) {
            return
        } else {
            projectNamesDiv.insertAdjacentHTML('beforeend',
                `<button class="menu-btns">${projectName.value}</button>`
            )
        }
    })
})()


export default addProject