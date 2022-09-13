import { update as dateUpdate, render as dateRender } from './date/render';

import { update as yearUpdate, render as yearRender } from './year/render';

export const ALLOWED_FLAGS = {
  YEAR: 'YEAR',
  MONTH: 'MONTHH',
  DATE: 'DATE',
};

let currentFlag = ALLOWED_FLAGS.DATE;

export function getFlag() {
  return currentFlag;
}

export function setFlag(value, container, { year, month }) {
  // console.log({ year, month });
  if (ALLOWED_FLAGS[value]) {
    currentFlag = ALLOWED_FLAGS[value];

    switch (currentFlag) {
      case ALLOWED_FLAGS.YEAR:
        yearRender(container, year);
        break;
      case ALLOWED_FLAGS.MONTH:
        break;
      case ALLOWED_FLAGS.DATE:
        dateRender(container, year, month);
        break;
      default:
        break;
    }
  }
}

export function reactive({ year, month }) {
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
        update(..._dateInfo);
      },
    },
    month: {
      get() {
        return _dateInfo[1];
      },
      set(newValue) {
        _dateInfo[1] = newValue;
        // update(_dateInfo[0], 1);
        update(..._dateInfo);
      },
    },
  });

  return dateInfo;
}

function update(year, month) {
  switch (currentFlag) {
    case ALLOWED_FLAGS.YEAR:
      yearUpdate(year);
      break;
    case ALLOWED_FLAGS.MONTH:
      break;
    case ALLOWED_FLAGS.DATE:
      dateUpdate(year, month);
      break;
    default:
      break;
  }
}
