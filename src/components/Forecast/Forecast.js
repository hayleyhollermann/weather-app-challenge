import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
  reduxState,
});

class Forecast extends Component {

  state = {
    location: '',
  }


  render() {
    return (
      <div className="Forecast">
          {JSON.stringify(this.props.reduxState)}
      </div>
    );
  }

}

export default (connect(mapStateToProps)(Forecast));
