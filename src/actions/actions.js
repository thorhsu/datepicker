function mapStateToProps(state) {
  return state;
}


function mapDispatchToProps(dispatch) {
  return {
    setMonth: function (year, month) {
      dispatch({
        type: 'SET_MONTH',
        year,
        month,
      });
    },
    setInputDate: (e) => {
      dispatch({
        type: 'SET_INPUT_DATE',
        selectedDate: e.target.childNodes[0].nodeValue,
      });
    },
    changeDate: (e) => {
      dispatch({
        type: 'CHANGE_DATE',
        selectedDate: e.target.value,
      });
    },
    makeCalenderVisible: (e) => {
      const x = e.clientX;
      const y = e.clientY;
      dispatch({
        type: 'MAKE_CALENDAR_VISIBLE',
        x,
        y,
      });
    },
    setInput: (e) => {
      dispatch({
        type: 'SET_INPUT',
      });
    },
    setNext: () => {
      dispatch({
        type: 'SET_NEXT',
      });
    },
    setPrev: () => {
      dispatch({
        type: 'SET_PREV',
      });
    },
  };
}
export { mapDispatchToProps, mapStateToProps };
