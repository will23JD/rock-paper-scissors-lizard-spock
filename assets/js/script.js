// How to play pop up
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

 // game

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let lizard = document.getElementById('lizard');
let spock = document.getElementById('spock');
let userScore = document.getElementById('user-score');
let computerScore = document.getElementById('computer-score');
let result = document.getElementById('result-text')
let game = document.querySelector('.game-area');
let userPick = document.getElementById('user-pick')
let computerPick = document.getElementById('computer-pick')
let desision = document.getElementById('desision')

function getComputerChoice() {
  let options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  let randomNum = (Math.floor(Math.random() * 5));
  if (randomNum === 0) {
    computerPick.innerHTML = `<i class="far fa-hand-rock"></i>`
  } else if (randomNum === 1) {
    computerPick.innerHTML = `<i class="far fa-hand-paper"></i>`
  }
  else if (randomNum === 2) {
    computerPick.innerHTML = `<i class="far fa-hand-scissors"></i>`
  }
  else if (randomNum === 3) {
    computerPick.innerHTML = `<i class="far fa-hand-lizard"></i>`
  } else {
    computerPick.innerHTML = `<i class="far fa-hand-spock"></i>`
  }
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
      desision.innerHTML = `${userChoice} beats ${computerChoice}<br> You Win!`
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
      desision.innerHTML = `${userChoice} loses to ${computerChoice}<br> You Lose`
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
    case 'lizardlizard':
    case 'spockspock':
      desision.innerHTML = `It's a Draw`
  }
    
}

/**
 * Gets users choice
 */
 function getUserChoice() {
  rock.addEventListener('click', function() {
    choice('rock');
    game.style.display = 'none';
    result.style.display = 'flex';
    userPick.innerHTML = `<i class="far fa-hand-rock"></i>`
  })

  paper.addEventListener('click', function() {
    choice('paper');
    game.style.display = 'none';
    result.style.display = 'flex';
    userPick.innerHTML = `<i class="far fa-hand-paper"></i>`
  })

  scissors.addEventListener('click', function() {
    choice('scissors');
    game.style.display = 'none';
    result.style.display = 'flex';
    userPick.innerHTML = `<i class="far fa-hand-scissors"></i>`
  })

  lizard.addEventListener('click', function() {
    choice('lizard');
    game.style.display = 'none';
    result.style.display = 'flex';
    userPick.innerHTML = `<i class="far fa-hand-lizard"></i>`
  })

  spock.addEventListener('click', function() {
    choice('spock');
    game.style.display = 'none';
    result.style.display = 'flex';
    userPick.innerHTML = `<i class="far fa-hand-spock"></i>`
  })
}

getUserChoice();