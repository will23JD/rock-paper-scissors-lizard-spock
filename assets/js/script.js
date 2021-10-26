let openModalButtons = document.querySelectorAll('[data-modal-target]')
let closeModalButtons = document.querySelectorAll('[data-close-button]')
let overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click',function () {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', function(){
  const modals = document.querySelectorAll('.help.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', function() {
    const modal = button.closest('.help')
    closeModal(modal)
  })
})

function openModal(modal) {
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  modal.classList.remove('active')
  overlay.classList.remove('active')
}