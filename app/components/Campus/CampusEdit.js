import React from 'react';
import history from '../../history';

// form validations and re-fresh after update

const CampusEdit = props => {
  return (
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
  );
};

export default CampusEdit;
