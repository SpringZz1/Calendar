import { getDateInfo } from './utils';
import { render, update } from './render';

export default () => {
  const oContainer = document.createElement('table');
  // oContainer.border = 1;
  oContainer.className = 'my-calendar';

  return {
    render: render(oContainer), // 柯里化render函数
    update,
    getDateInfo,
  };
};
