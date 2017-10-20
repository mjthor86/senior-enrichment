import React from 'react';
import history from '../../history';

const NewStudent = props => {
  return (
      <div className="row student-detail align-items-center">
        <div className="col-12">
          <form onSubmit={props.handleSubmit}>
            <div className="form-group">
            <label htmlFor="name">ADD STUDENT TO CAMPUS</label>
              <input className="form-control" type="text" name="name" placeholder="name" />
            </div>
            <div className="form-group">
              <input className="form-control" type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-default">SAVE</button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default NewStudent;
