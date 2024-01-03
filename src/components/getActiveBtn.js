const btnCount = document.querySelectorAll('.active-btn').length
const main = document.querySelector('.main')
const mainHeading = document.createElement('h1')

const getActiveBtn = (() => {
    for (let i = 0; i < btnCount; i++) {
        const activeBtn = document.querySelectorAll('.active-btn')[i]
        activeBtn.addEventListener('click', () => {
            mainHeading.textContent = activeBtn.textContent
        })
    }
    main.appendChild(mainHeading)
})()

export default getActiveBtn