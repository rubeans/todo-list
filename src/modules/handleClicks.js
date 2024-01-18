import { addProject, getInputValue } from './addProject.js'
const taskField = document.querySelector('.task-field')
const openModalBtn = document.querySelector('.open-modal')


const handleClicks = (() => {
    document.body.addEventListener('click', (e) => {
        const btns = e.target.closest('.project-btn')
        if (btns) {
            console.log(getInputValue)
            openModalBtn.style.display = 'flex'
        }
    })
})()

export default handleClicks