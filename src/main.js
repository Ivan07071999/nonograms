/* eslint-disable no-use-before-define */

/* eslint-disable no-undef */
// import {
//   appendButtons,
// } from './scripts/buttons';
import {
  easyTestArrays,
  normalTestArrays,
  hardTestArrays,
} from './scripts/testArrays';
import './style.css';

normalTestArrays.join();

const { body } = document;

// Buttons

const statusContainer = document.createElement('div');
const newGameButton = document.createElement('button');
const solutionButton = document.createElement('button');
const randomGameButton = document.createElement('button');
const saveGameButton = document.createElement('button');
const continueGameButton = document.createElement('button');

function addClassList() {
  statusContainer.className = 'status_container';
  newGameButton.className = 'status_container__new_game_button';
  solutionButton.className = 'status_container__solution_button';
  randomGameButton.className = 'status_container__random_button';
  saveGameButton.className = 'status_container__save_button';
  continueGameButton.className = 'status_container__continue_button';
}

addClassList();

function addTextButtons() {
  newGameButton.textContent = 'New game';
  solutionButton.textContent = 'Solution';
  randomGameButton.textContent = 'Random game';
  saveGameButton.textContent = 'Save game';
  continueGameButton.textContent = 'Continue previous game';
}

addTextButtons();

function appendButtons() {
  body.appendChild(statusContainer);
  statusContainer.appendChild(newGameButton);
  statusContainer.appendChild(solutionButton);
  statusContainer.appendChild(randomGameButton);
  statusContainer.appendChild(saveGameButton);
  statusContainer.appendChild(continueGameButton);
}

appendButtons();

// Timer

const timerContainer = document.createElement('div');
const minutes = document.createElement('div');
const seconds = document.createElement('div');

function appendTimerItems() {
  body.appendChild(timerContainer);
  timerContainer.appendChild(minutes);
  timerContainer.appendChild(seconds);
}

function createTimerItemsContent() {
  timerContainer.textContent = 'Timer';
  minutes.textContent = '00:';
  seconds.textContent = '00';
}

createTimerItemsContent();

appendTimerItems();

function addTimerClassList() {
  timerContainer.className = 'timer_container';
  minutes.className = 'timer_container__minutes';
  seconds.className = 'timer_container__seconds';
}

addTimerClassList();

let timerInterval;
let timeSeconds = 0;

// eslint-disable-next-line no-unused-vars
const countLevel = {
  level: 0,
  timerStatus: false,
};

function startTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timerInterval = setInterval(() => {
    timeSeconds += 1;
    const timeMinutes = Math.floor(timeSeconds / 60);
    const secs = timeSeconds % 60;

    const formattedMinutes = `${String(timeMinutes).padStart(2, '0')}:`;
    const formattedSeconds = `${String(secs).padStart(2, '0')}`;
    minutes.textContent = formattedMinutes;
    seconds.textContent = formattedSeconds;
  }, 1000);
}
function checkTimerStatus() {
  if (countLevel.timerStatus === false) {
    // console.log('false');
    return;
  }
  startTimer();
}

checkTimerStatus();
// startTimer();

// grid area

const container = document.createElement('div');
const imageArea = document.createElement('div');
const topTips = document.createElement('div');
const leftTips = document.createElement('div');
const gridArea = document.createElement('div');

function appendGridAreaItems() {
  body.appendChild(container);
  container.appendChild(imageArea);
  container.appendChild(topTips);
  container.appendChild(leftTips);
  container.appendChild(gridArea);
}

appendGridAreaItems();

function addClassListGridAreaItems() {
  container.className = 'container';
  imageArea.className = 'container__image_area';
  topTips.className = 'container__top_tips';
  leftTips.className = 'container__left_tips';
  gridArea.className = 'container__grid_area';
}

addClassListGridAreaItems();

const levelOfDifficulty = {
  easy: 5 ** 2,
  normal: 10 ** 2,
  hard: 15 ** 2,
};

for (let i = 0; i < levelOfDifficulty.easy; i += 1) {
  const cell = document.createElement('div');
  cell.className = 'container__grid_area_cell';
  gridArea.appendChild(cell);
}

// night mode
const nightButton = document.createElement('div');
nightButton.className = 'night_mode light_mode';
body.appendChild(nightButton);
let styleMode = localStorage.getItem('styleMode');

function enableDarkStyle() {
  body.classList.add('darkstyle');
  localStorage.setItem('styleMode', 'dark');
  nightButton.classList.add('light_mode');
}

function disableDarkStyle() {
  body.classList.remove('darkstyle');
  localStorage.setItem('styleMode', null);
  nightButton.classList.remove('light_mode');
}

nightButton.addEventListener('click', () => {
  styleMode = localStorage.getItem('styleMode');
  if (styleMode !== 'dark') return enableDarkStyle();
  return disableDarkStyle();
});

if (styleMode !== 'dark') {
  nightButton.classList.remove('light_mode');
}
if (styleMode === 'dark') {
  enableDarkStyle();
}

// Select levels

const difficultyLevelsArray = ['Easy', 'Normal', 'Hard'];

const select = document.createElement('select');
select.className = 'game__select';
body.appendChild(select);

difficultyLevelsArray.forEach((optionText) => {
  const optionElement = document.createElement('option');
  optionElement.className = 'game__option_element';
  optionElement.textContent = optionText;
  optionElement.value = optionText.toLowerCase();

  select.appendChild(optionElement);
});

//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
//   0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0,
//   1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
//   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//   0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
//   0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
//   0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
//   0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// ]; // heart

// const secondArrayHard = [
//   0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
//   0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
//   0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
//   0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
//   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//   0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
// ];

// const gridSizeContainer = {
//   easy: 150,
//   normal: 300,
//   hard: 450,
// };

const createLengthArray = {
  easy: 5,
  normal: 10,
  hard: 15,
};

let playingAreaArr = Array(createLengthArray.easy ** 2).fill(0);

select.addEventListener('change', (event) => {
  const selectedDifficulty = event.target.value;
  playingAreaArr = Array(createLengthArray[selectedDifficulty] ** 2).fill(0);
  renderingGridArea(/* playingAreaArr */);
  renderTopCell(selectedDifficulty);
  renderLeftCell(selectedDifficulty);
  selectLeftArrTips();
});

function renderLeftCell(selectedDifficulty) {
  while (leftTips.firstChild) {
    leftTips.removeChild(leftTips.firstChild);
  }

  let leftCellLen;

  if (selectedDifficulty === 'easy') {
    leftCellLen = createLengthArray.easy;
    container.style.height = '330px';
    leftTips.style.width = '160px';
    leftTips.style.height = '160px';
  }

  if (selectedDifficulty === 'normal') {
    leftCellLen = createLengthArray.normal;
    container.style.height = '480px';
    leftTips.style.width = '160px';
    leftTips.style.height = '320px';
  }

  if (selectedDifficulty === 'hard') {
    leftCellLen = createLengthArray.hard;
    container.style.height = '650px';
    leftTips.style.width = '160px';
    leftTips.style.height = '482px';
  }
}

function renderTopCell(selectedDifficulty) {
  while (topTips.firstChild) {
    topTips.removeChild(topTips.firstChild);
  }

  let topCellLen;

  if (selectedDifficulty === 'easy') {
    topCellLen = createLengthArray.easy;
    container.style.width = '330px';
    topTips.style.width = '160px';
    topTips.style.height = '160px';
  }

  if (selectedDifficulty === 'normal') {
    topCellLen = createLengthArray.normal;
    container.style.width = '485px';
    topTips.style.width = '320px';
    topTips.style.height = '160px';
  }

  if (selectedDifficulty === 'hard') {
    topCellLen = createLengthArray.hard;
    container.style.width = '650px';
    topTips.style.width = '482px';
    topTips.style.height = '160px';
  }
}

function renderingGridArea() {
  while (gridArea.firstChild) {
    gridArea.removeChild(gridArea.firstChild);
  }

  const gridSizeMap = {
    25: '160px',
    100: '320px',
    225: '480px',
  };

  const cellSize = gridSizeMap[playingAreaArr.length] || '0px';
  gridArea.style.width = cellSize;
  gridArea.style.height = cellSize;

  playingAreaArr.forEach((_, i) => {
    const cell = document.createElement('div');
    cell.className = 'container__grid_area_cell';

    cell.addEventListener('click', () => {
      checkTimerStatus();
      cell.classList.toggle('container__grid_area_cell_toggler');
      if (playingAreaArr[i] === 0) {
        playingAreaArr[i] = 1;
        // console.log(playingAreaArr);
      } else {
        playingAreaArr[i] = 0;
        // console.log(playingAreaArr);
      }
      switch (select.value) {
        case 'easy':
          if (
            playingAreaArr.join('')
            === easyTestArrays[countLevel.level].join('')
          ) {
            createNextLevelModal(cell);
          }
          break;
        case 'normal':
          if (
            playingAreaArr.join('')
            === normalTestArrays[countLevel.level].join('')
          ) {
            createNextLevelModal(cell);
          }
          break;
        case 'hard':
          if (
            playingAreaArr.join('')
            === hardTestArrays[countLevel.level].join('')
          ) {
            createNextLevelModal(cell);
          }
          break;
        default:
      }
    });
    gridArea.appendChild(cell);
  });
}

renderingGridArea();

function createNextLevelModal() {
  const modalContainer = document.createElement('div');
  const modalButton = document.createElement('button');

  modalContainer.className = 'modal';
  modalButton.className = 'modal__button';

  modalContainer.textContent = '"Great! You solved the nonogram!"';
  modalButton.textContent = 'Continue';

  body.appendChild(modalContainer);
  modalContainer.appendChild(modalButton);
  modalContainer.classList.add('modal__animation');

  modalButton.addEventListener('click', () => {
    modalContainer.classList.remove('modal__animation');
    countLevel.level += 1;
    // console.log(countLevel.level);
    playingAreaArr.fill(0);
    const classRemove = document.querySelectorAll('.container__grid_area_cell');
    classRemove.forEach((item) => {
      // console.log(item)
      item.classList.remove('container__grid_area_cell_toggler');
    });
    // console.log(playingAreaArr, 'arr');
    selectLeftArrTips();
  });
}

// левые подсказки

function createLeftTips(arr, size) {
  const hintsRows = [];

  for (let i = 0; i < size; i += 1) {
    const rowHints = [];

    let count = 0;

    for (let j = 0; j < size; j += 1) {
      const index = i * size + j;

      if (arr[index] === 1) {
        count += 1;
      } else if (count > 0) {
        rowHints.push(count);
        count = 0;
      }
    }
    if (count > 0) {
      rowHints.push(count);
    }

    hintsRows.push(rowHints);
  }

  while (leftTips.firstChild) {
    leftTips.removeChild(leftTips.firstChild);
  }

  for (let i = 0; i < hintsRows.length; i += 1) {
    const cell = document.createElement('div');
    cell.className = 'container__grid_area_cell_left';
    leftTips.appendChild(cell);
    for (let j = 0; j < hintsRows[i].length; j += 1) {
      const miniCell = document.createElement('div');
      cell.appendChild(miniCell);
      miniCell.textContent = hintsRows[i][j];
      miniCell.className = 'minicell';
    }
  }
}

function createTopTips(arr, size) {
  const hintsCols = Array.from({ length: size }, () => []);

  for (let j = 0; j < size; j += 1) {
    let count = 0;

    for (let i = 0; i < size; i += 1) {
      const index = i * size + j;
      if (arr[index] === 1) {
        count += 1;
      } else if (count > 0) {
        hintsCols[j].push(count);
        count = 0;
      }
    }
    if (count > 0) {
      hintsCols[j].push(count);
    }
  }

  while (topTips.firstChild) {
    topTips.removeChild(topTips.firstChild);
  }

  for (let i = 0; i < hintsCols.length; i += 1) {
    const cell = document.createElement('div');
    cell.className = 'container__grid_area_cell_top';
    topTips.appendChild(cell);
    for (let j = 0; j < hintsCols[i].length; j += 1) {
      const miniCell = document.createElement('div');
      cell.appendChild(miniCell);
      miniCell.textContent = hintsCols[i][j];
      miniCell.className = 'minicell';
    }
  }
}

function selectLeftArrTips() {
  switch (select.value) {
    case 'easy':
      createLeftTips(easyTestArrays[countLevel.level], 5);
      createTopTips(easyTestArrays[countLevel.level], 5);
      break;
    case 'normal':
      createLeftTips(normalTestArrays[countLevel.level], 10);
      createTopTips(normalTestArrays[countLevel.level], 10);
      break;
    case 'hard':
      createLeftTips(hardTestArrays[countLevel.level], 15);
      createTopTips(hardTestArrays[countLevel.level], 15);
      break;
    default:
  }
}

selectLeftArrTips();
