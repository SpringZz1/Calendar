/**
 * 创建表格内容
 */
export function createTrs(count) {
  const trArr = [];

  for (let i = 0; i < count; i++) {
    const oTr = document.createElement('tr');
    trArr.push(oTr);
  }

  return trArr;
}

/**
 * 工具函数
 */
export function getDateInfo(timeStamp) {``
  let date = timeStamp ? new Date(timeStamp) : new Date();

  return [date.getFullYear(), date.getMonth() + 1, date.getDate()];
}
