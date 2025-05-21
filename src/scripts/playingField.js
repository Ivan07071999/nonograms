/* eslint-disable import/no-cycle */
import {
  easyTestArrays,
  normalTestArrays,
  hardTestArrays,
  countLevel,
  createLengthArray,
  playingAreaArr,
} from './testArrays';
import {
  checkTimerStatus,
  stopTimer,
} from './timer';

import { nextOrWin } from './modal';
import { generateRecord, getRecords } from './records';
import { leftClickAudio, rightClickAudio } from './audio';

export function renderingGridArea() {
  const select = document.querySelector('.game__select');
  playingAreaArr.length = createLengthArray[select.value] ** 2;
  playingAreaArr.fill(0);
  const gridArea = document.querySelector('.container__grid_area');

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
        countLevel.clickSound = 2;
      } else {
        playingAreaArr[i] = 0;
        countLevel.clickSound = 1;
        // console.log(playingAreaArr);
      }
      switch (select.value) {
        case 'easy':
          if (
            playingAreaArr.join('')
            === easyTestArrays[countLevel.level].join('')
          ) {
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
    cell.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      cell.classList.toggle('container__grid_area_cell_right_click');
      cell.classList.remove('container__grid_area_cell_toggler');
      playingAreaArr[i] = 0;
      rightClickAudio();
    });
  });
}

export function renderTipsCell(selectedDifficulty) {
  const gridArea = document.querySelector('.container__grid_area');
  const container = document.querySelector('.container');
  const topTips = document.querySelector('.container__top_tips');
  const leftTips = document.querySelector('.container__left_tips');
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

export function createLeftTips(arr, size) {
  const leftTips = document.querySelector('.container__left_tips');
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

export function createTopTips(arr, size) {
  const topTips = document.querySelector('.container__top_tips');
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

export function selectLeftArrTips() {
  const select = document.querySelector('.game__select');
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
