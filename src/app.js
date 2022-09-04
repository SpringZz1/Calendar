import myCalendar from './components/Calendar';

(() => {
  // 不能和引入重名
  const calendar = myCalendar();
  // 将函数处理结果给oApp然后进行dom节点渲染
  const oApp = document.querySelector('#app');
  const dateInfo = calendar.getDateInfo();

  const init = () => {
    render(...dateInfo);
  };

  function render(...args) {
    oApp.appendChild(calendar.render(...args));
  }

  init();
})();
