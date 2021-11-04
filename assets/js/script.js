// How to play pop up

// declare variables
let openModalButtons = document.querySelectorAll('[data-modal-target]');
let closeModalButtons = document.querySelectorAll('[data-close-button]');
let overlay = document.getElementById('overlay');

/**
 * adds event listeners to the open button
 * and applys to modal
 * passes to value to openModal
 */
openModalButtons.forEach(button => {
  button.addEventListener('click',function () {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

/**
 * adds event listeners to overlay
 * and applys to modals
 * passes to value to closeModal
 */
overlay.addEventListener('click', function(){
  const modals = document.querySelectorAll('.help.active');
  modals.forEach(modal => {
    closeModal(modal);
  });
});

/**
 * adds event listeners to the close button
 * and applys to modal
 * passes to value to closeModal
 */
closeModalButtons.forEach(button => {
  button.addEventListener('click', function() {
    const modal = button.closest('.help');
    closeModal(modal);
  });
});

/**
 * function to open te modal
 * adds the class active to
 * modal and overlay
 */
function openModal(modal) {
  modal.classList.add('active');
  overlay.classList.add('active');
}

/**
 * function to close te modal
 * removes the class active from
 * modal and overlay
 */
function closeModal(modal) {
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

// game

// declare variables
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let lizard = document.getElementById('lizard');
let spock = document.getElementById('spock');
let userScore = document.getElementById('user-score');
let computerScore = document.getElementById('computer-score');
let result = document.getElementById('result-text');
let game = document.querySelector('.game-area');
let userPick = document.getElementById('user-pick');
let computerPick = document.getElementById('computer-pick');
let desision = document.getElementById('desision');
let start = document.querySelectorAll('.game');
let restart = document.getElementById('play-again');

// sounds
let winS = document.getElementById('winS')

/**
 * function to get computer choice 
 * using a random number 0-5
 * and apply computerPick image to resluts area
 */
function getComputerChoice() {
  let options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  let randomNum = (Math.floor(Math.random() * 5));
  if (randomNum === 0) {
    computerPick.innerHTML = rock.innerHTML;
  } else if (randomNum === 1) {
    computerPick.innerHTML = paper.innerHTML;
  }
  else if (randomNum === 2) {
    computerPick.innerHTML = scissors.innerHTML;
  }
  else if (randomNum === 3) {
    computerPick.innerHTML = lizard.innerHTML;
  } else {
    computerPick.innerHTML = spock.innerHTML;
  }
  return options[randomNum];
}

/** 
 *function to find who wins the round
 or if its a draw
*/
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
      winS.play();
      desision.innerHTML = `${userChoice} beats ${computerChoice}<br> You Win!`;
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
      desision.innerHTML = `${userChoice} loses to ${computerChoice}<br> You Lose`;
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
    case 'lizardlizard':
    case 'spockspock':
      desision.innerHTML = `It's a Draw`;
  }
    
}

/**
 * Gets users choice
 * and sets the image for userPick
 */
 function getUserChoice() {
  rock.addEventListener('click', function() {
    choice('rock');
    userPick.innerHTML = rock.innerHTML;
  });

  paper.addEventListener('click', function() {
    choice('paper');
    userPick.innerHTML = paper.innerHTML;
  });

  scissors.addEventListener('click', function() {
    choice('scissors');
    userPick.innerHTML = scissors.innerHTML;
  });

  lizard.addEventListener('click', function() {
    choice('lizard');
    userPick.innerHTML = lizard.innerHTML;
  });

  spock.addEventListener('click', function() {
    choice('spock');
    userPick.innerHTML = spock.innerHTML;
  });
}

/**
 * function to add event lister
 * to game choices to 
 * hide game area and
 * show results area
 */
start.forEach(button => {
  button.addEventListener('click', function() {
    game.style.display = 'none';
    result.style.display = 'flex';
  });
});

/**
 * add event listerner to 
 * hind results area 
 * and show game area
 */
  restart.addEventListener('click', function() {
    game.style.display = '';
    result.style.display = 'none';
  });

getUserChoice();