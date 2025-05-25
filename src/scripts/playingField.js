/* eslint-disable import/no-cycle */
import {
  easyTestArrays,
  normalTestArrays,
  hardTestArrays,
  countLevel,
  playingAreaArr,
  createLengthArray,
} from './testArrays';
import {
  checkTimerStatus,
} from './timer';

import { nextOrWin } from './modal';
import { generateRecord, getRecords } from './records';
import { leftClickAudio, rightClickAudio } from './audio';

function comparison() {
  const select = document.querySelector('.game__select');
  switch (select.value) {
    case 'easy':
      for (let i = 0; i < easyTestArrays[countLevel.level].length; i += 1) {
        if (playingAreaArr[i] !== easyTestArrays[countLevel.level][i]) return;
      }
      break;
    case 'normal':
      for (let i = 0; i < normalTestArrays[countLevel.level].length; i += 1) {
        if (playingAreaArr[i] !== normalTestArrays[countLevel.level][i]) return;
      }
      break;
    case 'hard':
      for (let i = 0; i < hardTestArrays[countLevel.level].length; i += 1) {
        if (playingAreaArr[i] !== hardTestArrays[countLevel.level][i]) return;
      }
      break;
    default:
  }
  countLevel.level += 1;
  nextOrWin();
  generateRecord();
  getRecords();
}

export function renderingGridArea() {
  const gridArea = document.querySelector('.container__grid_area');

  while (gridArea.firstChild) {
    gridArea.removeChild(gridArea.firstChild);
  }

  playingAreaArr.forEach((_, i) => {
    const cell = document.createElement('div');
    cell.className = 'container__grid_area_cell';
    if (playingAreaArr[i] === 0) {
      cell.classList.remove('container__grid_area_cell_toggler');
    } else {
      cell.classList.add('container__grid_area_cell_toggler');
    }
    if (i % 5 === 0) {
      cell.style.borderLeft = '1.7px solid orangered';
    }

    if (playingAreaArr.length === 100) {
      if (i - 40 - (i % 10) === 0) {
        cell.style.borderBottom = '1.7px solid orangered';
      }
    }

    if (playingAreaArr.length % 3 === 0) {
      if (((i - 150) - (i % 15)) === 0) {
        cell.style.borderTop = '1.7px solid orangered';
      }
      if (i - 75 - (i % 15) === 0) {
        cell.style.borderTop = '1.7px solid orangered';
      }
    }

    gridArea.appendChild(cell);

    cell.addEventListener('click', () => {
      cell.classList.toggle('container__grid_area_cell_toggler');
      cell.classList.remove('container__grid_area_cell_right_click');
      if (playingAreaArr[i] === 0) {
        playingAreaArr[i] = 1;
        countLevel.clickSound = 2;
      } else {
        playingAreaArr[i] = 0;
        countLevel.clickSound = 1;
      }
      comparison();
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
      createLeftTips(easyTestArrays[countLevel.level], createLengthArray.easy);
      createTopTips(easyTestArrays[countLevel.level], createLengthArray.easy);
      break;
    case 'normal':
      createLeftTips(normalTestArrays[countLevel.level], createLengthArray.normal);
      createTopTips(normalTestArrays[countLevel.level], createLengthArray.normal);
      break;
    case 'hard':
      createLeftTips(hardTestArrays[countLevel.level], createLengthArray.hard);
      createTopTips(hardTestArrays[countLevel.level], createLengthArray.hard);
      break;
    default:
  }
}
