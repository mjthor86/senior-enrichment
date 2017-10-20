import React from 'react';
import history from '../../history';

const NewCampus = props => {
  return (
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
  );
};

export default NewCampus;
