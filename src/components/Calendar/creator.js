import { WEEK_DAYS } from './config';
import {
  getDateInfo,
  getLastMonthDayCount,
  getMonthDayCount,
  getNextMonthDayCount,
  getFormatDate,
} from './utils';

export function createWeekDaysNode() {
  const oTr = document.createElement('tr');
  oTr.className = 'week-day';

  oTr.innerHTML = WEEK_DAYS.map((item) => `<th>${item}</th>`).join('');

  return oTr;
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
  const dateTrArr = createDateTrs(6);

  // 创建节点和分配className
  const lastMonthRestDaysTD = createRestDaysTd(lastMonthRestDays);
  const currentMonthDaysTD = createCurrentDaysTd(
    currentMonthDayDays,
    year,
    month
  );
  console.log(lastMonthRestDays, currentMonthDayDays, nextMonthRestDays);
  const nextMonthRestDaysTD = createRestDaysTd(nextMonthRestDays);

  const tdArr = [
    ...lastMonthRestDaysTD,
    ...currentMonthDaysTD,
    ...nextMonthRestDaysTD,
  ];

  let index = 0;

  dateTrArr.forEach((tr) => {
    for (let i = 0; i < 7; i++) {
      tr.appendChild(tdArr[index]);
      index++;
    }
  });

  return dateTrArr;

  // return { lastMonthRestDaysTD, currentMonthDaysTD, nextMonthRestDaysTD };
}

/**
 * 日历一次显示42填内容，因此分为6*7，一行显示一周
 */
export function createDateTrs(count) {
  const trArr = [];

  for (let i = 0; i < count; i++) {
    const oTr = document.createElement('tr');
    trArr.push(oTr);
  }

  return trArr;
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

    if (currentYear === year && currentMonth === month && currentDate === i) {
      oTd.className = 'day current-day current';
    } else {
      oTd.className = 'day current-day';
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
  const oArea = document.createElement('div');
  oArea.className = 'control-area';

  oArea.innerHTML = `
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

  return oArea;
}
