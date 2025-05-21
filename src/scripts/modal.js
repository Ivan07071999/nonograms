/* eslint-disable import/no-cycle */

import { removeTimerContent, stopTimer } from './timer';
import { selectLeftArrTips } from './playingField';
import { playAudio } from './audio';

import { countLevel, createLengthArray, playingAreaArr } from './testArrays';

function unlockElements() {
  const buttonsElements = document.querySelector('.status_container');
  const selectElements = document.querySelector('.select_game__container');
  const gridArea = document.querySelector('.container__grid_area');

  buttonsElements.classList.remove('status_container_disable');
  selectElements.classList.remove('select_game__container_disable');
  gridArea.classList.remove('container__grid_area_disable');
}

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
    playingAreaArr.fill(0);
    const classRemove = document.querySelectorAll('.container__grid_area_cell');
    classRemove.forEach((item) => {
      item.classList.remove('container__grid_area_cell_toggler');
      item.classList.remove('container__grid_area_cell_right_click');
      removeTimerContent();
      countLevel.timerStatus = false;
    });
    unlockElements();
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
    unlockElements();
    selectLeftArrTips();
  });
}

function disableElements() {
  const buttonsElements = document.querySelector('.status_container');
  const selectElements = document.querySelector('.select_game__container');
  const gridArea = document.querySelector('.container__grid_area');

  buttonsElements.classList.add('status_container_disable');
  selectElements.classList.add('select_game__container_disable');
  gridArea.classList.add('container__grid_area_disable');
}

export function nextOrWin() {
  playAudio();
  disableElements();
  stopTimer();
  if ((countLevel.level <= 4)) {
    createNextLevelModal();
  } else {
    createWinModal();
  }
}
