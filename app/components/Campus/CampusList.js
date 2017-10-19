import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCampus } from '../../redux/';
import CampusItem from './CampusItem';
import history from '../../history';

/* -----------------    COMPONENT     ------------------ */

const CampusList = props => {
  return (
    <div className="container">
      <div className="d-flex justify-content-around align-items-center flex-wrap row">
        {props.campuses.map(campus =>
          (
            <CampusItem key={campus.id} campus={campus} />
          )
        )}
      </div>
      <br />
      <br />
      <div className="row student-detail align-items-center">
        <div className="col-12">
          <form onSubmit={props.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">CREATE NEW CAMPUS</label>
              <input className="form-control" type="text" name="campusName" placeholder="name" />
            </div>
            <div className="form-group">
              <input className="form-control" type="text" name="campusImage" placeholder="image" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-default">CREATE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

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

export default connect(mapState, mapDispatch)(CampusList);

