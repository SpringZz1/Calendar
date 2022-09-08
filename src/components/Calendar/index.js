import { render } from './date/render';
import './index.scss';
import event from './event';
import { reactive } from './store';

export default (el, [year, month], handler) => {
  const oApp = document.querySelector(el);
  const oContainer = document.createElement('div');
  const dateInfo = reactive({ year, month });
  // oContainer.border = 1;
  oContainer.className = 'my-calendar';

  render(oContainer, year, month);

  event(oContainer, handler, dateInfo);

  oApp.appendChild(oContainer);
};
