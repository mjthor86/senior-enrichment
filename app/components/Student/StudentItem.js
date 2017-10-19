import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeStudent } from '../../redux/students';
import { removeCampus } from '../../redux/campuses';

/* -----------------    COMPONENT     ------------------ */

const StudentItem = props => {
  const student = props.student;

  const removeStudentCallback = event => {
    // const { removeStudent } = this.props;
    event.stopPropagation();
    props.removeStudent(student.id);
  };

  return (
    <div className="row student-item align-items-center">
      <div className="col-2">
        <img className="d-flex align-self-center mr-3" height="50" width="50" src={student.photo} />
      </div>
      <div className="col-8">
        <NavLink
          activeClassName="active student-link"
          to={`/students/${student.id}`}>
          <h2 className="student-name">{student.name}</h2>
          <h5>{student.email}</h5>
        </NavLink>
        <NavLink
          activeClassName="active"
          to={`/campuses/${student.campusId}`}>
          <h5>Campus: {student.campusId}</h5>
        </NavLink>
      </div>
      <div className="col-2">
        <button
          className="btn btn-default"
          onClick={removeStudentCallback}>
          <span className="fa fa-remove" />
        </button>
      </div>
    </div>
  );

};

/* -----------------    CONTAINER     ------------------ */

const mapState = (state, ownProps) => {
  return {
    students: state.students,
    ownProps
  };
};

const mapDispatch = { removeStudent, removeCampus };

export default connect(mapState, mapDispatch)(StudentItem);
