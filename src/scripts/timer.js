import { countLevel } from './testArrays';

let timerInterval;
let timeSeconds = 0;

export function startTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  const minutes = document.querySelector('.timer_container__minutes');
  const seconds = document.querySelector('.timer_container__seconds');
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

export function checkTimerStatus() {
  if (countLevel.timerStatus === true) return;
  startTimer();
  countLevel.timerStatus = true;
}
export function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

export function removeTimerContent() {
  const min = document.querySelector('.timer_container__minutes');
  const sec = document.querySelector('.timer_container__seconds');

  min.textContent = '00:';
  sec.textContent = '00';
}
