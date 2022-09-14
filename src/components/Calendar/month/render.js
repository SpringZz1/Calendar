import { createTable } from '../creator';
import { createMonthControlArea, createMonthNode } from './creator';

import './index.scss';

export function render(container, year, month) {
  container.innerHTML = '';
  // const oTable = document.createElement('table');
  const oTable = createTable('my-month-calendar-table');
  const controlArea = createMonthControlArea(year);
  // console.log([year, month]);
  const monthNode = createMonthNode(month);

  monthNode.forEach((tr) => {
    oTable.appendChild(tr);
  });

  container.appendChild(controlArea);
  container.appendChild(oTable);
}

export function update(year) {
  const oYear = document.querySelector('.title-year');
  oYear.innerText = year;
}
