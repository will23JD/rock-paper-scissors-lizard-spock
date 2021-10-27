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
let lizard = document.getElementById('lizard');
let spock = document.getElementById('spock');
let userScore = document.getElementById('user-score');
let computerScore = document.getElementById('computer-score');
let result = document.getElementById('result-text')

function getComputerChoice() {
  let options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  let randomNum = (Math.floor(Math.random() * 5));
  return options[randomNum];
}

function choice(userChoice) {
  let computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
    case 'rocklizard':
    case 'lizardspock':
    case 'spockscissors':
    case 'scissorslizard':
    case 'lizardpaper':
    case 'paperspock':
    case 'spockrock':
      ++userScore.innerHTML;
      result.innerHTML = `${userChoice} beats ${computerChoice}. You Win!`
      break;
    case 'scissorsrock':
    case 'rockpaper':
    case 'paperscissors':
    case 'lizardrock':
    case 'spocklizard':
    case 'scissorsspock':
    case 'lizardscissors':
    case 'paperlizard':
    case 'spockpaper':
    case 'rockspock':
      ++computerScore.innerHTML;
      result.innerHTML = `${userChoice} loses to ${computerChoice}. You Lose.`
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
    case 'lizardlizard':
    case 'spockspock':
      result.innerHTML = `It's a Draw ${userChoice} = ${computerChoice}`
  }
    
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

  lizard.addEventListener('click', function() {
    choice('lizard');
  })

  spock.addEventListener('click', function() {
    choice('spock');
  })
}

getUserChoice();