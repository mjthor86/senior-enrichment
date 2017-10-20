import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import history from '../../history';
import StudentList from '../Student/StudentList';
import NewStudent from '../Student/NewStudent';
import { removeCampus, updateCampus } from '../../redux/campuses';
import { addStudent } from '../../redux/students';
import CampusEdit from './CampusEdit';

/* -----------------    COMPONENT     ------------------ */

class CampusDetail extends React.Component {

  constructor() {
    super();
    this.state = {
      showEditForm: false,
      showNewStudentForm: false,
    };
  }

  handleClickEditForm = event => {
    this.state.showEditForm ?
      this.setState({ showEditForm: false }) :
      this.setState({ showEditForm: true });
  }

  handleClickNewForm = event => {
    this.state.showNewStudentForm ?
      this.setState({ showNewStudentForm: false }) :
      this.setState({ showNewStudentForm: true });
  }

  render() {
    if (!this.props.campus) return <div />;
    return (
      <div className="container campus-detail">
        <div className="banner text-center text-inverted">
          <h1>{this.props.campus.name} Students</h1>
        </div>
        <button
          onClick={this.handleClickEditForm}
          type="submit"
          className="btn btn-default">EDIT CAMPUS INFO</button>
        <button
          onClick={this.handleClickNewForm}
          type="submit"
          className="btn btn-default">ADD STUDENT</button>
        {this.state.showEditForm &&
          (<CampusEdit handleSubmit={this.props.handleCampusSubmit} />)}
        <br />
        {this.state.showNewStudentForm &&
          (<NewStudent handleSubmit={this.props.handleStudentSubmit} />)}
        <br />
        <div className="row row align-items-center justify-content-md-center delete-button">
          <div className="col-12 col-md-auto">
            <button type="button" className="btn btn-danger" onClick={this.props.handleDelete}>Delete Campus</button>
          </div>
        </div>
        <br />
        <StudentList students={this.props.students} />
      </div>

    );
  }
}

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
    handleCampusSubmit(event) {
      event.preventDefault();
      const newCampus = {
        name: event.target.campusName.value,
        image: event.target.campusImage.value || undefined,
      };
      dispatch(updateCampus(Number(ownProps.match.params.id), newCampus));
      event.target.campusName.value = '';
      event.target.campusImage.value = '';
    },
    handleStudentSubmit(event) {
      event.preventDefault();
      const newStudent = {
        name: event.target.name.value,
        email: event.target.email.value,
        campusId: Number(ownProps.match.params.id),
      };

      dispatch(addStudent(newStudent));

      event.target.name.value = '';
      event.target.email.value = '';
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(CampusDetail));
