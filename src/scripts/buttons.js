import { selectLeftArrTips, renderTipsCell, renderingGridArea } from './playingField';
import {
  countLevel,
  easyTestArrays,
  normalTestArrays,
  hardTestArrays,
  createLengthArray,
  difficultyLevelsArray,
  playingAreaArr,
} from './testArrays';
import { nextOrWin } from './modal';

export function newGame() {
  const cell = document.querySelectorAll('.container__grid_area_cell');
  for (let i = 0; i < cell.length; i += 1) {
    cell[i].classList.remove('container__grid_area_cell_toggler');
    cell[i].classList.remove('container__grid_area_cell_right_click');
  }
  playingAreaArr.fill(0);
  selectLeftArrTips();
}

export function showSolution() {
  const select = document.querySelector('.game__select');
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

export function saveGame() {
  const select = document.querySelector('.game__select');
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

export function createRandomGame() {
  const select = document.querySelector('.game__select');
  countLevel.level = Math.floor(Math.random() * (5 - 0) + 0);
  const random = Math.floor(Math.random() * (difficultyLevelsArray.length - 0) + 0);
  select.value = difficultyLevelsArray[random].toLowerCase();
  playingAreaArr.length = createLengthArray[select.value] ** 2;
  playingAreaArr.fill(0);

  renderingGridArea();
  renderTipsCell(select.value);
  selectLeftArrTips();
}

export function loadPreviousGame() {
  const select = document.querySelector('.game__select');
  const getSaveItems = JSON.parse(localStorage.getItem('Previous game'));
  select.value = getSaveItems.difficulty;
  countLevel.level = getSaveItems.level;
  // playingAreaArr.length = 0;

  // playingAreaArr = getSaveItems.arr.split('').map(Number);
  //   for (let i = 0; i < buffer.length; i += 1) {
  //     playingAreaArr.push(buffer[i]);
  //   }
  // const buffer = getSaveItems.arr.split("").map(Number);
  // playingAreaArr = buffer;
  //   getSaveItems.arr.split('');
  //   console.log(getSaveItems)
  //   console.log(playingAreaArr.arr)
  // playingAreaArr = getSaveItems.arr.split('').map(Number);
  // playingAreaArr = getSaveItems.arr.split('').map(Number);

  renderingGridArea();
  renderTipsCell(select.value);
  selectLeftArrTips();
}
