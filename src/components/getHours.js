const span = document.querySelector('.hour-span')
const h = new Date()
let hour = h.getHours()

const getH = (() => {
    if (hour >= 0 && hour < 12) {
        span.textContent = 'Bom dia'
    } else if (hour >= 12 && hour <= 18) {
        span.textContent = 'Boa tarde'
    } else {
        span.textContent = 'Boa noite'
    }
})()