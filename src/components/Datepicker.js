import { connect } from 'react-redux';
import React from 'react';
import Head from './Head';
import Body from './Body';
import './Datepicker.css';
import { mapStateToProps, mapDispatchToProps } from '../actions/actions';

const Datepicker = ({
  showCal, x, y, makeCalenderVisible, selectedDate,
}) => (
  <div className="row">
    <div className="input-group date col-xs-4">
        <input type="text" className="form-control" value={selectedDate}/>
        <span className="input-group-addon" onClick={e => makeCalenderVisible(e)}>
          <span className="glyphicon glyphicon-calendar"></span>
        </span>
    </div>
    <div className="datetimepicker datetimepicker-dropdown-bottom-right dropdown-menu"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        zIndex: '100',
        display: `${showCal ? 'block' : 'none'}`,
        }}>
        <table className="table-condensed" key="table">
          <Head />
          <Body />
        </table>
    </div>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Datepicker);
