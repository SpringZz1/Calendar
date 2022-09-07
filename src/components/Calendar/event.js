let target = null;

export default (container, handler, dateInfo) => {
  container.addEventListener(
    'click',
    handlClick.bind(null, handler, dateInfo),
    false
  );
};

function handlClick(...args) {
  const [handler, dateInfo, e] = args;

  const tar = e.target;
  const className = tar.className;

  if (className.includes('current-day')) {
    dateClick(tar, handler);
    return;
  }

  controlClick(className, dateInfo);
}

function dateClick(tar, handler) {
  // 切换节点的classname
  if (target) {
    target.className = target.className.replace('selected', '');
  }
  target = tar;
  tar.className += ' selected';

  // handler存在就执行
  handler && handler(tar.dataset.date);
}

function controlClick(className, dateInfo) {
  switch (className) {
    case 'control-button btn-year-lt':
      dateInfo.year -= 1;
      break;
    case 'control-button btn-month-lt':
      dateInfo.month -= 1;
      // console.log('month-lt');
      break;
    case 'control-button btn-year-gt':
      dateInfo.year += 1;
      // console.log('year-gt');
      break;
    case 'control-button btn-month-gt':
      dateInfo.month += 1;
      // console.log('month-gt');
      break;
    default:
      break;
  }
}
