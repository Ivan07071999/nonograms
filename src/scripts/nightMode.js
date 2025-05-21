const styleMode = localStorage.getItem('styleMode');
const body = document.querySelector('body');
export function enableDarkStyle() {
  const nightButton = document.querySelector('.night_mode');
  body.classList.add('darkstyle');
  localStorage.setItem('styleMode', 'dark');
  nightButton.classList.add('light_mode');
}

export function disableDarkStyle() {
  const nightButton = document.querySelector('.night_mode');
  body.classList.remove('darkstyle');
  localStorage.setItem('styleMode', null);
  nightButton.classList.remove('light_mode');
}

export function toggleDarckStyle() {
  const nightButton = document.querySelector('.night_mode');
  if (styleMode !== 'dark') {
    nightButton.classList.remove('light_mode');
  }

  if (styleMode === 'dark') {
    enableDarkStyle();
  }
}
