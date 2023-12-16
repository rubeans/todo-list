const modal = document.querySelector('#modal')
const openModal = document.querySelector('.open-modal-btn')
const closeModal = document.querySelector('.close-modal-btn')

// Abrir e fechar modal
const modalAction = (()=>{
    openModal.addEventListener('click', () => {
        modal.showModal()
    })
    closeModal.addEventListener('click', () => {
        modal.close()
    })
})()

export default modalAction;