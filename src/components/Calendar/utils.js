/**
 * 获取某年某月的一号是周几
 */
function getFirstWeekDay(year, month) {
  // MDN中说Date的api中month是从0(1月)开始
  const date = new Date(year, month - 1, 1);
  return date.getDay();
}

/**
 * 知道某年某月有多少天
 */
export function getMonthDayCount(year, month) {
  // 最后参数填0，则获取到这个月最后一天是几号，也就能知道这个月到底多少天
  const date = new Date(year, month, 0);
  return date.getDate();
}

/**
 * 了解要渲染上个月的日期是几号
 */
export function getLastMonthDayCount(year, month) {
  // 获取这个月一号是周几
  const days = getFirstWeekDay(year, month);
  // 获取上个月总共多少天
  let lastDate = getMonthDayCount(year, month - 1);
  const resDays = [];

  while (resDays.length < days) {
    resDays.push(lastDate--);
  }

  return resDays.reverse();
}

/**
 * 了解要渲染下个月的日期是几号
 */
export function getNextMonthDayCount(year, month) {
  const lastMonthRestDayCount = getFirstWeekDay(year, month);
  const currentMonthDayCount = getMonthDayCount(year, month);
  const nextMonthRestDayCount =
    42 - (lastMonthRestDayCount + currentMonthDayCount);

  let resDays = [];

  for (let i = 1; i <= nextMonthRestDayCount; i++) {
    resDays.push(i);
  }

  return resDays;
}

/**
 * 工具函数
 */
export function getDateInfo(timeStamp) {
  let date = timeStamp ? new Date(timeStamp) : new Date();

  return [date.getFullYear(), date.getMonth() + 1, date.getDate()];
}

/**
 * 设置渲染格式，如果月份和日小于10，则返回0+月份或者日
 */
export function getFormatDate(year, month, date) {
  const dateArr = [year, month, date];

  for (let i = 1; i < dateArr.length; i++) {
    dateArr[i] < 10 && (dateArr[i] = '0' + dateArr[i]);
  }

  return dateArr.join('-');
}
