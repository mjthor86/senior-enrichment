import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCampus } from '../../redux/campuses';


/* -----------------    COMPONENT     ------------------ */

class CampusItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameVisible: false,
    };
  }

  render() {
    const campus = this.props.campus;

    return (
      <div
        key={campus.id}
        className="campus-item thumbnail text-center"
        onMouseEnter={() => this.setState({ nameVisible: true })}
        onMouseLeave={() => this.setState({ nameVisible: false})}
      >
        <Link to={`/campuses/${campus.id}`}>
          <img src={campus.image} className="img-responsive" width="180" height="180" />
          {this.state.nameVisible &&
            (
              <div className="caption"><p>{campus.name}</p></div>
            )}
        </Link>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */


const mapState = (state, ownProps) => {
  return {
    campuses: state.campuses,
    ownProps
  };
};

const mapDispatch = { removeCampus };

export default connect(mapState, mapDispatch)(CampusItem);
