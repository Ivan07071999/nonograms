import { countLevel } from './testArrays';

export function playAudio() {
  const sound = document.querySelector('.sound__win');
  sound.src = '/src/assets/audio/win.mp3';
  sound.currentTime = 0;
  sound.volume = 0.5;
  sound.play();
}

export function leftClickAudio() {
  const sound = document.querySelector('.sound__click');
  sound.src = `/src/assets/audio/click${countLevel.clickSound}.mp3`;
  sound.currentTime = 0;
  sound.volume = 0.3;
  sound.play();
}

export function rightClickAudio() {
  const sound = document.querySelector('.sound__click');
  sound.src = '/src/assets/audio/rightClick.mp3';
  sound.currentTime = 0;
  sound.volume = 0.4;
  sound.play();
}
