import { connect } from 'react-redux';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Datepicker.css';
import Cell from './Cell';
import { mapStateToProps, mapDispatchToProps } from '../actions/actions';

const Body = ({ dateGrid }) => (
  <tbody>
    {dateGrid.map((lineCells, i) => (
      <Cell key={`body_${i}`} lineCells={lineCells} lineNo={i} />
    ))}
  </tbody>);
export default connect(mapStateToProps, mapDispatchToProps)(Body);

