import { createWeekDaysNode, createDateNode } from './creator';

export function render(container) {
  // 创建表格
  const oTHead = document.createElement('thead');
  const oTBody = document.createElement('tbody');

  const weekDayNode = createWeekDaysNode();

  // 创建节点，还未渲染
  return function (year, month) {
    oTHead.appendChild(weekDayNode);
    container.appendChild(oTHead);
    const obj = createDateNode(year, month);
    console.log(obj);
    return container;
  };
}

export function update() {}
