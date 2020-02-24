import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button} from '@material-ui/core';

const mapStateToProps = reduxState => ({
  reduxState,
});

class SearchBar extends Component {

  state = {
    location: '',
  }

  setLocation = (event) => {
    this.setState({location: event.target.value})
  }

  getWeather = () => {
    console.log('getting weather for', this.state.location);
    this.props.dispatch({ type: 'GET_FORECAST', payload: this.state })
  }

  render() {
    return (
      <div className="SearchBar">
          <h1>Find Your City!</h1>
          <TextField onChange={this.setLocation} variant="filled" size="small" label="city/zipcode"/>
          <Button onClick={this.getWeather}>Go</Button>
      </div>
    );
  }

}

export default (connect(mapStateToProps)(SearchBar));
