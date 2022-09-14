import { createTable } from '../creator';
import {
  createWeekDaysNode,
  createDateNode,
  createControlArea,
} from './creator';

import './index.scss';

export function render(container, year, month) {
  container.innerHTML = '';
  // 创建表格
  const oTable = createTable('my-calendar-table');
  const oTHead = document.createElement('thead');
  const oTBody = document.createElement('tbody');

  const weekDayNode = createWeekDaysNode();

  oTBody.className = 'my-calendar-body';
  // oTable.className = 'my-calendar-table';

  // 创建节点，还未渲染
  const dateTrs = createDateNode(year, month);
  const controlArea = createControlArea(year, month);
  oTHead.appendChild(weekDayNode);
  dateTrs.forEach((tr) => {
    oTBody.appendChild(tr);
  });

  oTable.appendChild(oTHead);
  oTable.appendChild(oTBody);
  container.appendChild(controlArea);
  container.appendChild(oTable);

  // const obj = createDateNode(year, month);
  // console.log(obj);
}

export function update(year, month) {
  // const oTHead = document.createElement('thead');
  const oTBody = document.querySelector('.my-calendar-body');
  const oTitleYear = document.querySelector('.title-year');
  const oTitleMonth = document.querySelector('.title-month');
  // oTBody = document.querySelector('.my-calendar-body');
  const dateTrs = createDateNode(year, month);
  oTBody.innerHTML = '';
  oTitleYear.innerText = year;
  oTitleMonth.innerText = month;
  // console.log(dateTrs);

  dateTrs.forEach((tr) => {
    oTBody.appendChild(tr);
  });
}
