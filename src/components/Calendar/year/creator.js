import { createTrs, getDateInfo } from '../utils';
import { createDecadeYears, getStarYearAndEndYear } from './utils';

const domPool = {
  controlArea: null,
};

export function createYearControlArea(year) {
  // 解构出返回值
  const [startYear, endYear] = getStarYearAndEndYear(year);

  if (!domPool.controlArea) {
    domPool.controlArea = document.createElement('div');
    domPool.controlArea.className = 'year-control-area';

    domPool.controlArea.innerHTML = `
    <span class="year-control-button btn-year-lt">&lt;&lt;</span>
    <span class="control-show">
      <span class="control-title">
        <span class="start-year">${startYear}</span>月
        -
        <span class="end-year">${endYear}</span>月
      </span>
    </span>
    <span class="year-control-button btn-year-gt">&gt;&gt;</span>
    `;
  } else {
    domPool.controlArea.querySelector('.start-year').innerText = startYear;
    domPool.controlArea.querySelector('.end-year').innerText = startYear;
  }
  // console.log(domPool.controlArea);

  return domPool.controlArea;
}

export function createYearTD(year) {
  const decadeYearArr = createDecadeYears(year);
  const [currentYear] = getDateInfo();
  const tdArr = [];

  decadeYearArr.forEach((year) => {
    const oTd = document.createElement('td');
    oTd.className = 'year decade-year';
    if (year === currentYear) {
      oTd.className += ' current';
    }

    oTd.innerText = year;
    oTd.setAttribute('data-year', year);
    tdArr.push(oTd);
  });

  return tdArr;
}

export function createYearNode(year) {
  const yearTrArr = createTrs(3);
  const yearTds = createYearTD(year);

  let index = 0;

  yearTrArr.forEach((tr) => {
    for (let i = 0; i < 4 && yearTds[index]; i++) {
      tr.appendChild(yearTds[index++]);
    }
  });

  return yearTrArr;
}
