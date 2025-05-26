const body = document.querySelector('body');
export default function initGame() {
  const gameContainer = document.createElement('div');
  const statusContainer = document.createElement('div');
  const newGameButton = document.createElement('button');
  const solutionButton = document.createElement('button');
  const randomGameButton = document.createElement('button');
  const saveGameButton = document.createElement('button');
  const continueGameButton = document.createElement('button');

  const timerContainer = document.createElement('div');
  const minutes = document.createElement('div');
  const seconds = document.createElement('div');

  const container = document.createElement('div');
  const imageArea = document.createElement('div');
  const topTips = document.createElement('div');
  const leftTips = document.createElement('div');
  const gridArea = document.createElement('div');

  const nightButton = document.createElement('div');
  const select = document.createElement('select');

  gameContainer.className = 'game__container';
  statusContainer.className = 'status_container';
  newGameButton.className = 'status_container__new_game_button';
  solutionButton.className = 'status_container__solution_button';
  randomGameButton.className = 'status_container__random_button';
  saveGameButton.className = 'status_container__save_button';
  continueGameButton.className = 'status_container__continue_button';

  timerContainer.className = 'timer_container';
  minutes.className = 'timer_container__minutes';
  seconds.className = 'timer_container__seconds';

  container.className = 'container';
  imageArea.className = 'container__image_area';
  topTips.className = 'container__top_tips';
  leftTips.className = 'container__left_tips';
  gridArea.className = 'container__grid_area';

  nightButton.className = 'night_mode light_mode';
  select.className = 'game__select';

  newGameButton.textContent = 'Reset';
  solutionButton.textContent = 'Solution';
  randomGameButton.textContent = 'Random game';
  saveGameButton.textContent = 'Save game';
  continueGameButton.textContent = 'Continue previous game';

  timerContainer.textContent = 'Timer';
  minutes.textContent = '00:';
  seconds.textContent = '00';

  body.appendChild(gameContainer);
  gameContainer.appendChild(statusContainer);
  statusContainer.appendChild(newGameButton);
  statusContainer.appendChild(solutionButton);
  statusContainer.appendChild(randomGameButton);
  statusContainer.appendChild(saveGameButton);
  statusContainer.appendChild(continueGameButton);

  gameContainer.appendChild(timerContainer);
  timerContainer.appendChild(minutes);
  timerContainer.appendChild(seconds);

  gameContainer.appendChild(container);
  container.appendChild(imageArea);
  container.appendChild(topTips);
  container.appendChild(leftTips);
  container.appendChild(gridArea);

  gameContainer.appendChild(nightButton);
  statusContainer.appendChild(select);

  const table = document.createElement('div');
  table.className = 'table';
  gameContainer.appendChild(table);
}
