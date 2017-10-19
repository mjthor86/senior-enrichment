import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import history from '../../history';
import StudentList from '../Student/StudentList';
import { removeCampus, updateCampus } from '../../redux/campuses';

/* -----------------    COMPONENT     ------------------ */

const CampusDetail = props => {
  if (!props.campus) return <div />;
  return (
    <div className="container campus-detail">
      <div className="banner text-center text-inverted">
        <h1>{props.campus.name} Students</h1>
      </div>
      <br />
      <StudentList students={props.students} />
      <br />
      <div className="container">
        <div className="row student-detail align-items-center justify-content-md-center">
          <div className="col-12 col-md-auto">
            <form onSubmit={props.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">UPDATE CAMPUS INFO</label>
                <input className="form-control" type="text" name="campusName" placeholder="name" />
              </div>
              <div className="form-group">
                <input className="form-control" type="text" name="campusImage" placeholder="image" />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-default">UPDATE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row row align-items-center justify-content-md-center delete-button">
        <div className="col-12 col-md-auto">
          <button type="button" className="btn btn-danger" onClick={props.handleDelete}>Delete Campus</button>
        </div>
      </div>
      <br />
    </div>

  );
};

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ students, campuses }, ownProps) => {
  const paramId = Number(ownProps.match.params.id);
  return {
    campus: _.find(campuses, campus => campus.id === paramId),
    students: students.filter(student => student.campusId === paramId)
  };
};

const mapDispatch = (dispatch, ownProps) => {
  return {
    handleDelete(event) {
      event.preventDefault();
      dispatch(removeCampus(Number(ownProps.match.params.id)));
      history.push('/');
    },
    handleSubmit(event) {
      event.preventDefault();
      const newCampus = {
        name: event.target.campusName.value,
        image: event.target.campusImage.value || undefined,
      };
      dispatch(updateCampus(Number(ownProps.match.params.id), newCampus));
      event.target.campusName.value = '';
      event.target.campusImage.value = '';
    },
  };
};

export default connect(mapState, mapDispatch)(CampusDetail);
