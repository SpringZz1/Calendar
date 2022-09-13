import { WEEK_DAYS } from './config';
import {
  getLastMonthDayCount,
  getMonthDayCount,
  getNextMonthDayCount,
  getFormatDate,
} from './utils';

import { createTrs, getDateInfo } from '../utils';

// 保存那些不需要更新的dom节点
const domPoll = {
  weekDays: null,
  controlArea: null,
};
export function createWeekDaysNode() {
  if (!domPoll.weekDays) {
    domPoll.weekDays = document.createElement('tr');
    domPoll.weekDays.className = 'week-day';

    domPoll.weekDays.innerHTML = WEEK_DAYS.map(
      (item) => `<th>${item}</th>`
    ).join('');
  }
  return domPoll.weekDays;
}

/**
 * 创建日期节点，渲染使用
 */
export function createDateNode(year, month) {
  // 上个月要渲染的日期
  const lastMonthRestDays = getLastMonthDayCount(year, month);
  // 这个月要渲染的日期
  const currentMonthDayDays = getMonthDayCount(year, month);
  // 下个月要渲染的日期
  const nextMonthRestDays = getNextMonthDayCount(year, month);
  const dateTrArr = createTrs(6);

  // 创建节点和分配className
  const lastMonthRestDaysTD = createRestDaysTd(lastMonthRestDays);
  const currentMonthDaysTD = createCurrentDaysTd(
    currentMonthDayDays,
    year,
    month
  );
  // console.log(lastMonthRestDays, currentMonthDayDays, nextMonthRestDays);
  const nextMonthRestDaysTD = createRestDaysTd(nextMonthRestDays);

  const tdArr = [
    ...lastMonthRestDaysTD,
    ...currentMonthDaysTD,
    ...nextMonthRestDaysTD,
  ];

  let index = 0;

  dateTrArr.forEach((tr) => {
    for (let i = 0; i < 7 && tdArr[index]; i++) {
      tr.appendChild(tdArr[index++]);
    }
  });

  return dateTrArr;

  // return { lastMonthRestDaysTD, currentMonthDaysTD, nextMonthRestDaysTD };
}

/**
 * 创建上个月和下个月的日期节点
 */
function createRestDaysTd(resDays) {
  return resDays.map((item) => {
    const oTd = document.createElement('td');
    oTd.className = 'day rest-day';
    oTd.innerText = item;

    return oTd;
  });
}

/**
 * 创建当月的日期节点，同时验证是否时今年今月
 */
function createCurrentDaysTd(currentDayCount, year, month) {
  let tdArr = [];
  const [currentYear, currentMonth, currentDate] = getDateInfo();

  for (let i = 1; i <= currentDayCount; i++) {
    const oTd = document.createElement('td');
    oTd.className = 'day current-day';
    if (currentYear === year && currentMonth === month && currentDate === i) {
      oTd.className += ' current';
    }

    oTd.innerText = i;
    oTd.setAttribute('data-date', getFormatDate(year, month, i));
    tdArr.push(oTd);
  }

  return tdArr;
}

/**
 * 创建控件区
 */
export function createControlArea(year, month) {
  if (!domPoll.controlArea) {
    domPoll.controlArea = document.createElement('div');
    domPoll.controlArea.className = 'control-area';

    domPoll.controlArea.innerHTML = `
      <span class="control-button btn-year-lt">&lt;&lt;</span>
      <span class="control-button btn-month-lt">&lt;</span>
      <span class="control-show">
        <span class="control-title">
          <span class="title-year">${year}</span>年
        </span>
        <span class="control-title">
          <span class="title-month">${month}</span>月
        </span>
      </span>
      <span class="control-button btn-month-gt">&gt;</span>
      <span class="control-button btn-year-gt">&gt;&gt;</span>`;
  } else {
    domPoll.controlArea.querySelector('.title-year').innerText = year;
    domPoll.controlArea.querySelector('.title-month').innerText = month;
  }

  return domPoll.controlArea;
}
