import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import history from '../../history';
import { removeStudent, updateStudent } from '../../redux/students';
import { removeCampus } from '../../redux/campuses';

/* -----------------    COMPONENT     ------------------ */

const StudentDetail = props => {
  const student = props.student;

  if (!props.student) return <div />;
  return (
    <div className="container student-detail-container">
      <div className="row student-detail align-items-center">
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
            onClick={props.removeStudentCallback}>
            <span className="fa fa-remove" />
          </button>
        </div>
      </div>
      <div className="row student-detail align-items-center">
        <div className="col-12">
          <form onSubmit={props.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">UPDATE STUDENT INFO</label>
              <input className="form-control" type="text" name="studentName" placeholder="name" />
            </div>
            <div className="form-group">
              <input className="form-control" type="text" name="studentEmail" placeholder="email" />
            </div>
            <div className="form-group">
              <input className="form-control" type="text" name="studentCampus" placeholder="campus" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-default">UPDATE</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ students }, ownProps) => {
  const paramId = Number(ownProps.match.params.id);
  return {
    student: _.find(students, student => student.id === paramId),
    students
  };
};

const mapDispatch = (dispatch, ownProps) => {
  return {
    removeStudent,
    removeCampus,
    handleSubmit(event) {
      event.preventDefault();
      const newStudent = {
        name: event.target.studentName.value,
        email: event.target.studentEmail.value,
        campusId: Number(event.target.studentCampus.value),
      };

      dispatch(updateStudent(ownProps.match.params.id, newStudent));

      event.target.studentName.value = '';
      event.target.studentEmail.value = '';
      event.target.studentCampus.value = '';
    },
    removeStudentCallback(event) {
      event.stopPropagation();
      dispatch(removeStudent(ownProps.match.params.id));
      history.push('/');
    }
  };
};

export default connect(mapState, mapDispatch)(StudentDetail);
