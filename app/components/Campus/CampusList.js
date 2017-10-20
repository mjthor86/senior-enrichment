import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCampus } from '../../redux/';
import CampusItem from './CampusItem';
import NewCampus from './NewCampus';
import history from '../../history';

/* -----------------    COMPONENT     ------------------ */

class CampusList extends React.Component {
  constructor() {
    super();
    this.state = {
      showForm: false
    };
  }

  handleClick = event => {
    this.state.showForm ?
      this.setState({ showForm: false }) :
      this.setState({ showForm: true });
  }

  render() {
    return (
      <div className="container campus-list">
        <button
          onClick={this.handleClick}
          type="submit"
          className="btn btn-default">ADD CAMPUS</button>
        {this.state.showForm &&
          (<NewCampus handleSubmit={this.props.handleCampusSubmit} />)}
        <div className="d-flex justify-content-around align-items-center flex-wrap row">
          {this.props.campuses.map(campus =>
            (
              <CampusItem key={campus.id} campus={campus} />
            )
          )}
        </div>
        <br />
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ campuses }) => ({ campuses });

const mapDispatch = (dispatch, ownProps) => {
  return {
    handleSubmit(event) {
      event.preventDefault();
      const newCampus = {
        name: event.target.campusName.value,
        image: event.target.campusImage.value || undefined,
      };
      console.log(newCampus);
      dispatch(addCampus(newCampus));
      event.target.campusName.value = '';
      event.target.campusImage.value = '';
      history.push('/campuses');
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(CampusList));

