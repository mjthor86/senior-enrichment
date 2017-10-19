import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addStudent } from '../../redux/students';
import StudentItem from './StudentItem';

// /* -----------------    COMPONENT     ------------------ */

const StudentList = props => {
  const students = props.ownProps.students ? props.ownProps.students : props.students;

  return (
    <div className="container d-flex flex-wrap align-content-start justify-content-around">
      {students.map(student =>
      (
        <StudentItem key={student.id} student={student} />
      )
      )}
    </div>
  );
};

// /* -----------------    CONTAINER     ------------------ */

const mapState = ({ students }, ownProps) => ({ students, ownProps });

const mapDispatch = { addStudent };

export default connect(mapState, mapDispatch)(StudentList);
