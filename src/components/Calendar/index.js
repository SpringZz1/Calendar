import { getDateInfo } from './utils';
import { render, update } from './render';
import './index.scss';
import event from './event';
import reactive from './reactive';

export default (handler) => {
  const oContainer = document.createElement('div');
  const dateInfo = reactive();
  // oContainer.border = 1;
  oContainer.className = 'my-calendar';

  event(oContainer, handler, dateInfo);

  return {
    render: render(oContainer), // 柯里化render函数
    update,
    getDateInfo,
  };
};
