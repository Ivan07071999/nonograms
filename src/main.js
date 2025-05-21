import initGame from './scripts/initGame';

import { enableDarkStyle, disableDarkStyle, toggleDarckStyle } from './scripts/nightMode';

import { renderTipsCell, renderingGridArea, selectLeftArrTips } from './scripts/playingField';

import {
  createLengthArray,
  playingAreaArr,
  difficultyLevelsArray,
  levelOfDifficulty,
  countLevel,
} from './scripts/testArrays';

import {
  newGame,
  showSolution,
  saveGame,
  loadPreviousGame,
  createRandomGame,
} from './scripts/buttons';
import { loadRecords, getRecords } from './scripts/records';
import selectGame from './scripts/selectGame';
import './style.css';

let styleMode = localStorage.getItem('styleMode');

initGame();

const newGameButton = document.querySelector('.status_container__new_game_button');
const solutionButton = document.querySelector('.status_container__solution_button');
const randomGameButton = document.querySelector('.status_container__random_button');
const saveGameButton = document.querySelector('.status_container__save_button');
const continueGameButton = document.querySelector('.status_container__continue_button');
const nightButton = document.querySelector('.night_mode');
const select = document.querySelector('.game__select');
const gridArea = document.querySelector('.container__grid_area');

enableDarkStyle();
disableDarkStyle();
toggleDarckStyle();

nightButton.addEventListener('click', () => {
  styleMode = localStorage.getItem('styleMode');
  if (styleMode !== 'dark') return enableDarkStyle();
  return disableDarkStyle();
});

difficultyLevelsArray.forEach((optionText) => {
  const optionElement = document.createElement('option');
  optionElement.className = 'game__option_element';
  optionElement.textContent = optionText;
  optionElement.value = optionText.toLowerCase();

  select.appendChild(optionElement);
});

for (let i = 0; i < levelOfDifficulty.easy; i += 1) {
  const cell = document.createElement('div');
  cell.className = 'container__grid_area_cell';
  gridArea.appendChild(cell);
}

select.addEventListener('change', (event) => {
  const selectedDifficulty = event.target.value;
  playingAreaArr.length = createLengthArray[selectedDifficulty] ** 2;
  playingAreaArr.fill(0);
  countLevel.level = 0;
  renderingGridArea();
  renderTipsCell(selectedDifficulty);
  selectLeftArrTips();
});

renderingGridArea();
selectLeftArrTips();

solutionButton.addEventListener('click', showSolution);
newGameButton.addEventListener('click', newGame);
randomGameButton.addEventListener('click', createRandomGame);
saveGameButton.addEventListener('click', saveGame);
continueGameButton.addEventListener('click', loadPreviousGame);

loadRecords();
getRecords();
selectGame();

// function loadPreviousGame() {
//   const getSaveItems = JSON.parse(localStorage.getItem('Previous game'));
//   select.value = getSaveItems.difficulty;
//   countLevel.level = getSaveItems.level;
//   playingAreaArr = getSaveItems.arr.split('').map(Number);

//   renderingGridArea();
//   renderTipsCell(select.value);
//   selectLeftArrTips();
// }
