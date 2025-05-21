import {
  allNames,
  countLevel,
  difficultyLevelsArray,
  playingAreaArr,
  createLengthArray,
} from './testArrays';

import {
  renderingGridArea,
  renderTipsCell,
  selectLeftArrTips,
} from './playingField';

import { stopTimer, removeTimerContent } from './timer';

export default function selectGame() {
  const gameContainer = document.querySelector('.game__container');
  const select = document.querySelector('.game__select');
  const containerSel = document.createElement('div');
  containerSel.className = 'select_game__container';

  gameContainer.appendChild(containerSel);
  containerSel.textContent = 'Select nonogram';

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

        playingAreaArr.length = createLengthArray[select.value] ** 2;
        playingAreaArr.fill(0);

        renderingGridArea();
        renderTipsCell(select.value);
        selectLeftArrTips();
        stopTimer();
        removeTimerContent();
        countLevel.timerStatus = false;
      });
    }
  }
}
