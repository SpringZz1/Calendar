import { update } from './date/render';
export function reactive ({ year, month })  {
  const dateInfo = {};
  // const _dateInfo = getDateInfo();
  const _dateInfo = [year, month];

  Object.defineProperties(dateInfo, {
    year: {
      get() {
        return _dateInfo[0];
      },
      set(newValue) {
        _dateInfo[0] = newValue;
        update(_dateInfo[0], _dateInfo[1]);
      },
    },
    month: {
      get() {
        return _dateInfo[1];
      },
      set(newValue) {
        _dateInfo[1] = newValue;
        // update(_dateInfo[0], 1);
        update(_dateInfo[0], _dateInfo[1]);
      },
    },
  });

  return dateInfo;
};
