import {
  countLevel, allNames,
} from './testArrays';

let nameArr = [];
let tableArr = [];

export function getName() {
  const select = document.querySelector('.game__select');
  if (select.value === 'easy') {
    nameArr = [...allNames[0]];
  } else if (select.value === 'normal') {
    nameArr = [...allNames[1]];
  } else {
    nameArr = [...allNames[2]];
  }
}

export function generateRecord() {
  const select = document.querySelector('.game__select');
  const min = document.querySelector('.timer_container__minutes');
  const sec = document.querySelector('.timer_container__seconds');
  getName();
  const record = {
    name: nameArr[countLevel.level - 1],
    difficulty: select.value,
    time: `${min.textContent.slice(0, -1)}${sec.textContent}`,
  };

  tableArr.push(record);

  if (tableArr.length > 5) {
    tableArr.shift();
  }

  localStorage.setItem('Records', JSON.stringify(tableArr));
}

export function loadRecords() {
  const records = localStorage.getItem('Records');
  if (records) {
    tableArr = JSON.parse(records);
  }
}

export function getRecords() {
  const table = document.querySelector('.table');
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
  table.textContent = 'Table records';

  const recordsArr = JSON.parse(localStorage.getItem('Records'));

  recordsArr.sort((record1, record2) => Number(record1.time) - Number(record2.time));

  for (let i = 0; i < 5; i += 1) {
    const rows = document.createElement('div');
    rows.className = 'table__rows';
    rows.textContent = `
    ${recordsArr[i].name || 'name'}
    ${recordsArr[i].difficulty || 'difficulty'}
    ${recordsArr[i].time.slice(0, 2) || '00'}:
    ${recordsArr[i].time.slice(2) || '00'}
    `;
    table.appendChild(rows);
  }
}
