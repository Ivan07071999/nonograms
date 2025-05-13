import './style.css';
//import createNightButton from './nightMode';
//createNightButton();


// eslint-disable-next-line no-undef
const { body } = document;

const statusContainer = document.createElement('div');
statusContainer.className = 'status_container';
body.appendChild(statusContainer);

const newGameButton = document.createElement('button');
newGameButton.className = 'status_container__new_game_button';
statusContainer.appendChild(newGameButton);
newGameButton.textContent = 'New game';

const solutionButton = document.createElement('button');
solutionButton.className = 'status_container__solution_button';
solutionButton.textContent = 'Solution';
statusContainer.appendChild(solutionButton);

const randomGameButton = document.createElement('button');
randomGameButton.className = 'status_container__random_button';
randomGameButton.textContent = 'Random game';
statusContainer.appendChild(randomGameButton);

const saveGameButton = document.createElement('button');
saveGameButton.className = 'status_container__save_button';
saveGameButton.textContent = 'Save game';
statusContainer.appendChild(saveGameButton);

const continueGameButton = document.createElement('button');
continueGameButton.className = 'status_container__continue_button';
continueGameButton.textContent = 'Continue previous game';
statusContainer.appendChild(continueGameButton);

// Timer

const timerContainer = document.createElement('div');
timerContainer.className = 'timer_container';
timerContainer.textContent = 'Timer';
body.appendChild(timerContainer);

const minutes = document.createElement('div');
minutes.className = 'timer_container__minutes';
minutes.textContent = '00:';
timerContainer.appendChild(minutes);

const seconds = document.createElement('div');
seconds.className = 'timer_container__seconds';
seconds.textContent = '00';
timerContainer.appendChild(seconds);


// grid area

const container = document.createElement("div");
container.className = "container";
body.appendChild(container);

const imageArea = document.createElement('div');
imageArea.className = 'container__image_area';
container.appendChild(imageArea);


const topTips = document.createElement('div');
topTips.className = 'container__top_tips';
container.appendChild(topTips);

const leftTips = document.createElement('div');
leftTips.className = 'container__left_tips';
container.appendChild(leftTips);


const gridArea = document.createElement('div');
gridArea.className = 'container__grid_area';
container.appendChild(gridArea);


const levelOfDifficulty = {
  easy: 5 ** 2,
  normal: 10 ** 2,
  hard: 15 ** 2,
};

for (let i = 0; i < levelOfDifficulty.hard; i += 1) {
  const cell = document.createElement('div');
  cell.className = 'container__grid_area_cell';
  gridArea.appendChild(cell);
}

for (let i = 0; i < 15 * 5; i += 1) {
  const cell = document.createElement('div');
  cell.className = 'container__grid_area_cell_top';
  topTips.appendChild(cell);
}

for (let i = 0; i < 15 * 5; i += 1) {
  const cell = document.createElement('div');
  cell.className = 'container__grid_area_cell_left';
  leftTips.appendChild(cell);
}


// night mode
const nightButton = document.createElement('div');
nightButton.className = 'night_mode';
body.appendChild(nightButton);

let styleMode = localStorage.getItem('styleMode');

function enableDarkStyle() {
  body.classList.add('darkstyle');
  localStorage.setItem('styleMode', 'dark');
  //nightButton.style.backgroundImage = 'url("assets/light-mode.png")';
}

function disableDarkStyle() {
  body.classList.remove('darkstyle');
  localStorage.setItem('styleMode', null);
  //nightButton.style.backgroundImage = 'url("assets/dark-mode.png")';
}

nightButton.addEventListener('click', () => {
  styleMode = localStorage.getItem('styleMode');
  if (styleMode !== 'dark') return enableDarkStyle();
  disableDarkStyle();
});

if (styleMode === 'dark') {
  enableDarkStyle();
}

// nightButton.style.backgroundImage = "url('assets/light-mode.png')";
// nightButton.style.backgroundSize = 'contain';
