import React from 'react';
import history from '../../history';

const StudentEdit = props => {
  return (
      <div className="row student-detail align-items-center">
        <div className="col-12">
          <form onSubmit={props.handleSubmit}>
            <div className="form-group">
              <input className="form-control" type="text" name="name" placeholder="name" />
            </div>
            <div className="form-group">
              <input className="form-control" type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <input className="form-control" type="text" name="campusId" placeholder="campus" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-default">UPDATE</button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default StudentEdit;
