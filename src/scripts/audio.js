/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */

import { countLevel } from './testArrays';
import rightClickUrl from '/src/assets/audio/rightClick.mp3';
import soundLeftSecond from '/src/assets/audio/click1.mp3';
import soundLeftSecond2 from '/src/assets/audio/click2.mp3';
import soundWinURL from '/src/assets/audio/win.mp3';

export function soundWin() {
  const soundUrl = soundWinURL;
  const sound = new Audio(soundUrl);
  sound.className = 'audio__sound_win';
  const body = document.querySelector('body');
  body.appendChild(sound);
}

export function clickSound() {
  const soundUrl = soundLeftSecond;
  const sound = new Audio(soundUrl);
  sound.className = 'audio__sound_click';
  const body = document.querySelector('body');
  body.appendChild(sound);
}

export function playAudio() {
  const sound = document.querySelector('.audio__sound_win');
  sound.currentTime = 0;
  sound.volume = 0.5;
  sound.play();
}

export function leftClickAudio() {
  const sound = document.querySelector('.audio__sound_click');
  if (countLevel.clickSound === 1) {
    sound.src = soundLeftSecond;
  } else {
    sound.src = soundLeftSecond2;
  }

  sound.currentTime = 0;
  sound.volume = 0.3;
  sound.play();
}

export function rightClickAudio() {
  const sound = document.querySelector('.audio__sound_click');
  sound.src = rightClickUrl;
  sound.currentTime = 0;
  sound.volume = 0.4;
  sound.play();
}
