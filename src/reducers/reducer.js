const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const now = new Date();
const converDateGrid = (year, month, lastDate, firstWeekDay) => {
  var lastMonthLastDate = new Date(year, month, 0).getDate();
  const dateGrid = [];
  let lineArr = [0, 0, 0, 0, 0, 0, 0];
  // 第一列本月以前的日期
  for (let i = firstWeekDay - 1; i > -1; i -= 1) {
    lineArr[i] = lastMonthLastDate;
    lastMonthLastDate -= 1;
  }
  // 第一列本月之後的日期
  let dateCounter = 1;
  for (let i = firstWeekDay; i < 7; i += 1) {
    lineArr[i] = dateCounter;
    dateCounter += 1;
  }
  let lineCounter = 0;
  let rowCounter = 0;
  dateGrid[lineCounter] = lineArr;
  lineArr = [0, 0, 0, 0, 0, 0, 0];
  lineCounter += 1;
  // 之後的每一列
  for (dateCounter; dateCounter <= lastDate; dateCounter += 1) {
    lineArr[rowCounter] = dateCounter;
    if (rowCounter === 6 && dateCounter < lastDate) {
      dateGrid[lineCounter] = lineArr;
      lineArr = [0, 0, 0, 0, 0, 0, 0];
      lineCounter += 1;
    }
    rowCounter += 1;
    rowCounter %= 7;
  }
  dateCounter = 1;
  for (let i = 0; i < 7; i += 1) {
    if (lineArr[i] === 0) {
      lineArr[i] = dateCounter;
      dateCounter += 1;
    }
  }
  // 加入最後一行
  dateGrid[lineCounter] = lineArr;
  return dateGrid;
};

const initialState = {
  year: now.getFullYear(),
  month: now.getMonth(),
  lastDate: new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate(),
  monthName: monthNames[now.getMonth()],
  firstWeekDay: new Date(now.getFullYear(), now.getMonth(), 1).getDay(),
  hasToday: true,
  showCal: false,
  dateGrid: converDateGrid(
    now.getFullYear(), now.getMonth()
    , new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate(),
    new Date(now.getFullYear(), now.getMonth(), 1).getDay()
  ),
  x: 300,
  y: 300,
  selectedDate: '',
};

export default (state = initialState, action) => {
  // clone state first, avoid mutate original state
  const cloneState = JSON.parse(JSON.stringify(state));
  const month = cloneState.month;
  const year = cloneState.year;
  const currentDate = new Date();
  let newDate;
  switch (action.type) {
    case 'SET_MONTH':
      return cloneState;
    case 'MAKE_CALENDAR_VISIBLE':
      cloneState.x = action.x - 5;
      cloneState.y = action.y + 17;
      cloneState.showCal = !cloneState.showCal;
      return cloneState;
    case 'SET_NEXT':
      newDate = new Date(year, month + 2, 0);
      // 是不是本年本月，如果是，才有和今天相同的日期
      if (newDate.getFullYear() === currentDate.getFullYear()
         && newDate.getMonth() === currentDate.getMonth()) {
        cloneState.hasToday = true;
      } else {
        cloneState.hasToday = false;
      }
      cloneState.year = newDate.getFullYear();
      cloneState.month = newDate.getMonth();
      cloneState.lastDate = newDate.getDate();
      cloneState.firstWeekDay = newDate.getDay();
      cloneState.monthName = monthNames[cloneState.month];
      cloneState.dateGrid = converDateGrid(
        newDate.getFullYear(), newDate.getMonth()
        , new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate(),
        new Date(newDate.getFullYear(), newDate.getMonth(), 1).getDay()
      );
      return cloneState;
    case 'SET_PREV':
      newDate = new Date(year, month, 0);
      // 是不是本年本月，如果是，才有和今天相同的日期
      if (newDate.getFullYear() === currentDate.getFullYear()
        && newDate.getMonth() === currentDate.getMonth()) {
        cloneState.hasToday = true;
      } else {
        cloneState.hasToday = false;
      }
      cloneState.year = newDate.getFullYear();
      cloneState.month = newDate.getMonth();
      cloneState.lastDate = newDate.getDate();
      cloneState.firstWeekDay = newDate.getDay();
      cloneState.monthName = monthNames[cloneState.month];
      cloneState.dateGrid = converDateGrid(
        newDate.getFullYear(), newDate.getMonth()
        , new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate(),
        new Date(newDate.getFullYear(), newDate.getMonth(), 1).getDay()
      );
      return cloneState;
    case 'SET_INPUT_DATE':
      cloneState.selectedDate = `${cloneState.year}/${cloneState.month + 1}/${action.selectedDate}`;
      return cloneState;
    default:
      return state;
  }
};
