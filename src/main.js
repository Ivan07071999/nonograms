/* eslint-disable no-use-before-define */

/* eslint-disable no-undef */
// import {
//   appendButtons,
// } from './scripts/buttons';
import {
  easyTestArrays,
  normalTestArrays,
  hardTestArrays,
  easyName,
  normalName,
  hardName,
  allNames,
} from './scripts/testArrays';
import './style.css';

normalTestArrays.join();

const { body } = document;
let tableArr = [];
let nameArr = [];

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
  newGameButton.textContent = 'Reset';
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
  timeSeconds = 0;
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
  if (countLevel.timerStatus === true) return;
  // console.log('false');
  startTimer();
  countLevel.timerStatus = true;
}
function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function removeTimerContent() {
  const min = document.querySelector('.timer_container__minutes');
  const sec = document.querySelector('.timer_container__seconds');

  min.textContent = '00:';
  sec.textContent = '00';
}

// checkTimerStatus();
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

const createLengthArray = {
  easy: 5,
  normal: 10,
  hard: 15,
};

let playingAreaArr = Array(createLengthArray.easy ** 2).fill(0);

function renderTipsCell(selectedDifficulty) {
  while (topTips.firstChild) {
    topTips.removeChild(topTips.firstChild);
  }

  while (leftTips.firstChild) {
    leftTips.removeChild(leftTips.firstChild);
  }

  if (selectedDifficulty === 'easy') {
    gridArea.classList.remove('container__grid_area_normal');
    gridArea.classList.remove('container__grid_area_hard');
    container.classList.remove('container__normal');
    container.classList.remove('container__hard');
    topTips.classList.remove('container__top_tips_normal');
    topTips.classList.remove('container__top_tips_hard');
  }

  if (selectedDifficulty === 'normal') {
    gridArea.classList.remove('container__grid_area_hard');
    gridArea.classList.add('container__grid_area_normal');
    container.classList.remove('container__hard');
    container.classList.add('container__normal');
    topTips.classList.remove('container__top_tips_hard');
    topTips.classList.add('container__top_tips_normal');
  }

  if (selectedDifficulty === 'hard') {
    gridArea.classList.add('container__grid_area_hard');
    container.classList.add('container__hard');
    topTips.classList.add('container__top_tips_hard');
  }
}

select.addEventListener('change', (event) => {
  const selectedDifficulty = event.target.value;
  playingAreaArr = Array(createLengthArray[selectedDifficulty] ** 2).fill(0);
  renderingGridArea();
  renderTipsCell(selectedDifficulty);
  selectLeftArrTips();
  // return selectedDifficulty;
});
let clickSound;
function renderingGridArea() {
  while (gridArea.firstChild) {
    gridArea.removeChild(gridArea.firstChild);
  }

  // console.log(playingAreaArr);

  playingAreaArr.forEach((_, i) => {
    const cell = document.createElement('div');
    cell.className = 'container__grid_area_cell';
    if (playingAreaArr[i] === 0) {
      // cell.classList.remove('container__grid_area_cell_toggler');
      // console.log(playingAreaArr);
    } else {
      cell.classList.add('container__grid_area_cell_toggler');
      // console.log(playingAreaArr);
    }
    gridArea.appendChild(cell);

    cell.addEventListener('click', () => {
      cell.classList.toggle('container__grid_area_cell_toggler');
      cell.classList.remove('container__grid_area_cell_right_click');
      if (playingAreaArr[i] === 0) {
        playingAreaArr[i] = 1;
        // console.log(playingAreaArr);
        clickSound = 2;
      } else {
        playingAreaArr[i] = 0;
        clickSound = 1;
        // console.log(playingAreaArr);
      }
      switch (select.value) {
        case 'easy':
          if (
            playingAreaArr.join('')
            === easyTestArrays[countLevel.level].join('')
          ) {
            // createNextLevelModal();
            countLevel.level += 1;
            stopTimer();
            nextOrWin();
            generateRecord();
            getRecords();
          }
          break;
        case 'normal':
          if (
            playingAreaArr.join('')
            === normalTestArrays[countLevel.level].join('')
          ) {
            // createNextLevelModal(cell);
            countLevel.level += 1;
            stopTimer();
            nextOrWin();
            generateRecord();
            getRecords();
          }
          break;
        case 'hard':
          if (
            playingAreaArr.join('')
            === hardTestArrays[countLevel.level].join('')
          ) {
            // createNextLevelModal(cell);
            countLevel.level += 1;
            stopTimer();
            nextOrWin();
            generateRecord();
            getRecords();
          }
          break;
        default:
      }
      checkTimerStatus();
      leftClickAudio();
    });
    // gridArea.appendChild(cell);
    cell.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      cell.classList.toggle('container__grid_area_cell_right_click');
      cell.classList.remove('container__grid_area_cell_toggler');
      playingAreaArr[i] = 0;
      rightClickAudio();
    });
  });
}

renderingGridArea();

function createNextLevelModal() {
  const modalContainer = document.createElement('div');
  const modalButton = document.createElement('button');
  const min = document.querySelector('.timer_container__minutes');
  const sec = document.querySelector('.timer_container__seconds');

  modalContainer.className = 'modal';
  modalButton.className = 'modal__button';

  modalContainer.textContent = `"Great! You solved the nonogram in ${min.textContent}${sec.textContent}!"`;
  modalButton.textContent = 'Continue';

  body.appendChild(modalContainer);
  modalContainer.appendChild(modalButton);
  modalContainer.classList.add('modal__animation');

  modalButton.addEventListener('click', () => {
    modalContainer.classList.remove('modal__animation');
    // countLevel.level += 1;
    // console.log(countLevel.level);
    playingAreaArr.fill(0);
    const classRemove = document.querySelectorAll('.container__grid_area_cell');
    classRemove.forEach((item) => {
      // console.log(item)
      item.classList.remove('container__grid_area_cell_toggler');
      item.classList.remove('container__grid_area_cell_right_click');
      removeTimerContent();
      countLevel.timerStatus = false;
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

// Buttons

function newGame() {
  const cell = document.querySelectorAll('.container__grid_area_cell');
  for (let i = 0; i < cell.length; i += 1) {
    cell[i].classList.remove('container__grid_area_cell_toggler');
    cell[i].classList.remove('container__grid_area_cell_right_click');
  }
  playingAreaArr.fill(0);
  selectLeftArrTips();
}

function showSolution() {
  const cell = document.querySelectorAll('.container__grid_area_cell');
  switch (select.value) {
    case 'easy':
      for (let i = 0; i < easyTestArrays[countLevel.level].length; i += 1) {
        cell[i].classList.remove('container__grid_area_cell_right_click');
        if (easyTestArrays[countLevel.level][i] === 1) {
          cell[i].classList.add('container__grid_area_cell_toggler');
        } else {
          cell[i].classList.remove('container__grid_area_cell_toggler');
        }
      }
      countLevel.level += 1;
      nextOrWin();
      break;
    case 'normal':
      for (let i = 0; i < normalTestArrays[countLevel.level].length; i += 1) {
        cell[i].classList.remove('container__grid_area_cell_right_click');
        if (normalTestArrays[countLevel.level][i] === 1) {
          cell[i].classList.add('container__grid_area_cell_toggler');
        } else {
          cell[i].classList.remove('container__grid_area_cell_toggler');
        }
      }
      countLevel.level += 1;
      nextOrWin();
      break;
    case 'hard':
      for (let i = 0; i < hardTestArrays[countLevel.level].length; i += 1) {
        cell[i].classList.remove('container__grid_area_cell_right_click');
        if (hardTestArrays[countLevel.level][i] === 1) {
          cell[i].classList.add('container__grid_area_cell_toggler');
        } else {
          cell[i].classList.remove('container__grid_area_cell_toggler');
        }
      }
      countLevel.level += 1;
      nextOrWin();
      break;
    default:
  }
}

function createRandomGame() {
  countLevel.level = Math.floor(Math.random() * (5 - 0) + 0);
  const random = Math.floor(Math.random() * (difficultyLevelsArray.length - 0) + 0);
  select.value = difficultyLevelsArray[random].toLowerCase();
  playingAreaArr = Array(createLengthArray[select.value] ** 2).fill(0);

  renderingGridArea();
  renderTipsCell(select.value);
  selectLeftArrTips();
}

function saveGame() {
  const currentArrState = playingAreaArr.join('');
  localStorage.setItem(
    'Previous game',
    JSON.stringify({
      level: countLevel.level,
      difficulty: select.value,
      arr: currentArrState,
    }),
  );
}

function loadPreviousGame() {
  const getSaveItems = JSON.parse(localStorage.getItem('Previous game'));
  select.value = getSaveItems.difficulty;
  countLevel.level = getSaveItems.level;
  playingAreaArr = getSaveItems.arr.split('').map(Number);

  renderingGridArea();
  renderTipsCell(select.value);
  selectLeftArrTips();
}

solutionButton.addEventListener('click', showSolution);
newGameButton.addEventListener('click', newGame);
randomGameButton.addEventListener('click', createRandomGame);
saveGameButton.addEventListener('click', saveGame);
continueGameButton.addEventListener('click', loadPreviousGame);

// if (countLevel.level > 4) createWinModal();

function createWinModal() {
  const winModal = document.createElement('div');
  const winButton = document.createElement('button');

  winModal.className = 'modal';
  winButton.className = 'modal__button';

  winModal.textContent = 'You win! \n select another difficulty level';
  winButton.textContent = 'New game';

  body.appendChild(winModal);
  winModal.appendChild(winButton);

  winModal.classList.add('modal__animation');

  winButton.addEventListener('click', () => {
    winModal.classList.remove('modal__animation');
    countLevel.level = 0;
    winModal.classList.remove('modal__animation');
    playingAreaArr.fill(0);
    const classRemove = document.querySelectorAll('.container__grid_area_cell');
    classRemove.forEach((item) => {
      item.classList.remove('container__grid_area_cell_toggler');
      removeTimerContent();
      countLevel.timerStatus = false;
    });
    selectLeftArrTips();
  });
}

// createWinModal();
function nextOrWin() {
  playAudio();
  if ((countLevel.level <= 4)) {
    createNextLevelModal();
  } else {
    createWinModal();
  }
}

// records table

function recordsTable() {
  const table = document.createElement('div');
  table.className = 'table';
  body.appendChild(table);
}

recordsTable();

function loadRecords() {
  const records = localStorage.getItem('Records');
  if (records) {
    tableArr = JSON.parse(records);
  }
}

loadRecords();

function generateRecord() {
  const min = document.querySelector('.timer_container__minutes');
  const sec = document.querySelector('.timer_container__seconds');
  getName();
  const record = {
    name: nameArr[countLevel.level - 1],
    difficulty: select.value,
    time: `${min.textContent.slice(0, -1)}${sec.textContent}`,
  };

  tableArr.push(record);

  if (tableArr.length > 5) {
    tableArr.shift();
  }

  localStorage.setItem('Records', JSON.stringify(tableArr));
  // console.log(tableArr);
}

function getRecords() {
  const table = document.querySelector('.table');
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
  table.textContent = 'Table records';

  const recordsArr = JSON.parse(localStorage.getItem('Records'));
  // if (tableArr.length > 5) tableArr.shift();

  // console.log(tableArr);

  recordsArr.sort((record1, record2) => Number(record1.time) - Number(record2.time));
  // console.log(recordsArr, '222');

  for (let i = 0; i < 5; i += 1) {
    const rows = document.createElement('div');
    rows.className = 'table__rows';
    rows.textContent = `
    ${recordsArr[i].name || 'name'} 
    ${recordsArr[i].difficulty || 'difficulty'} 
    ${recordsArr[i].time.slice(0, 2) || '00'}:
    ${recordsArr[i].time.slice(2) || '00'}
    `;
    table.appendChild(rows);
  }
  // console.log(table)
}

getRecords();

function getName() {
  if (select.value === 'easy') {
    nameArr = easyName;
  } else if (select.value === 'normal') {
    nameArr = normalName;
  } else {
    nameArr = hardName;
  }
}

// Select game

function selectGame() {
  const containerSel = document.createElement('div');
  containerSel.className = 'select_game__container';

  body.appendChild(containerSel);
  getName();

  for (let i = 0; i < allNames.length; i += 1) {
    const subContainer = document.createElement('div');
    subContainer.className = 'select_game__container_sub';
    containerSel.appendChild(subContainer);
    subContainer.textContent = `${difficultyLevelsArray[i]}:`;

    for (let j = 0; j < allNames[i].length; j += 1) {
      const names = document.createElement('span');
      names.className = 'select_game__container_sub_name';
      subContainer.appendChild(names);
      names.textContent = `${allNames[i][j]}`;

      names.addEventListener('click', () => {
        select.value = difficultyLevelsArray[i].toLowerCase();
        countLevel.level = j;

        createArr();
        renderingGridArea();
        renderTipsCell(select.value);
        selectLeftArrTips();
        // stopTimer();
      });
    }
  }
}

selectGame();

function createArr() {
  playingAreaArr = Array(createLengthArray[select.value] ** 2).fill(0);
}

function playAudio() {
  const sound = document.createElement('audio');
  body.appendChild(sound);
  sound.src = '/src/assets/audio/win.mp3';
  sound.currentTime = 0;
  sound.volume = 0.5;
  sound.play();
}

function leftClickAudio() {
  const sound = document.createElement('audio');
  body.appendChild(sound);
  sound.src = `/src/assets/audio/click${clickSound}.mp3`;
  sound.currentTime = 0;
  sound.volume = 0.3;
  sound.play();
}

function rightClickAudio() {
  const sound = document.createElement('audio');
  body.appendChild(sound);
  sound.src = '/src/assets/audio/rightClick.mp3';
  sound.currentTime = 0;
  sound.volume = 0.4;
  sound.play();
}
