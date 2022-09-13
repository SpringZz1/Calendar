import { createYearControlArea, createYearNode } from './creator';
import { getStarYearAndEndYear } from './utils';
import './index.scss';

export function render(container, year) {
  container.innerHTML = '';
  const oTable = document.createElement('table');
  oTable.className = 'my-year-calendar-table';

  const controlArea = createYearControlArea(year);
  // console.log(controlArea);
  const yearNode = createYearNode(year);

  yearNode.forEach((tr) => {
    oTable.appendChild(tr);
  });

  container.appendChild(controlArea);
  container.appendChild(oTable);
}

export function update(year) {
  const oTable = document.querySelector('.my-year-calendar-table');
  const oStartYear = document.querySelector('.start-year');
  const oEndYear = document.querySelector('.end-year');

  const yearNode = createYearNode(year);
  const [startYear, endYear] = getStarYearAndEndYear(year);

  oStartYear.innerText = startYear;
  oEndYear.innerText = endYear;

  oTable.innerHTML = '';

  yearNode.forEach((tr) => {
    oTable.appendChild(tr);
  });
}
