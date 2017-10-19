import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import history from '../history';
import { logoutUser } from '../redux';

/* -----------------    COMPONENT     ------------------ */

const Navbar = props => {
  return (
    <nav className="navbar navbar-inverse bg-inverse navbar-toggleable-sm">
      <div className="container">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleContainer"
          aria-controls="navbarsExampleContainer"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <Link className="navbar-brand" to="/"><img src="/logo.png" width="50" height="50" className="d-inline-block align-middle" alt="logo" /> MHIAJS</Link>

        <div className="collapse navbar-collapse" id="navbarsExampleContainer">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/campuses" activeClassName="active">Campuses</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/students" activeClassName="active">Students</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

/* -----------------    CONTAINER     ------------------ */

// <NavLink to="/campuses" activeClassName="active">
//   <button className="btn-sm btn-outline-primary">campuses</button>
// </NavLink>
// <NavLink to="/students" activeClassName="active">
//   <button className="btn-sm btn-outline-success">students</button>
// </NavLink>
const mapProps = null;

const mapDispatch = dispatch => ({
  logout: () => {
    dispatch(logoutUser());
    history.push('/');
  }
});

export default withRouter(connect(mapProps, mapDispatch)(Navbar));

// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container">
//     <div className="navbar-header">
//       <button
//         type="button"
//         className="navbar-toggle collapsed"
//         data-toggle="collapse"
//         data-target=".navbar-collapse">
//         <span className="icon-bar" />
//         <span className="icon-bar" />
//         <span className="icon-bar" />
//       </button>
//       <Link className="navbar-brand" to="/">
//         <img src="favicon.ico" width="30" height="30" className="d-inline-block align-top" alt="logo" />
//         MHIAJS
// </Link>
//     </div>
//     <div className="collapse navbar-collapse">
// <ul className="nav navbar-nav">
//   <li>
//     <NavLink to="/users" activeClassName="active">users</NavLink>
//   </li>
//   <li>
//     <NavLink to="/stories" activeClassName="active">stories</NavLink>
//   </li>
// </ul>
//     </div>
//   </div>
// </nav>
