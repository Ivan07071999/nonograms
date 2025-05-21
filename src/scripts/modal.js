/* eslint-disable import/no-cycle */

import { removeTimerContent } from './timer';
import { selectLeftArrTips } from './playingField';
import { playAudio } from './audio';

import { countLevel, createLengthArray, playingAreaArr } from './testArrays';

export function createNextLevelModal() {
  const select = document.querySelector('.game__select');
  playingAreaArr.length = createLengthArray[select.value] ** 2;
  playingAreaArr.fill(0);
  const modalContainer = document.createElement('div');
  const modalButton = document.createElement('button');
  const min = document.querySelector('.timer_container__minutes');
  const sec = document.querySelector('.timer_container__seconds');
  const gameContainer = document.querySelector('.game__container');

  modalContainer.className = 'modal';
  modalButton.className = 'modal__button';

  modalContainer.textContent = `"Great! You solved the nonogram in ${min.textContent}${sec.textContent}!"`;
  modalButton.textContent = 'Continue';

  gameContainer.appendChild(modalContainer);
  modalContainer.appendChild(modalButton);
  modalContainer.classList.add('modal__animation');

  modalButton.addEventListener('click', () => {
    modalContainer.classList.remove('modal__animation');
    //  countLevel.level += 1;
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

export function createWinModal() {
  const select = document.querySelector('.game__select');
  playingAreaArr.length = createLengthArray[select.value] ** 2;
  playingAreaArr.fill(0);

  const gameContainer = document.querySelector('.game__container');
  const winModal = document.createElement('div');
  const winButton = document.createElement('button');

  winModal.className = 'modal';
  winButton.className = 'modal__button';

  winModal.textContent = 'You win! \n select another difficulty level';
  winButton.textContent = 'New game';

  gameContainer.appendChild(winModal);
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

export function nextOrWin() {
  playAudio();
  if ((countLevel.level <= 4)) {
    createNextLevelModal();
  } else {
    createWinModal();
  }
}
