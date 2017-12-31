import { connect } from 'react-redux';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Datepicker.css';
import { mapStateToProps, mapDispatchToProps } from '../actions/actions';


const Cell = ({
  lineCells, lineNo, hasToday, setInputDate,
}) => {
  let className = 'day';
  let onClickFunction = setInputDate;
  return (
    <tr>
      {
        lineCells.map((cell, idx) => {
          if (lineNo === 0 && cell > 22) {
            className = 'day old';
            onClickFunction = function () {};
          } else {
            className = 'day';
          }
          if (hasToday) {
            const todayDate = new Date().getDate();
            if (cell === todayDate) {
              className = 'day active';
            }
          }
          if (lineNo > 3 && cell < 7) {
            className = 'day new';
            onClickFunction = function () {};
          }
          return (<td key={`cell_${lineNo}_${idx}`} onClick={onClickFunction} className={className}>{cell}</td>);
        })
      }
    </tr>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);

