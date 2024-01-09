const mainHeading = document.querySelector('.main-heading')

const getActiveBtn = (() => {
    document.body.addEventListener('click', (e) => {
        const isActive = e.target.closest('.isActive')
        if (isActive) {
            mainHeading.textContent = e.target.textContent
        }
    })
})()

export default getActiveBtn