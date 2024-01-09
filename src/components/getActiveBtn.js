const main = document.querySelector('.main')
const mainHeading = document.createElement('h1')
main.appendChild(mainHeading)

const getActiveBtn = (() => {
    document.body.addEventListener('click', (e) => {
        const btn = e.target.classList[1] == 'isActive'
        if (btn) {
            mainHeading.textContent = e.target.textContent
        }
    })
})()

export default getActiveBtn