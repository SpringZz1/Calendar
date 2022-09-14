import myCalendar from './components/Calendar';

(() => {
  // 不能和引入重名
  const calendar = myCalendar('#app', (date) => {
    // console.log(date);
  });
})();
