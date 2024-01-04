const isActive = document.querySelectorAll('.isActive')
const main = document.querySelector('.main')
const mainHeading = document.createElement('h1')
main.appendChild(mainHeading)

const getActiveBtn = (() => {
    isActive.forEach((btn) => {
        btn.addEventListener('click', () => {
            mainHeading.textContent = btn.textContent
        })
    })
})()

export default getActiveBtn