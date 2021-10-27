let openModalButtons = document.querySelectorAll('[data-modal-target]');
let closeModalButtons = document.querySelectorAll('[data-close-button]');
let overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
  button.addEventListener('click',function () {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal);
  });
});

overlay.addEventListener('click', function(){
  const modals = document.querySelectorAll('.help.active')
  modals.forEach(modal => {
    closeModal(modal);
  });
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', function() {
    const modal = button.closest('.help');
    closeModal(modal);
  });
});

function openModal(modal) {
  modal.classList.add('active');
  overlay.classList.add('active');
};

function closeModal(modal) {
  modal.classList.remove('active');
  overlay.classList.remove('active');
};

// js to decide who wins 

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

function getComputerChoice() {
  let options = ['rock', 'paper', 'scissors'];
  let randomNum = (Math.floor(Math.random() * 3));
  return options[randomNum];
}


function choice(userChoice) {
  let computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(userChoice);
}

function getUserChoice() {
  rock.addEventListener('click', function() {
    choice('rock');
  })

  paper.addEventListener('click', function() {
    choice('paper');
  })

  scissors.addEventListener('click', function() {
    choice('scissors');
  })
}

getUserChoice();