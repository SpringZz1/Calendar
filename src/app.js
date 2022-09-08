import myCalendar from './components/Calendar';

(() => {
  // 不能和引入重名
  const calendar = myCalendar('#app', [2022, 9], (date) => {
    console.log(date);
  });
})();
