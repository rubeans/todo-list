const modal = document.querySelector('#modal')
const openModal = document.querySelector('.open-modal')
const closeModal = document.querySelector('.close-modal')

const modalFunctionality = (() => {
    openModal.addEventListener('click', () => {
        modal.showModal()
        document.querySelector('.date-input').type = 'date'
    })

    closeModal.addEventListener('click', () => {
        modal.close()
    })
})()

export default modalFunctionality