import { connect } from 'react-redux';
import React from 'react';
import './Datepicker.css';
import { mapStateToProps, mapDispatchToProps } from '../actions/actions';

const Head = ({
  year, monthName, setNext, setPrev,
}) => (
  <thead>
    <tr>
      <th className="prev" style={{ visibility: 'visible' }} onClick={setPrev}>
        <i className="glyphicon glyphicon-arrow-left"></i>
      </th>
      <th colSpan="5" className="switch">{monthName} {year}</th>
      <th className="next" style={{ visibility: 'visible' }} onClick={setNext}>
        <i className="glyphicon glyphicon-arrow-right"></i>
      </th>
    </tr>
    <tr>
      <th className="dow">Su</th>
      <th className="dow">Mo</th>
      <th className="dow">Tu</th>
      <th className="dow">We</th>
      <th className="dow">Th</th>
      <th className="dow">Fr</th>
      <th className="dow">Sa</th>
    </tr>
  </thead>
);

export default connect(mapStateToProps, mapDispatchToProps)(Head);
