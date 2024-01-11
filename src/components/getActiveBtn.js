const mainContainer = document.querySelector('.main')
const mainHeading = document.querySelector('.main-heading')

const getActiveBtn = (() => {
    document.body.addEventListener('click', (e) => {
        const btns = e.target.closest('.btns')
        if (btns) {
            btns.style.backgroundColor = '#161A30'
            btns.style.color = '#F0ECE5'
            mainHeading.textContent = e.target.textContent
            mainContainer.insertAdjacentHTML('beforeend', `
            <div class='main-top'>
                <input class="new-task" type="text" placeholder="Nova Tarefa" autocomplete="off" maxlength="40">
            </div>
            `)
        }
    })
})()

export default getActiveBtn